import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'
import { CommandWrapper } from './command-wrapper'
import { MoreDropdown } from './more-dropdown'

const mainNavItems = {
  '/': { name: 'home' },
  '/blog': { name: 'writing' },
  '/projects': { name: 'projects' },
  '/now': { name: 'now' },
}

export function Navbar() {
  return (
    <header className="mb-16">
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          {Object.entries(mainNavItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="text-secondary hover-text transition-colors text-sm"
            >
              {name}
            </Link>
          ))}
          <MoreDropdown />
        </div>
        <div className="flex items-center gap-3">
          <CommandWrapper />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
