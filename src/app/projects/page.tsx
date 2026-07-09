import { getProjects } from "@/lib/content";
import ProjectsTimeline from "./ProjectsTimeline";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProjectsPage() {
  const projects = getProjects();
  
  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto w-full">
      <header className="flex items-center justify-between mb-12">
        <Link href="/" className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors">
          <ArrowLeft size={16} />
          <span className="font-mono">home</span>
        </Link>
        <div className="text-neutral-400 font-mono">
          {projects.length} {projects.length === 1 ? 'project' : 'projects'}
        </div>
      </header>
      
      <ProjectsTimeline projects={projects} />
    </main>
  );
}
