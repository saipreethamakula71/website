import { groq } from '@ai-sdk/groq';
import { streamText, convertToModelMessages } from 'ai';
import { NextRequest } from 'next/server';
import { getProjectBySlug } from '@/lib/content';

export async function POST(req: NextRequest) {
  try {
    const { messages, slug } = await req.json();

    const project = slug ? getProjectBySlug(slug) : null;
    const projectReadme = project?.content || "No README content found.";

    const systemMessage = `You are a helpful, expert AI assistant that answers questions based on the provided project README. 
Be concise and helpful. If the user asks something not in the README, you can try to infer from the context or politely let them know it's not documented.

Here is the project README:
${projectReadme}`;

    const result = await streamText({
      model: groq('llama-3.3-70b-versatile'),
      system: systemMessage,
      messages: await convertToModelMessages(messages),
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error('Chat API Error:', error);
    return new Response(JSON.stringify({ error: 'Failed to process chat request' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
