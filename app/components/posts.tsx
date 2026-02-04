import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div className="flex flex-col gap-4">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group grid grid-cols-[100px_1fr] sm:grid-cols-[120px_1fr] items-baseline gap-2 sm:gap-4"
          >
            <span className="text-sm text-muted tabular-nums font-mono">
              {formatDate(post.metadata.publishedAt, false)}
            </span>
            <span className="text-primary group-hover:text-secondary transition-colors">
              {post.metadata.title}
            </span>
          </Link>
        ))}
    </div>
  )
}
