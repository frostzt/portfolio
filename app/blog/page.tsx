import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Writing',
  description: 'Thoughts on distributed systems, databases, and building infrastructure.',
}

export default function Page() {
  return (
    <section>
      <h1 className="text-2xl font-semibold tracking-tight mb-8 text-primary">
        Writing
      </h1>
      <BlogPosts />
    </section>
  )
}
