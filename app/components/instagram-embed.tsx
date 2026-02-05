'use client'

import { useEffect, useRef } from 'react'

interface InstagramEmbedProps {
  url: string
}

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void
      }
    }
  }
}

export function InstagramEmbed({ url }: InstagramEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Load Instagram embed script if not already loaded
    if (!document.getElementById('instagram-embed-script')) {
      const script = document.createElement('script')
      script.id = 'instagram-embed-script'
      script.src = 'https://www.instagram.com/embed.js'
      script.async = true
      document.body.appendChild(script)
    }

    // Process embeds when script loads or if already loaded
    const processEmbeds = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process()
      }
    }

    // Check if script is already loaded
    if (window.instgrm) {
      processEmbeds()
    } else {
      // Wait for script to load
      const checkInterval = setInterval(() => {
        if (window.instgrm) {
          processEmbeds()
          clearInterval(checkInterval)
        }
      }, 100)

      // Cleanup interval after 10 seconds
      setTimeout(() => clearInterval(checkInterval), 10000)
    }
  }, [url])

  return (
    <div ref={containerRef} className="instagram-embed-container">
      <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: '#0a0a0a',
          border: 0,
          borderRadius: '8px',
          margin: '0 auto',
          maxWidth: '540px',
          minWidth: '326px',
          padding: 0,
          width: '100%',
        }}
      >
        <div className="flex items-center justify-center p-8">
          <span className="text-muted text-sm">Loading Instagram post...</span>
        </div>
      </blockquote>
    </div>
  )
}
