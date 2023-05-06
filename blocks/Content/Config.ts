import { Block } from 'payload/types'

export const Content: Block = {
  slug: 'content',
  labels: {
    singular: 'Content',
    plural: 'Content Blocks'
  },
  fields: [
    {
      name: 'content',
      type: 'richText',
      required: true
    },
    {
      name: 'backgroundColor',
      type: 'radio',
      label: 'Background Color',
      defaultValue: 'none',
      options: [
        { label: 'None', value: 'none' },
        { label: 'Primary', value: 'primary' },
        { label: 'Secondary', value: 'secondary' },
        { label: 'Neutral', value: 'neutral' }
      ],
      admin: {
        layout: 'horizontal'
      }
    },
    {
      type: 'row',
      fields: [
        {
          name: 'alignment',
          label: 'Alignment',
          type: 'select',
          defaultValue: 'left',
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Right', value: 'right' }
          ],
          admin: {
            width: '50%'
          }
        },
        {
          name: 'width',
          label: 'Column Width',
          type: 'select',
          defaultValue: 'full',
          options: [
            { label: 'Full Width', value: 'full' },
            { label: 'Half Width', value: 'half' },
            { label: 'One Third', value: 'oneThird' },
            { label: 'Two Thirds', value: 'twoThirds' }
          ],
          admin: {
            width: '50%'
          }
        }
      ]
    },
    {
      type: 'row',
      fields: [
        {
          name: 'paddingTop',
          label: 'Padding Top',
          type: 'select',
          defaultValue: 'medium',
          options: [
            { label: 'Small', value: 'small' },
            { label: 'Medium', value: 'medium' },
            { label: 'Large', value: 'large' }
          ],
          admin: { width: '50%' }
        },
        {
          name: 'paddingBottom',
          label: 'Padding Bottom',
          type: 'select',
          defaultValue: 'medium',
          options: [
            { label: 'Small', value: 'small' },
            { label: 'Medium', value: 'medium' },
            { label: 'Large', value: 'large' }
          ],
          admin: { width: '50%' }
        }
      ]
    }
  ]
}

export default Content
