/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react'

import { getPosts } from '../../utilities/getPosts'
import { Post } from '../../types/payload'
import { BlogPostCard } from '../../components/BlogPostCard'

export type BlogSectionProps = {
  blockType: string
  blockName?: string
  show: number
}

export const BlogSection: React.FC<BlogSectionProps> = ({ show }) => {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    getPosts(show, 2).then((posts) => setPosts(posts))
  }, [show])

  const renderCards = () => {
    return posts.map((post) => {
      const imageUrl =
        typeof post.image === 'string' ? post.image : post.image?.url

      const primaryTag = post.tags && {
        name:
          typeof post.tags[0] === 'string' ? post.tags[0] : post.tags[0].title,
        slug:
          typeof post.tags[0] === 'string' ? post.tags[0] : post.tags[0].slug
      }

      const author = post.author && {
        name: typeof post.author === 'string' ? post.author : post.author.name,
        slug: typeof post.author === 'string' ? post.author : post.author.name,
        imageUrl:
          typeof post.author === 'string'
            ? post.author
            : typeof post.author.avatar === 'string'
            ? post.author.avatar
            : post.author.avatar.url,
        href:
          typeof post.author === 'string'
            ? `/authors/${post.author}`
            : `/authors/${post.author.name}`
      }

      const excerpt = (post.content[0].children as { text: string }[])
        .map((child) => child.text)
        .join(' ')

      return (
        <BlogPostCard
          key={post.id}
          slug={post.slug}
          title={post.title}
          imageUrl={imageUrl}
          primaryTag={primaryTag}
          author={author}
          publishedDate={post.publishedDate}
          excerpt={excerpt}
        />
      )
    })
  }

  return (
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {renderCards()}
    </div>
  )
}
