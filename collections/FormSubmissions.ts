import { CollectionConfig, Field } from 'payload/types'

const from: Field = {
  type: 'text',
  name: 'from',
  label: 'From Email',
  admin: {
    readOnly: true
  }
}

const message: Field = {
  type: 'textarea',
  name: 'message',
  label: 'Message',
  admin: {
    readOnly: true
  }
}

const source: Field = {
  type: 'text',
  name: 'source',
  label: 'Source',
  admin: {
    position: 'sidebar',
    readOnly: true
  }
}

export const FormSubmissions: CollectionConfig = {
  slug: 'form-submissions',
  fields: [from, message, source]
}
