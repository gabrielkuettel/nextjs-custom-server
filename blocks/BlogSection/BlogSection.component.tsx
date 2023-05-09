/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react'

import { mapPosts } from '../../utilities/formatPost'
import { getPosts } from '../../utilities/getPosts'
import { Post } from '../../types/cms'
import { BlogSection } from '../../components/BlogSection'

export type BlogSectionProps = {
  blockType: string
  blockName?: string
  show: number
}

export const BlogSectionComponent: React.FC<BlogSectionProps> = ({ show }) => {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    getPosts(show, 2).then((posts) => setPosts(posts))
  }, [show])

  return <BlogSection posts={mapPosts(posts)} />
}
