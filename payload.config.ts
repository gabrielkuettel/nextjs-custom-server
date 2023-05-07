import dotenv from 'dotenv'
import path from 'path'
import { buildConfig } from 'payload/config'

import { Pages } from './collections/Pages'
import { Media } from './collections/Media'
import { FormSubmissions } from './collections/FormSubmissions'
import { Studies } from './collections/Studies'
import { Users } from './collections/Users'
import { Posts } from './collections/Posts'
import { Categories } from './collections/Cateogies'
import { Tags } from './collections/Tags'
import { Menu } from './globals/Menu'

dotenv.config()

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  admin: {
    user: Users.slug
  },
  collections: [
    Pages,
    Categories,
    Posts,
    Tags,
    Users,
    Media,
    FormSubmissions,
    Studies
  ],
  globals: [Menu],
  typescript: {
    outputFile: path.resolve(__dirname, './types/payload.ts')
  }
})
