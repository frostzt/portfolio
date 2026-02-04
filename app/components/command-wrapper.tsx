import { getBlogPosts } from 'app/blog/utils'
import { CommandPalette } from './command-palette'

export function CommandWrapper() {
  const posts = getBlogPosts().map((post) => ({
    title: post.metadata.title,
    href: `/blog/${post.slug}`,
    type: 'post' as const,
  }))

  return <CommandPalette posts={posts} />
}
