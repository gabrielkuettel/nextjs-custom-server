import { CollectionConfig, Field } from 'payload/types'
import { slug } from '../fields'

const title: Field = {
  name: 'title',
  type: 'text'
}

const author: Field = {
  name: 'author',
  type: 'relationship',
  relationTo: 'users'
}

const publishedDate: Field = {
  name: 'publishedDate',
  type: 'date'
}

const category: Field = {
  name: 'category',
  type: 'relationship',
  relationTo: 'categories'
}

const tags: Field = {
  name: 'tags',
  type: 'relationship',
  relationTo: 'tags',
  hasMany: true
}

const content: Field = {
  name: 'content',
  type: 'richText'
}

const status: Field = {
  name: 'status',
  type: 'select',
  options: [
    {
      value: 'draft',
      label: 'Draft'
    },
    {
      value: 'published',
      label: 'Published'
    }
  ],
  defaultValue: 'draft',
  admin: {
    position: 'sidebar'
  }
}

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    defaultColumns: ['title', 'author', 'category', 'tags', 'status'],
    useAsTitle: 'title'
  },
  access: {
    read: () => true
  },
  fields: [slug, title, author, publishedDate, category, tags, content, status]
}
