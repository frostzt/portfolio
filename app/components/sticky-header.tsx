'use client'

import { useEffect, useState } from 'react'

interface StickyHeaderProps {
  title: string
}

export function StickyHeader({ title }: StickyHeaderProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past 200px
      const shouldShow = window.scrollY > 200
      setIsVisible(shouldShow)
      
      // Calculate progress
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const currentProgress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setProgress(currentProgress)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      {/* Progress bar */}
      <div className="h-0.5 bg-transparent">
        <div
          className="h-full bg-primary transition-all duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      {/* Header content */}
      <div className="bg-primary/95 backdrop-blur-sm border-b border-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <p className="text-sm text-secondary truncate">
            {title}
          </p>
        </div>
      </div>
    </div>
  )
}
