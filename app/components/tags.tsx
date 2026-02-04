import Link from 'next/link'

interface TagsProps {
  tags: string[]
  size?: 'sm' | 'md'
}

export function Tags({ tags, size = 'sm' }: TagsProps) {
  if (tags.length === 0) return null

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Link
          key={tag}
          href={`/blog/tag/${tag}`}
          className={`px-2 py-0.5 rounded bg-secondary text-muted hover-text transition-colors ${
            size === 'sm' ? 'text-xs' : 'text-sm'
          }`}
        >
          #{tag}
        </Link>
      ))}
    </div>
  )
}
