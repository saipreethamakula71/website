import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { question, readme, history } = await req.json();

    const rawKeys = process.env.GROQ_API_KEYS || process.env.GROQ_API_KEY || "";
    const apiKeys = rawKeys.split(',').map(k => k.trim()).filter(k => k.length > 0);

    if (apiKeys.length === 0) {
      return NextResponse.json({ error: "No API keys configured" }, { status: 500 });
    }

    let lastStatus = 500;

    for (const apiKey of apiKeys) {
      try {
        const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
          },
          body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: [
              {
                role: "system",
                content: `You are a helpful assistant answering questions about a software project. Answer based only on the README below. If the answer isn't in it, say so. Be concise.\n\nREADME:\n${readme}`
              },
              ...history,
              { role: "user", content: question }
            ]
          })
        });

        if (res.ok) {
          const data = await res.json();
          return NextResponse.json(data);
        }

        const errorText = await res.text();
        console.warn(`Groq API error with key ending in ...${apiKey.slice(-4)}:`, res.status, errorText);
        lastStatus = res.status;
        
        // Continue to the next key if this one failed
      } catch (err: any) {
        console.warn(`Network error with key ending in ...${apiKey.slice(-4)}:`, err.message);
        lastStatus = 500;
        // Continue to the next key
      }
    }

    return NextResponse.json({ error: "All provided API keys failed" }, { status: lastStatus });
  } catch (error) {
    console.error("Error in readme-chat:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
