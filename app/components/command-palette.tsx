'use client'

import { Command } from 'cmdk'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

interface Page {
  title: string
  href: string
  type: 'page' | 'post'
}

interface CommandPaletteProps {
  posts: Page[]
}

export function CommandPalette({ posts }: CommandPaletteProps) {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const runCommand = (href: string) => {
    setOpen(false)
    router.push(href)
  }

  const pages: Page[] = [
    { title: 'Home', href: '/', type: 'page' },
    { title: 'Writing', href: '/blog', type: 'page' },
    { title: 'Projects', href: '/projects', type: 'page' },
    { title: 'Now', href: '/now', type: 'page' },
    { title: 'Uses', href: '/uses', type: 'page' },
    { title: 'Bookshelf', href: '/bookshelf', type: 'page' },
    { title: 'Music', href: '/music', type: 'page' },
    { title: 'Gallery', href: '/gallery', type: 'page' },
    { title: 'Ideas', href: '/ideas', type: 'page' },
  ]

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="hidden sm:flex items-center gap-2 text-sm text-muted hover-text transition-colors px-2 py-1 rounded border border-primary"
      >
        <span>Search</span>
        <kbd className="text-xs bg-secondary px-1.5 py-0.5 rounded">⌘K</kbd>
      </button>
    )
  }

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="fixed inset-0 bg-black/50"
        onClick={() => setOpen(false)}
      />
      <div className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-lg">
        <Command
          className="bg-primary border border-primary rounded-lg shadow-2xl overflow-hidden"
          loop
        >
          <Command.Input
            placeholder="Search pages and posts..."
            className="w-full px-4 py-3 text-primary bg-transparent border-b border-primary outline-none placeholder:text-muted"
            autoFocus
          />
          <Command.List className="max-h-80 overflow-y-auto p-2">
            <Command.Empty className="px-4 py-8 text-center text-muted">
              No results found.
            </Command.Empty>

            <Command.Group heading="Pages" className="text-xs text-muted px-2 py-1">
              {pages.map((page) => (
                <Command.Item
                  key={page.href}
                  value={page.title}
                  onSelect={() => runCommand(page.href)}
                  className="px-3 py-2 rounded cursor-pointer text-secondary data-[selected=true]:bg-secondary data-[selected=true]:text-primary"
                >
                  {page.title}
                </Command.Item>
              ))}
            </Command.Group>

            <Command.Group heading="Posts" className="text-xs text-muted px-2 py-1 mt-2">
              {posts.map((post) => (
                <Command.Item
                  key={post.href}
                  value={post.title}
                  onSelect={() => runCommand(post.href)}
                  className="px-3 py-2 rounded cursor-pointer text-secondary data-[selected=true]:bg-secondary data-[selected=true]:text-primary"
                >
                  {post.title}
                </Command.Item>
              ))}
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </div>
  )
}
