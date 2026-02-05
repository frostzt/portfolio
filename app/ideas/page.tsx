export const metadata = {
  title: 'Ideas',
  description: 'A dump of random thoughts, half-baked ideas, and things I want to explore.',
}

interface Idea {
  title: string
  description: string
  category: 'project' | 'blog' | 'learn' | 'random'
  added: string
}

const ideas: Idea[] = [
  {
    title: 'Build a toy database from scratch',
    description: 'Start with a simple B-tree, add WAL, then maybe MVCC. Document the whole journey.',
    category: 'project',
    added: '2026-01',
  },
  {
    title: 'Write about memory allocators',
    description: 'Compare jemalloc, tcmalloc, mimalloc. Maybe implement a simple arena allocator.',
    category: 'blog',
    added: '2026-01',
  },
  {
    title: 'Explore eBPF',
    description: 'Write some observability tools. Trace syscalls. Become dangerous.',
    category: 'learn',
    added: '2026-01',
  },
  {
    title: 'Make a lo-fi album',
    description: '10 tracks. Actually finish and release it somewhere.',
    category: 'project',
    added: '2026-01',
  },
]

const categoryColors = {
  project: 'bg-blue-500/20 text-blue-400',
  blog: 'bg-green-500/20 text-green-400',
  learn: 'bg-purple-500/20 text-purple-400',
  random: 'bg-yellow-500/20 text-yellow-400',
}

export default function IdeasPage() {
  return (
    <section>
      <h1 className="text-2xl font-semibold tracking-tight mb-4 text-primary">
        /ideas
      </h1>
      <p className="text-secondary mb-8">
        A brain dump. Half-baked thoughts, things I want to build, topics I want
        to explore. Some will happen, most won't, and that's okay.
      </p>

      <div className="space-y-4">
        {ideas.map((idea, index) => (
          <div
            key={index}
            className="p-4 rounded-md bg-secondary border border-primary"
          >
            <div className="flex items-start justify-between gap-4 mb-2">
              <h2 className="text-primary font-medium">{idea.title}</h2>
              <span className={`text-xs px-2 py-0.5 rounded font-mono ${categoryColors[idea.category]}`}>
                {idea.category}
              </span>
            </div>
            <p className="text-secondary text-sm mb-2">{idea.description}</p>
            <span className="text-xs text-muted font-mono">added {idea.added}</span>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-8 border-t border-primary">
        <p className="text-muted text-sm">
          Got an idea for me? <a href="https://x.com/souravsrawat" target="_blank" rel="noopener noreferrer" className="hover-text transition-colors">DM me</a>
        </p>
      </div>
    </section>
  )
}
