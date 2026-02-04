import { BlogPosts } from 'app/components/posts'
import { baseUrl } from './sitemap'

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sourav Singh Rawat',
    url: baseUrl,
    jobTitle: 'Systems Engineer',
    sameAs: [
      'https://github.com/frostzt',
      'https://x.com/souravsrawat',
    ],
    knowsAbout: ['Databases', 'Distributed Systems', 'C', 'Go', 'Systems Programming'],
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="animate-fade-in">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg" aria-hidden="true">~(=^‥^)ノ</span>
          <h1 className="text-2xl font-semibold tracking-tight text-primary">
            Sourav Singh Rawat
          </h1>
        </div>
      </div>
      <p className="text-secondary mb-8 leading-relaxed animate-fade-in-delay-1">
        Systems engineer obsessed with databases, networking internals, and the 
        low-level code that makes distributed systems tick. I write C and Go, 
        read kernel code for fun, and make music when the compiler finally agrees with me.
      </p>

      <div className="mb-12 animate-fade-in-delay-2">
        <h2 className="text-sm font-medium text-muted uppercase tracking-wider mb-4">
          Recent Writing
        </h2>
        <BlogPosts />
      </div>

      <div className="animate-fade-in-delay-3">
        <h2 className="text-sm font-medium text-muted uppercase tracking-wider mb-4">
          Elsewhere
        </h2>
        <div className="flex flex-col gap-2">
          <a
            href="https://github.com/frostzt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover-text transition-colors text-sm"
          >
            github
          </a>
        </div>
      </div>
    </section>
  )
}
