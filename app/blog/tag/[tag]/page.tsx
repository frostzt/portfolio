import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllTags, getPostsByTag, formatDate } from 'app/blog/utils'

export async function generateStaticParams() {
  const tags = getAllTags()
  return tags.map((tag) => ({ tag }))
}

export async function generateMetadata({ params }) {
  const { tag } = await params
  return {
    title: `#${tag}`,
    description: `Posts tagged with ${tag}`,
  }
}

export default async function TagPage({ params }) {
  const { tag } = await params
  const posts = getPostsByTag(tag)

  if (posts.length === 0) {
    notFound()
  }

  return (
    <section>
      <div className="mb-8">
        <Link href="/blog" className="text-sm text-muted hover-text transition-colors">
          ← All posts
        </Link>
      </div>
      <h1 className="text-2xl font-semibold tracking-tight mb-8 text-primary">
        #{tag}
      </h1>
      <div className="flex flex-col gap-4">
        {posts
          .sort((a, b) => {
            if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
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
    </section>
  )
}
