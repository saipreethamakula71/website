import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center p-8 min-h-screen">
      <div className="max-w-2xl w-full text-center space-y-12">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold tracking-tight">Akula Saipreetham</h1>
          <p className="text-xl text-neutral-400 font-mono">Software Engineer & Builder</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/projects" className="group block p-8 rounded-2xl border border-neutral-800 bg-neutral-900/50 hover:border-brand-teal transition-colors">
            <h2 className="text-2xl font-bold group-hover:text-brand-teal transition-colors">Projects</h2>
            <p className="mt-2 text-neutral-400">View my timeline of work and experiments.</p>
          </Link>
          
          <Link href="/learnings" className="group block p-8 rounded-2xl border border-neutral-800 bg-neutral-900/50 hover:border-brand-purple transition-colors">
            <h2 className="text-2xl font-bold group-hover:text-brand-purple transition-colors">Learnings</h2>
            <p className="mt-2 text-neutral-400">Reflections, thoughts, and technical deep-dives.</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
