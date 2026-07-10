import fs from 'fs';
import path from 'path';
import ReadmeAssistant from '@/components/ReadmeAssistant';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  const mdxPath = path.join(process.cwd(), `content/projects/${slug}.mdx`);
  const readmePath = path.join(process.cwd(), `content/projects/${slug}/README.md`);

  let hasReadme = false;
  let raw = '';

  if (fs.existsSync(mdxPath)) {
    hasReadme = true;
    const fileContent = fs.readFileSync(mdxPath, 'utf8');
    const { content } = matter(fileContent);
    raw = content;
  } else if (fs.existsSync(readmePath)) {
    hasReadme = true;
    raw = fs.readFileSync(readmePath, 'utf8');
  }

  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto w-full">
      <header className="flex items-center justify-between mb-12">
        <Link href="/projects" className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors">
          <ArrowLeft size={16} />
          <span className="font-mono">back to projects</span>
        </Link>
        <div className="text-neutral-400 font-mono">
          {slug.replace(/_/g, ' ')}
        </div>
      </header>

      {hasReadme ? (
        <>
          <article className="prose prose-invert prose-brand max-w-none mb-12 custom-markdown">
            <ReactMarkdown>{raw}</ReactMarkdown>
          </article>
          <ReadmeAssistant readme={raw} />
        </>
      ) : (
        <div className="text-center text-neutral-500 font-mono py-20 border border-neutral-800 border-dashed rounded-xl">
          No README exists for this project.
        </div>
      )}
    </main>
  );
}
