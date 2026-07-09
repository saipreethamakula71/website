import { getLearnings } from "@/lib/content";
import LearningsTimeline from "./LearningsTimeline";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function LearningsPage() {
  const learnings = getLearnings();
  
  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto w-full">
      <header className="flex items-center justify-between mb-12">
        <Link href="/" className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors">
          <ArrowLeft size={16} />
          <span className="font-mono">home</span>
        </Link>
        <div className="text-neutral-400 font-mono">
          {learnings.length} {learnings.length === 1 ? 'entry' : 'entries'}
        </div>
      </header>
      
      <LearningsTimeline learnings={learnings} />
    </main>
  );
}
