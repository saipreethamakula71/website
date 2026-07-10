"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useChat } from "@ai-sdk/react";
import ReactMarkdown from "react-markdown";

type Project = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  content: string;
};

function AssistantContent() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("project");
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      setError("No project specified.");
      return;
    }

    fetch(`/api/project?slug=${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error("Project not found");
        return res.json();
      })
      .then((data) => {
        setProject(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Could not load project Readme.");
        setLoading(false);
      });
  }, [slug]);

  const [input, setInput] = useState("");
  const { messages, sendMessage, status } = useChat();
  const isLoading = status === "submitted" || status === "streaming";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    sendMessage({ text: input }, { body: { slug: slug || "" } });
    setInput("");
  };

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-screen">
        <div className="text-neutral-400 font-mono animate-pulse">Loading Readme Assistant...</div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-8 min-h-screen">
        <h1 className="text-3xl font-bold mb-4 text-red-500">Error</h1>
        <p className="text-neutral-400 mb-8">{error}</p>
        <Link href="/projects" className="text-brand-teal hover:underline font-mono">
          ← Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Pane: Readme */}
      <div className="w-full md:w-1/2 h-full overflow-y-auto border-r border-neutral-800 p-8">
        <div className="mb-8">
          <Link href="/projects" className="text-neutral-500 hover:text-white transition-colors font-mono text-sm mb-4 inline-block">
            ← Back to Projects
          </Link>
          <h1 className="text-4xl font-bold tracking-tight mb-2">{project.title} Readme</h1>
          <p className="text-neutral-400">{project.description}</p>
        </div>
        
        <div className="prose prose-invert prose-p:text-neutral-300 prose-headings:text-neutral-100 max-w-none">
          {project.content ? (
            <ReactMarkdown>{project.content}</ReactMarkdown>
          ) : (
            <p className="italic text-neutral-500">No README content found for this project. Please add content to `content/projects/{project.slug}.mdx` below the frontmatter.</p>
          )}
        </div>
      </div>

      {/* Right Pane: Chat Assistant */}
      <div className="w-full md:w-1/2 h-full flex flex-col bg-neutral-900/30">
        <div className="p-6 border-b border-neutral-800">
          <h2 className="text-xl font-bold">Ask AI about {project.title}</h2>
          <p className="text-sm text-brand-teal font-mono mt-1">Readme Assistant (Powered by Groq)</p>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          <div className="bg-neutral-800/50 rounded-2xl rounded-tl-sm p-4 inline-block max-w-[85%] border border-neutral-800">
            <p className="text-neutral-200">Hi! I'm the Readme Assistant. You can ask me questions about the {project.title} project, its architecture, or how to set it up.</p>
            <p className="text-xs text-neutral-500 mt-2 font-mono">System Message</p>
          </div>
          
          {messages.map((m) => (
            <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`rounded-2xl p-4 inline-block max-w-[85%] ${
                m.role === 'user' 
                  ? 'bg-brand-teal text-[#0d0d0d] rounded-tr-sm' 
                  : 'bg-neutral-800/50 text-neutral-200 border border-neutral-800 rounded-tl-sm'
              }`}>
                <div className="prose prose-sm max-w-none dark:prose-invert">
                  {m.parts?.map((part, index) => {
                    if (part.type === 'text') {
                      return <ReactMarkdown key={index}>{part.text}</ReactMarkdown>;
                    }
                    return null;
                  })}
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-neutral-800/50 rounded-2xl rounded-tl-sm p-4 inline-block border border-neutral-800">
                <span className="flex space-x-1">
                  <span className="w-2 h-2 bg-neutral-500 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-neutral-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                  <span className="w-2 h-2 bg-neutral-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                </span>
              </div>
            </div>
          )}
        </div>
        
        <div className="p-4 border-t border-neutral-800 bg-neutral-900/50">
          <form className="relative flex items-center" onSubmit={handleSubmit}>
            <input 
              type="text" 
              value={input}
              onChange={handleInputChange}
              placeholder="Ask a question..." 
              className="w-full bg-neutral-800 border border-neutral-700 text-white rounded-xl py-3 pl-4 pr-12 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-all placeholder:text-neutral-500 font-mono text-sm"
              disabled={isLoading}
            />
            <button 
              type="submit"
              disabled={isLoading || !input.trim()}
              className="absolute right-2 p-1.5 bg-brand-teal text-black rounded-lg hover:bg-[#15825f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function ReadmeAssistantPage() {
  return (
    <Suspense fallback={
      <div className="flex-1 flex items-center justify-center min-h-screen">
        <div className="text-neutral-400 font-mono animate-pulse">Loading Readme Assistant...</div>
      </div>
    }>
      <AssistantContent />
    </Suspense>
  );
}
