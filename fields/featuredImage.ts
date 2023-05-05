import { Field } from 'payload/types'

export const featuredImage: Field = {
  name: 'image',
  label: 'Featured Image',
  type: 'upload',
  relationTo: 'media',
  required: true
}
