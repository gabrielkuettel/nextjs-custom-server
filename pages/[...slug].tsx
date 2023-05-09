/* eslint-disable @next/next/no-img-element */
import payload from 'payload'
import { GetServerSideProps } from 'next'
// import getConfig from 'next/config'
import { Page as PageType, PaginatedDocs } from '../types/cms'
import NotFound from '../components/NotFound'
import RenderBlocks from '../components/RenderBlocks'

// const {
//   publicRuntimeConfig: { SERVER_URL }
// } = getConfig()

export type Props = {
  page?: PageType
}

const Page: React.FC<Props> = (props) => {
  const { page } = props

  if (!page) {
    return <NotFound />
  }

  return (
    <main>
      <header>
        <h1 className="text-7xl text-green-700">{page.title}</h1>
      </header>
      {/* <div>
        {page.image && (
          <img
            src={`${SERVER_URL}/media/${
              page.image.sizes?.feature?.filename || page.image.filename
            }`}
            alt={page.image.alt}
          />
        )}
      </div> */}
      <RenderBlocks layout={page.layout} />
      <footer>
        <hr />
        NextJS + Payload Server Boilerplate made by{' '}
        <a
          href="https://payloadcms.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Payload
        </a>
      </footer>
    </main>
  )
}

export default Page

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const slug = ctx.params?.slug
    ? (ctx.params.slug as string[]).join('/')
    : 'home'

  const pageQuery: PaginatedDocs<PageType> = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: slug
      }
    }
  })

  if (!pageQuery.docs[0]) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      page: pageQuery.docs[0]
    }
  }
}
