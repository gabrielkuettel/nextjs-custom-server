import { CollectionConfig, Field } from 'payload/types'

const name: Field = {
  name: 'name',
  type: 'text'
}

export const Tags: CollectionConfig = {
  slug: 'tags',
  admin: {
    useAsTitle: 'name'
  },
  access: {
    read: () => true
  },
  fields: [name],
  timestamps: false
}
