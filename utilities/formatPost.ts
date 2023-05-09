import { Post } from '../types/cms'

export const mapPosts = (posts: Post[]) => {
  return posts.map((post) => {
    const slug = post.slug || ''
    const title = post.title || ''
    const publishedDate = post.publishedDate || ''

    const excerpt = (post.content[0].children as { text: string }[])
      .map((child) => child.text)
      .join(' ')

    const imageUrl = post.image?.url

    const primaryTag = post.tags && {
      name: post.tags[0].name,
      slug: post.tags[0].slug
    }

    const author = {
      name: post.author.name,
      slug: post.author.id,
      imageUrl: post.author.avatar.url
    }

    return {
      ...post,
      imageUrl,
      primaryTag,
      author,
      slug,
      title,
      publishedDate,
      excerpt
    }
  }, [])
}
