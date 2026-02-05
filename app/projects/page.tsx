import Link from 'next/link'

export const metadata = {
  title: 'Projects',
  description: 'Things I have built, am building, or abandoned.',
}

interface Project {
  name: string
  description: string
  status: 'active' | 'maintained' | 'archived' | 'idea'
  url?: string
  github?: string
  tech?: string[]
}

const projects: Project[] = [
  {
    name: 'This Website',
    description: 'My corner of the internet. Built with Next.js, styled with CSS variables and existential dread.',
    status: 'active',
    github: 'https://github.com/frostzt/portfolio',
    tech: ['Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    name: 'Yokai - A simplistic programming language',
    description: 'A programming language',
    status: 'active',
    github: 'https://github.com/frostzt/yokai',
    tech: ['C', 'Compiler', 'Virtual Machine', 'Arena Allocators'],
  },
  {
    name: 'DNSPup',
    description: 'A multi-threaded DNS Resolver',
    status: 'active',
    github: 'https://github.com/frostzt/dnspup',
    tech: ['C++', 'DNS', 'Network Programming'],
  },
  {
    name: 'TodoCTL',
    description: 'The most over-engineered Todo App',
    status: 'active',
    github: 'https://github.com/frostzt/todoctl',
    tech: ['C', 'Databases'],
  },

]

const statusColors = {
  active: 'text-green-500',
  maintained: 'text-blue-500',
  archived: 'text-muted',
  idea: 'text-yellow-500',
}

const statusLabels = {
  active: 'active',
  maintained: 'maintained',
  archived: 'archived',
  idea: 'idea',
}

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="text-2xl font-semibold tracking-tight mb-4 text-primary">
        /projects
      </h1>
      <p className="text-secondary mb-8">
        A mix of shipped things, half-finished experiments, and ideas that
        might never see the light of day. The graveyard and the living, coexisting.
      </p>

      <div className="space-y-6">
        {projects.map((project) => (
          <div
            key={project.name}
            className="p-4 rounded-md bg-secondary border border-primary"
          >
            <div className="flex items-start justify-between gap-4 mb-2">
              <h2 className="text-primary font-medium">{project.name}</h2>
              <span className={`text-xs font-mono ${statusColors[project.status]}`}>
                [{statusLabels[project.status]}]
              </span>
            </div>
            <p className="text-secondary text-sm mb-3">{project.description}</p>
            {project.tech && (
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 bg-primary rounded text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
            <div className="flex gap-4">
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted hover-text transition-colors"
                >
                  visit →
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted hover-text transition-colors"
                >
                  github →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <p className="text-muted text-sm mt-8">
        More projects on{' '}
        <a
          href="https://github.com/frostzt"
          target="_blank"
          rel="noopener noreferrer"
          className="hover-text transition-colors"
        >
          GitHub
        </a>
      </p>
    </section>
  )
}
