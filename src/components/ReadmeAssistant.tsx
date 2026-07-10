"use client";

import { useState } from "react";
import { Send, Bot, User } from "lucide-react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const SUGGESTED_QUESTIONS = [
  "What modules does this use?",
  "How do I install this?",
  "What does this project do?",
  "How is the code structured?",
];

export default function ReadmeAssistant({ readme }: { readme: string }) {
  const [history, setHistory] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (question: string) => {
    if (!question.trim()) return;

    const newHistory = [...history, { role: "user", content: question } as Message];
    setHistory(newHistory);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/readme-chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question,
          readme,
          history: history.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to fetch");
      }

      const data = await res.json();
      const assistantMessage = data.choices?.[0]?.message?.content || "Sorry, I couldn't process that request.";

      setHistory([...newHistory, { role: "assistant", content: assistantMessage }]);
    } catch (error) {
      console.error(error);
      setHistory([...newHistory, { role: "assistant", content: "Sorry, an error occurred while connecting to the assistant." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <div className="mt-16 border border-neutral-800 rounded-xl overflow-hidden bg-neutral-900/50">
      <div className="p-4 border-b border-neutral-800 bg-neutral-900 flex items-center gap-2">
        <Bot size={20} className="text-brand-teal" />
        <h3 className="font-mono text-sm font-semibold">README Assistant</h3>
      </div>

      <div className="p-6 space-y-6">
        {history.length === 0 ? (
          <div className="space-y-4">
            <p className="text-neutral-400 text-sm">Ask me anything about this project based on its README!</p>
            <div className="flex flex-wrap gap-2">
              {SUGGESTED_QUESTIONS.map((q) => (
                <button
                  key={q}
                  onClick={() => sendMessage(q)}
                  className="px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 rounded-full text-xs transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-6 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
            {history.map((msg, i) => (
              <div key={i} className={`flex gap-4 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                {msg.role === "assistant" && (
                  <div className="w-8 h-8 rounded-full bg-brand-teal/20 flex items-center justify-center shrink-0">
                    <Bot size={16} className="text-brand-teal" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
                    msg.role === "user"
                      ? "bg-brand-teal text-[#0d0d0d] rounded-tr-sm"
                      : "bg-neutral-800 text-neutral-200 rounded-tl-sm prose prose-invert prose-sm"
                  }`}
                >
                  {msg.content}
                </div>
                {msg.role === "user" && (
                  <div className="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center shrink-0">
                    <User size={16} className="text-neutral-300" />
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-4 justify-start">
                <div className="w-8 h-8 rounded-full bg-brand-teal/20 flex items-center justify-center shrink-0">
                  <Bot size={16} className="text-brand-teal" />
                </div>
                <div className="bg-neutral-800 rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="p-4 bg-neutral-900 border-t border-neutral-800">
        <div className="relative">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask a question... (Press Enter to send)"
            className="w-full bg-neutral-950 border border-neutral-800 rounded-lg pl-4 pr-12 py-3 text-sm focus:outline-none focus:border-brand-teal resize-none h-12 custom-scrollbar"
            rows={1}
          />
          <button
            onClick={() => sendMessage(input)}
            disabled={!input.trim() || isLoading}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-neutral-400 hover:text-brand-teal disabled:opacity-50 disabled:hover:text-neutral-400 transition-colors"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
