import { Field } from 'payload/types'
import { formatSlug } from '../utilities/formatSlug'

export const slug: (key: string) => Field = (key = 'title') => ({
  name: 'slug',
  label: 'Slug',
  type: 'text',
  admin: {
    position: 'sidebar'
  },
  index: true,
  hooks: {
    beforeValidate: [formatSlug(key)]
  }
})
