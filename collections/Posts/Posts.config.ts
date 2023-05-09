import { CollectionConfig } from 'payload/types'
import { slug, featuredImage } from '../../fields'
import {
  title,
  author,
  publishedDate,
  category,
  tags,
  excerpt,
  content,
  status
} from './Posts.fields'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    defaultColumns: ['title', 'author', 'category', 'tags', 'status'],
    useAsTitle: 'title'
  },
  access: {
    read: () => true
  },
  fields: [
    slug('title'),
    title,
    featuredImage,
    author,
    publishedDate,
    category,
    tags,
    excerpt,
    content,
    status
  ]
}
