/* eslint-disable @next/next/no-img-element */
import payload from 'payload'
import { GetServerSideProps } from 'next'

import { PaginatedDocs, User } from '@/types/cms'
import { Container } from '@/components/Container'

export type PageProps = {
  author: User
}

const Page: React.FC<PageProps> = ({ author }) => {
  return (
    <article>
      <Container>
        <pre>{JSON.stringify(author, null, 2)}</pre>
      </Container>
    </article>
  )
}

export default Page

export const getServerSideProps: GetServerSideProps<PageProps> = async (
  ctx
) => {
  const slug = ctx.params?.slug || ''

  const usersQuery: PaginatedDocs<User> = await payload.find({
    collection: 'tags',
    where: {
      slug: {
        equals: slug
      }
    }
  })

  if (!usersQuery.docs[0]) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      author: usersQuery.docs[0]
    }
  }
}
