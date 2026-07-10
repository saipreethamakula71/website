import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'content');

export type Project = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
};

export type Learning = {
  slug: string;
  title: string;
  date: string;
  topic: string;
  summary: string;
};

export function getProjects(): Project[] {
  const projectsDir = path.join(contentDir, 'projects');
  if (!fs.existsSync(projectsDir)) return [];
  
  const files = fs.readdirSync(projectsDir).filter(file => file.endsWith('.mdx'));
  
  const projects = files.map(file => {
    const filePath = path.join(projectsDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);
    
    return {
      slug: file.replace(/\.mdx$/, ''),
      title: data.title,
      date: data.date,
      description: data.description,
      tags: data.tags || [],
      githubUrl: data.githubUrl,
      liveUrl: data.liveUrl,
    } as Project;
  });
  
  return projects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getProjectBySlug(slug: string): (Project & { content: string }) | null {
  const projectsDir = path.join(contentDir, 'projects');
  const filePath = path.join(projectsDir, `${slug}.mdx`);
  
  if (!fs.existsSync(filePath)) return null;
  
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);
  
  return {
    slug,
    title: data.title,
    date: data.date,
    description: data.description,
    tags: data.tags || [],
    githubUrl: data.githubUrl,
    liveUrl: data.liveUrl,
    content: content,
  } as Project & { content: string };
}

export function getLearnings(): Learning[] {
  const learningsDir = path.join(contentDir, 'learnings');
  if (!fs.existsSync(learningsDir)) return [];
  
  const files = fs.readdirSync(learningsDir).filter(file => file.endsWith('.mdx'));
  
  const learnings = files.map(file => {
    const filePath = path.join(learningsDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);
    
    return {
      slug: file.replace(/\.mdx$/, ''),
      title: data.title,
      date: data.date,
      topic: data.topic,
      summary: data.summary,
    } as Learning;
  });
  
  return learnings.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
