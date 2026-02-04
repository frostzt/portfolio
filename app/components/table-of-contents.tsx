'use client'

import { useEffect, useState } from 'react'

interface TOCItem {
  id: string
  text: string
  level: number
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<TOCItem[]>([])
  const [activeId, setActiveId] = useState<string>('')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Small delay to ensure MDX content is rendered
    const timer = setTimeout(() => {
      const article = document.querySelector('article')
      if (!article) return

      const elements = article.querySelectorAll('h1, h2, h3')
      const items: TOCItem[] = []

      elements.forEach((el, index) => {
        const id = el.id || `heading-${index}`
        if (!el.id) el.id = id
        
        items.push({
          id,
          text: el.textContent || '',
          level: parseInt(el.tagName[1]),
        })
      })

      setHeadings(items)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-80px 0px -80% 0px' }
    )

    headings.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [headings])

  if (headings.length === 0) return null

  return (
    <>
      {/* TOC toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 px-3 py-2 rounded-full bg-secondary border border-primary flex items-center gap-2 hover:bg-primary transition-colors z-40 text-sm font-mono"
        aria-label="Table of contents"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-muted"
        >
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="15" y2="12" />
          <line x1="3" y1="18" x2="18" y2="18" />
        </svg>
        <span className="text-muted">toc</span>
      </button>

      {/* TOC drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50">
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
          <div className="fixed bottom-0 left-0 right-0 bg-primary border-t border-primary p-4 max-h-[60vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-muted uppercase tracking-wider">Contents</span>
              <button onClick={() => setIsOpen(false)} className="text-muted hover-text">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <nav>
              <ul className="space-y-2">
                {headings.map((heading) => (
                  <li key={heading.id}>
                    <a
                      href={`#${heading.id}`}
                      onClick={() => setIsOpen(false)}
                      className={`block text-sm py-1 transition-colors ${
                        heading.level === 2 ? 'pl-0' : heading.level === 3 ? 'pl-4' : 'pl-0'
                      } ${
                        activeId === heading.id
                          ? 'text-primary font-medium'
                          : 'text-muted hover-text'
                      }`}
                    >
                      {heading.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}

      {/* Desktop sidebar - hidden for now, can enable with wider layout */}
    </>
  )
}
