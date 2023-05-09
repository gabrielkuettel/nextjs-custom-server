import {
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
