import { CollectionConfig, Field } from 'payload/types'
import { MediaType } from './Media'
import { Image } from '../blocks/Image/Config'
import { Type as ImageType } from '../blocks/Image/Component'
import { CallToAction } from '../blocks/CallToAction/Config'
import { Type as CallToActionType } from '../blocks/CallToAction/Component'
import { Content } from '../blocks/Content/Config'
import { Type as ContentType } from '../blocks/Content/Component'
import { slug, meta } from '../fields'

export type Layout = CallToActionType | ContentType | ImageType

export type Type = {
  title: string
  slug: string
  image?: MediaType
  layout: Layout[]
  meta: {
    title?: string
    description?: string
    keywords?: string
  }
}

const title: Field = {
  name: 'title',
  label: 'Page Title',
  type: 'text',
  required: true
}

const layout: Field = {
  name: 'layout',
  label: 'Page Layout',
  type: 'blocks',
  minRows: 1,
  blocks: [CallToAction, Content, Image]
}

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title'
  },
  access: {
    read: (): boolean => true // Everyone can read Pages
  },
  fields: [slug, title, layout, meta]
}
