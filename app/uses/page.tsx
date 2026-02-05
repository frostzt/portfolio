export const metadata = {
  title: 'Uses',
  description: 'The tools, gear, and software I use daily.',
}

export default function UsesPage() {
  return (
    <section>
      <h1 className="text-2xl font-semibold tracking-tight mb-4 text-primary">
        /uses
      </h1>
      <p className="text-secondary mb-8">
        The stuff I use to build stuff. Updated occasionally when I find something better.
      </p>

      <div className="space-y-10">
        <div>
          <h2 className="text-sm font-medium text-muted uppercase tracking-wider mb-4">
            Editor & Terminal
          </h2>
          <ul className="space-y-3">
            <li className="text-secondary">
              <span className="text-primary">Neovim</span> — spent way too long configuring it, now I can't use anything else
            </li>
            <li className="text-secondary">
              <span className="text-primary">Ghostty</span> — buttery smooth GPU rendering, finally a terminal that keeps up
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-medium text-muted uppercase tracking-wider mb-4">
            Dev Tools
          </h2>
          <ul className="space-y-3">
            <li className="text-secondary">
              <span className="text-primary">Git</span> — the one tool everyone uses but few truly understand
            </li>
            <li className="text-secondary">
              <span className="text-primary">Docker</span> — "works on my machine" is now a deployable artifact
            </li>
            <li className="text-secondary">
              <span className="text-primary">tmux</span> — multiple terminals, one window, never lose a session again
            </li>
            <li className="text-secondary">
              <span className="text-primary">ripgrep</span> — searching gigabytes of code in milliseconds
            </li>
            <li className="text-secondary">
              <span className="text-primary">fzf</span> — fuzzy find anything, anywhere, instantly
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-medium text-muted uppercase tracking-wider mb-4">
            Languages & Frameworks
          </h2>
          <ul className="space-y-3">
            <li className="text-secondary">
              <span className="text-primary">C</span> — when you want to truly understand what the machine is doing
            </li>
            <li className="text-secondary">
              <span className="text-primary">C++</span> — C with classes and a lot more footguns to avoid
            </li>
            <li className="text-secondary">
              <span className="text-primary">Go</span> — simple, fast compilation, great stdlib, ships as a single binary
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-medium text-muted uppercase tracking-wider mb-4">
            Music Production
          </h2>
          <ul className="space-y-3">
            <li className="text-secondary">
              <span className="text-primary">FL Studio</span> — the piano roll is unmatched, been using it for years
            </li>
            <li className="text-secondary">
              <span className="text-primary">Guitar</span> — acoustic for soul, electric for everything else
            </li>
            <li className="text-secondary">
              <span className="text-primary">Piano/Keyboard</span> — slowly getting there, one chord at a time
            </li>
          </ul>
        </div>

        <p className="text-muted text-sm mt-8 pt-8 border-t border-primary">
          This page is inspired by <a href="https://uses.tech" target="_blank" rel="noopener noreferrer" className="hover-text transition-colors">uses.tech</a>
        </p>
      </div>
    </section>
  )
}
