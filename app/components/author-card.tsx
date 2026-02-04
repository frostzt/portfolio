import Link from 'next/link'

export function AuthorCard() {
  return (
    <div className="mt-16 pt-8 border-t border-primary">
      <div className="font-mono text-sm">
        <div className="text-muted mb-2">
          <span className="text-primary">$</span> cat ./author
        </div>
        <div className="bg-secondary rounded-md p-4 border border-primary">
          <div className="flex flex-col gap-2">
            <div>
              <span className="text-muted">name:</span>{' '}
              <span className="text-primary">Sourav Singh Rawat</span>
            </div>
            <div>
              <span className="text-muted">role:</span>{' '}
              <span className="text-secondary">systems engineer who mass produces bugs</span>
            </div>
            <div>
              <span className="text-muted">status:</span>{' '}
              <span className="text-secondary">probably reading kernel code rn</span>
            </div>
            <div className="mt-2 flex gap-4">
              <Link href="/" className="text-muted hover-text transition-colors">
                ~/about
              </Link>
              <a
                href="https://github.com/frostzt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover-text transition-colors"
              >
                gh://frostzt
              </a>
              <a
                href="https://x.com/souravsrawat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover-text transition-colors"
              >
                @souravsrawat
              </a>
            </div>
          </div>
        </div>
        <div className="text-muted mt-2">
          <span className="text-primary">$</span>{' '}
          <span className="inline-block w-2 h-4 bg-primary animate-blink" />
        </div>
      </div>
    </div>
  )
}
