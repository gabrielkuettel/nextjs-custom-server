import { Field } from 'payload/types'

export const title: Field = {
  name: 'title',
  type: 'text'
}

export const author: Field = {
  name: 'author',
  type: 'relationship',
  relationTo: 'users'
}

export const publishedDate: Field = {
  name: 'publishedDate',
  type: 'date'
}

export const category: Field = {
  name: 'category',
  type: 'relationship',
  relationTo: 'categories'
}

export const tags: Field = {
  name: 'tags',
  type: 'relationship',
  relationTo: 'tags',
  hasMany: true
}

export const excerpt: Field = {
  name: 'excerpt',
  type: 'text'
}

export const content: Field = {
  name: 'content',
  type: 'richText'
}

export const status: Field = {
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
