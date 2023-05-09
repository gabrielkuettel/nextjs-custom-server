import { CollectionConfig, Field } from 'payload/types'
import { slug, meta, featuredImage } from '../fields'

const title: Field = {
  type: 'text',
  name: 'title',
  label: 'Title'
}

const client: Field = {
  type: 'text',
  name: 'client',
  label: 'Client',
  admin: {
    position: 'sidebar'
  }
}

const location: Field = {
  type: 'text',
  name: 'location',
  label: 'Location'
}

const category: Field = {
  type: 'relationship',
  name: 'category',
  label: 'Category',
  relationTo: 'categories',
  hasMany: true,
  admin: {
    position: 'sidebar'
  }
}

export const Studies: CollectionConfig = {
  slug: 'studies',
  fields: [
    title,
    client,
    category,
    featuredImage,
    location,
    meta,
    slug('title')
  ]
}
