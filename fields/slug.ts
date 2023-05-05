import { Field } from 'payload/types'
import { formatSlug } from '../utilities/formatSlug'

export const slug: Field = {
  name: 'slug',
  label: 'Slug',
  type: 'text',
  admin: {
    position: 'sidebar'
  },
  hooks: {
    beforeValidate: [formatSlug('title')]
  }
}
