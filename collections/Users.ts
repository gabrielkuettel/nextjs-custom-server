import { CollectionConfig, Field } from 'payload/types'
import { avatar } from '../fields/avatar'

const name: Field = {
  name: 'name',
  type: 'text'
}

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email'
  },
  access: {
    read: () => true
  },
  fields: [
    // Email added by default
    name,
    avatar
  ]
}
