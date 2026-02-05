'use client'

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'

const moreNavItems = {
  '/uses': { name: 'uses' },
  '/bookshelf': { name: 'bookshelf' },
  '/music': { name: 'music' },
  '/gallery': { name: 'gallery' },
  '/ideas': { name: 'ideas' },
}

export function MoreDropdown() {
  const [moreOpen, setMoreOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMoreOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setMoreOpen(!moreOpen)}
        className="text-secondary hover-text transition-colors text-sm flex items-center gap-1"
      >
        more
        <svg
          className={`w-3 h-3 transition-transform ${moreOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {moreOpen && (
        <div className="absolute top-full left-0 mt-2 py-2 bg-primary border border-primary rounded-lg shadow-lg min-w-[120px] z-50">
          {Object.entries(moreNavItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              onClick={() => setMoreOpen(false)}
              className="block px-4 py-1.5 text-sm text-secondary hover-text hover:bg-secondary transition-colors"
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
