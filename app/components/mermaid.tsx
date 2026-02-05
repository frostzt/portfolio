'use client'

import { useEffect, useRef, useState } from 'react'
import mermaid from 'mermaid'

mermaid.initialize({
  startOnLoad: false,
  theme: 'dark',
  themeVariables: {
    primaryColor: '#3b82f6',
    primaryTextColor: '#f5f5f5',
    primaryBorderColor: '#60a5fa',
    lineColor: '#94a3b8',
    secondaryColor: '#1e293b',
    tertiaryColor: '#0f172a',
    background: '#0f172a',
    mainBkg: '#1e293b',
    nodeBorder: '#60a5fa',
    clusterBkg: '#1e293b',
    clusterBorder: '#475569',
    titleColor: '#f5f5f5',
    edgeLabelBackground: '#1e293b',
  },
  fontFamily: 'ui-monospace, monospace',
  fontSize: 14,
})

interface MermaidProps {
  chart: string
  caption?: string
}

export function Mermaid({ chart, caption }: MermaidProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [svg, setSvg] = useState<string>('')
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const renderChart = async () => {
      if (!containerRef.current) return

      try {
        const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`
        const { svg } = await mermaid.render(id, chart)
        setSvg(svg)
        setError(null)
      } catch (err) {
        console.error('Mermaid rendering error:', err)
        setError('Failed to render diagram')
      }
    }

    renderChart()
  }, [chart])

  if (error) {
    return (
      <div className="my-6 p-4 bg-red-900/20 border border-red-500/50 rounded-lg text-red-400">
        {error}
      </div>
    )
  }

  return (
    <figure className="my-8">
      <div
        ref={containerRef}
        className="mermaid-container flex justify-center p-6 bg-[#0f172a] rounded-lg border border-primary overflow-x-auto"
        dangerouslySetInnerHTML={{ __html: svg }}
      />
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-muted italic">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
