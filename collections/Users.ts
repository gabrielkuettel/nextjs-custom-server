import { CollectionConfig, Field } from 'payload/types'
import { avatar } from '../fields/avatar'
import { MediaType } from './Media'

const name: Field = {
  name: 'name',
  type: 'text'
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
    name,
    avatar
  ]
}
