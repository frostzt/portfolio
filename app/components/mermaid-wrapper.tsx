'use client'

import dynamic from 'next/dynamic'

const Mermaid = dynamic(() => import('./mermaid').then(mod => mod.Mermaid), {
  ssr: false,
  loading: () => (
    <figure className="my-8">
      <div className="flex justify-center p-6 bg-[#0f172a] rounded-lg border border-primary animate-pulse">
        <span className="text-muted">Loading diagram...</span>
      </div>
    </figure>
  ),
})

interface MermaidWrapperProps {
  chart: string
  caption?: string
}

export function MermaidWrapper(props: MermaidWrapperProps) {
  return <Mermaid {...props} />
}
