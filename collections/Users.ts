import { CollectionConfig, Field } from 'payload/types'
import { avatar } from '../fields/avatar'
import { slug } from '../fields/slug'
import { MediaType } from './Media'

const name: Field = {
  name: 'name',
  type: 'text',
  unique: true,
  required: true
}

export type UserType = {
  name: string
  avatar: MediaType
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
    slug('name'),
    name,
    avatar
  ]
}
