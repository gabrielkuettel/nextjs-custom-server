import { CollectionConfig, Field } from 'payload/types'
import { slug } from '../fields'

const title: Field = {
  name: 'title',
  type: 'text'
}

export const Tags: CollectionConfig = {
  slug: 'tags',
  admin: {
    useAsTitle: 'title'
  },
  access: {
    read: () => true
  },
  fields: [slug, title],
  timestamps: false
}
