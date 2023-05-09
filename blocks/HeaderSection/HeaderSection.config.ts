import { Block } from 'payload/types'

export const HeaderSectionBlock: Block = {
  slug: 'headerSection',
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text'
    },
    {
      name: 'description',
      label: 'Description',
      type: 'text'
    }
  ]
}
