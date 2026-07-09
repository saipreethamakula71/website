"use client";

import { useState } from "react";
import { Project } from "@/lib/content";

export default function ProjectsTimeline({ projects }: { projects: Project[] }) {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  
  // Extract unique tags
  const allTags = Array.from(new Set(projects.flatMap(p => p.tags))).sort();
  
  const filteredProjects = activeTag 
    ? projects.filter(p => p.tags.includes(activeTag))
    : projects;

  return (
    <div className="space-y-12">
      {/* Filter Bar */}
      {allTags.length > 0 && (
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setActiveTag(null)}
            className={`px-3 py-1 rounded-full text-sm font-mono transition-colors ${
              activeTag === null 
                ? "bg-brand-teal text-[#0d0d0d]" 
                : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-white"
            }`}
          >
            All
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-3 py-1 rounded-full text-sm font-mono transition-colors ${
                activeTag === tag 
                  ? "bg-brand-teal text-[#0d0d0d]" 
                  : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-white"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      {/* Timeline */}
      <div className="relative border-l border-neutral-800 ml-3 md:ml-4 space-y-12 pb-8">
        {filteredProjects.map((project) => (
          <div key={project.slug} className="relative pl-8 md:pl-12">
            {/* Timeline Dot */}
            <div className="absolute -left-1.5 md:-left-2 top-1.5 w-3 h-3 md:w-4 md:h-4 bg-brand-teal rounded-full" />
            
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <time className="text-neutral-500 font-mono text-sm md:ml-4">{project.date}</time>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs font-mono text-brand-teal bg-brand-teal/10 px-2 py-0.5 rounded">
                  {tag}
                </span>
              ))}
            </div>
            
            <p className="text-neutral-300 mb-6 leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex items-center gap-4 font-mono text-sm">
              {project.githubUrl && (
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-brand-teal transition-colors underline underline-offset-4"
                >
                  GitHub
                </a>
              )}
              {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-brand-teal transition-colors underline underline-offset-4"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
        {filteredProjects.length === 0 && (
          <div className="pl-8 text-neutral-500 font-mono">
            No projects found for this tag.
          </div>
        )}
      </div>
    </div>
  );
}
