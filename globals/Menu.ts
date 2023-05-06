import { GlobalConfig } from 'payload/types'
import { link } from '../fields/link'

export const Menu: GlobalConfig = {
  slug: 'menu',
  fields: [
    {
      name: 'nav',
      label: 'Navigation',
      type: 'array',
      fields: [link]
    }
  ]
}
