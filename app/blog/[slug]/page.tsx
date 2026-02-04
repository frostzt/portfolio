import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { formatDate, getBlogPosts, getReadingTime, parseTags } from 'app/blog/utils'
import { baseUrl } from 'app/sitemap'
import { StickyHeader } from 'app/components/sticky-header'
import { BackToTop } from 'app/components/back-to-top'
import { TableOfContents } from 'app/components/table-of-contents'
import { ShareButtons } from 'app/components/share-buttons'
import { AuthorCard } from 'app/components/author-card'
import { Tags } from 'app/components/tags'

export async function generateStaticParams() {
  let posts = getBlogPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  let post = getBlogPosts().find((post) => post.slug === slug)
  if (!post) {
    return
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default async function Blog({ params }) {
  const { slug } = await params

  let post = getBlogPosts().find((post) => post.slug === slug)

  if (!post) {
    notFound()
  }

  const tags = parseTags(post.metadata.tags)
  const postUrl = `${baseUrl}/blog/${post.slug}`

  return (
    <>
      <StickyHeader title={post.metadata.title} />
      <BackToTop />
      <TableOfContents />
      
      <section>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BlogPosting',
              headline: post.metadata.title,
              datePublished: post.metadata.publishedAt,
              dateModified: post.metadata.publishedAt,
              description: post.metadata.summary,
              image: post.metadata.image
                ? `${baseUrl}${post.metadata.image}`
                : `/og?title=${encodeURIComponent(post.metadata.title)}`,
              url: postUrl,
              author: {
                '@type': 'Person',
                name: 'Sourav Singh Rawat',
              },
            }),
          }}
        />
        <header className="mb-8">
          <h1 className="text-2xl font-semibold tracking-tight mb-2 text-primary">
            {post.metadata.title}
          </h1>
          {post.metadata.sub && (
            <p className="text-secondary mb-3">
              {post.metadata.sub}
            </p>
          )}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted mb-4">
            <time>{formatDate(post.metadata.publishedAt)}</time>
            <span>·</span>
            <span>{getReadingTime(post.content)}</span>
          </div>
          {tags.length > 0 && (
            <div className="mb-4">
              <Tags tags={tags} />
            </div>
          )}
        </header>
        
        <article className="prose">
          <CustomMDX source={post.content} />
        </article>

        <div className="mt-12 pt-8 border-t border-primary">
          <ShareButtons title={post.metadata.title} url={postUrl} />
        </div>

        <AuthorCard />
      </section>
    </>
  )
}
