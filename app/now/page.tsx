export const metadata = {
  title: 'Now',
  description: 'What I\'m currently working on and into.',
}

export default function NowPage() {
  return (
    <section>
      <h1 className="text-2xl font-semibold tracking-tight mb-4 text-primary">
        Now
      </h1>
      <p className="text-muted mb-8 text-sm">
        Updated January 2026
      </p>

      <div className="space-y-8">
        <div>
          <h2 className="text-sm font-medium text-muted uppercase tracking-wider mb-3">
            Building
          </h2>
          <ul className="space-y-2 text-secondary">
            <li>TCP/IP stack from scratch</li>
            <li>YoKai — a language compiler and virtual machine</li>
            <li>Contributing to Valkey</li>
            <li>A mini replication system in C</li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-medium text-muted uppercase tracking-wider mb-3">
            Learning
          </h2>
          <ul className="space-y-2 text-secondary">
            <li>German</li>
            <li>Assembly</li>
            <li>Compilers and language design</li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-medium text-muted uppercase tracking-wider mb-3">
            Outside of Code
          </h2>
          <ul className="space-y-2 text-secondary">
            <li>Making music in FL Studio</li>
            <li>Playing guitar and piano</li>
            <li>Electronics tinkering</li>
            <li>Drawing — 2D and 3D art</li>
          </ul>
        </div>
      </div>

      <p className="mt-12 text-sm text-muted">
        This is a{' '}
        <a
          href="https://nownownow.com/about"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover-text transition-colors"
        >
          now page
        </a>
        .
      </p>
    </section>
  )
}
