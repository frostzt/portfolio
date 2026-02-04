import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'
import { CommandWrapper } from './command-wrapper'

const navItems = {
  '/': {
    name: 'home',
  },
  '/blog': {
    name: 'writing',
  },
  '/now': {
    name: 'now',
  },
}

export function Navbar() {
  return (
    <header className="mb-16">
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="text-secondary hover-text transition-colors text-sm"
            >
              {name}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <CommandWrapper />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
