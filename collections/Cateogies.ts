import { CollectionConfig, Field } from 'payload/types'

const name: Field = {
  name: 'name',
  type: 'text'
}

export const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'name'
  },
  access: {
    read: () => true
  },
  fields: [name],
  timestamps: false
}
