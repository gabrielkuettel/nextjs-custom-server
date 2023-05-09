import { CollectionConfig, Field } from 'payload/types'
import { slug } from '../fields'

const name: Field = {
  name: 'name',
  type: 'text'
}

export type TagType = {
  name: string
  slug: string
}

export const Tags: CollectionConfig = {
  slug: 'tags',
  admin: {
    useAsTitle: 'title'
  },
  access: {
    read: () => true
  },
  fields: [slug('name'), name],
  timestamps: false
}
