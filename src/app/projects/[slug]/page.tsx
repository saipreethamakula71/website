import fs from 'fs';
import path from 'path';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkHtml from 'remark-html';
import ReadmeAssistant from '@/components/ReadmeAssistant';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';

import matter from 'gray-matter';

async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(markdown);
  return result.toString();
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  // Await params as per Next.js 15+ conventions
  const { slug } = await params;

  // Also check for the .mdx file since projects are stored as .mdx
  const mdxPath = path.join(process.cwd(), `content/projects/${slug}.mdx`);
  const readmePath = path.join(process.cwd(), `content/projects/${slug}/README.md`);

  let hasReadme = false;
  let raw = '';
  let renderedHtml = '';

  if (fs.existsSync(mdxPath)) {
    hasReadme = true;
    const fileContent = fs.readFileSync(mdxPath, 'utf8');
    const { content } = matter(fileContent); // strip frontmatter
    raw = content;
    renderedHtml = await markdownToHtml(raw);
  } else if (fs.existsSync(readmePath)) {
    hasReadme = true;
    raw = fs.readFileSync(readmePath, 'utf8');
    renderedHtml = await markdownToHtml(raw);
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
          <article
            className="prose prose-invert prose-brand max-w-none mb-12 custom-markdown"
            dangerouslySetInnerHTML={{ __html: renderedHtml }}
          />
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
