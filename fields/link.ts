import type { Field } from 'payload/types'

export const link: Field = {
  name: 'link',
  type: 'group',
  fields: [
    {
      name: 'type',
      type: 'radio',
      defaultValue: 'page',
      options: [
        { label: 'Page', value: 'page' },
        { label: 'Custom URL', value: 'url' }
      ],
      admin: {
        width: '50%'
      }
    },
    {
      type: 'row',
      fields: [
        {
          name: 'label',
          label: 'Label',
          type: 'text',
          required: true,
          admin: {
            width: '50%'
          }
        },
        {
          name: 'page',
          label: 'Page',
          type: 'relationship',
          relationTo: 'pages',
          required: true,
          admin: {
            condition: (_data, siblingData) => siblingData.type === 'page',
            width: '50%'
          }
        },
        {
          name: 'url',
          label: 'Custom URL',
          type: 'text',
          admin: {
            condition: (_data, siblingData) => siblingData.type === 'url',
            width: '50%'
          }
        }
      ]
    }
  ]
}
