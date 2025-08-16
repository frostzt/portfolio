import {getBlogPosts} from 'app/blog/utils'

export const baseUrl = 'https://frostzt.com'

export default async function sitemap() {
    let blogs = getBlogPosts().map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.metadata.publishedAt,
    }))

    let notes = getBlogPosts().map((post) => ({
        url: `${baseUrl}/notes/${post.slug}`,
        lastModified: post.metadata.publishedAt,
    }))

    let routes = ['', '/blog'].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString().split('T')[0],
    }))

    return [...routes, ...blogs, ...notes]
}
