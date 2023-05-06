import { Block } from 'payload/types'

export const Spacer: Block = {
  slug: 'spacer',
  fields: [
    {
      name: 'size',
      label: 'Size',
      type: 'radio',
      options: [
        { label: 'Small', value: 'small' },
        { label: 'Medium', value: 'medium' },
        { label: 'Large', value: 'large' }
      ]
    }
  ]
}
