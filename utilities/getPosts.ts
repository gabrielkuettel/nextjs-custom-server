import { Post } from '../types/cms'

type PostsResponse = {
  docs: Post[]
}

export const getPosts = async (limit = 10, depth?: number) => {
  const depthQuery = depth ? `&depth=${depth}` : ''
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/posts?limit=${limit}${depthQuery}`
  )

  const posts: PostsResponse = await response.json()

  if (!posts) {
    throw new Error('No posts found')
  }

  return posts.docs
}
