export type { PaginatedDocs } from 'payload/dist/mongoose/types'

import {
  Page as PayloadPage,
  Post as PayloadPost,
  User as PayloadUser,
  Category,
  Tag,
  Media
} from './payload-types'

export interface User extends PayloadUser {
  avatar: Media
}

export interface Post extends PayloadPost {
  category?: Category
  author?: User
  tags?: Tag[]
  image: Media
}

export type Layout = PayloadPage['layout']

export interface Page extends PayloadPage {
  layout: Layout
}
