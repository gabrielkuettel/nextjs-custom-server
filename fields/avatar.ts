import { Field } from 'payload/types'

export const avatar: Field = {
  name: 'avatar',
  label: 'Avatar',
  type: 'upload',
  relationTo: 'media',
  required: true
}
