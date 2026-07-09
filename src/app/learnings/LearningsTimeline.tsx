"use client";

import { useState } from "react";
import { Learning } from "@/lib/content";

export default function LearningsTimeline({ learnings }: { learnings: Learning[] }) {
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  
  // Extract unique topics
  const allTopics = Array.from(new Set(learnings.map(l => l.topic))).sort();
  
  const filteredLearnings = activeTopic 
    ? learnings.filter(l => l.topic === activeTopic)
    : learnings;

  return (
    <div className="space-y-12">
      {/* Filter Bar */}
      {allTopics.length > 0 && (
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setActiveTopic(null)}
            className={`px-3 py-1 rounded-full text-sm font-mono transition-colors ${
              activeTopic === null 
                ? "bg-brand-purple text-[#0d0d0d]" 
                : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-white"
            }`}
          >
            All
          </button>
          {allTopics.map(topic => (
            <button
              key={topic}
              onClick={() => setActiveTopic(topic)}
              className={`px-3 py-1 rounded-full text-sm font-mono transition-colors ${
                activeTopic === topic 
                  ? "bg-brand-purple text-[#0d0d0d]" 
                  : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-white"
              }`}
            >
              {topic}
            </button>
          ))}
        </div>
      )}

      {/* Timeline */}
      <div className="relative border-l border-neutral-800 ml-3 md:ml-4 space-y-12 pb-8">
        {filteredLearnings.map((learning) => (
          <div key={learning.slug} className="relative pl-8 md:pl-12">
            {/* Timeline Dot */}
            <div className="absolute -left-1.5 md:-left-2 top-1.5 w-3 h-3 md:w-4 md:h-4 bg-brand-purple rounded-full" />
            
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
              <h3 className="text-2xl font-bold">{learning.title}</h3>
              <time className="text-neutral-500 font-mono text-sm md:ml-4">{learning.date}</time>
            </div>
            
            <div className="mb-4">
              <span className="text-xs font-mono text-brand-purple bg-brand-purple/10 px-2 py-0.5 rounded">
                {learning.topic}
              </span>
            </div>
            
            <p className="text-neutral-300 leading-relaxed">
              {learning.summary}
            </p>
          </div>
        ))}
        {filteredLearnings.length === 0 && (
          <div className="pl-8 text-neutral-500 font-mono">
            No entries found for this topic.
          </div>
        )}
      </div>
    </div>
  );
}
