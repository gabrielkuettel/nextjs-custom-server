/* eslint-disable @next/next/no-img-element */
import payload from 'payload'
import { GetServerSideProps } from 'next'
// import getConfig from 'next/config'
import { Page as PageType, PaginatedDocs, Menu } from '../types/cms'
import NotFound from '../components/NotFound'
import RenderBlocks from '../components/RenderBlocks'
import { Layout } from '@/components/Layout'

// const {
//   publicRuntimeConfig: { SERVER_URL }
// } = getConfig()

export type Props = {
  page?: PageType
  menu: Menu['menu']
}

const Page: React.FC<Props> = ({ page, menu }) => {
  if (!page) {
    return <NotFound />
  }

  return (
    <Layout
      navigation={menu.map((item) => ({
        name: item.link.label || '',
        href: '/' + item.link.page.slug || ''
      }))}
    >
      <main>
        {/* <header>
        <h1 className="text-7xl text-green-700">{page.title}</h1>
      </header> */}
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
        {/* <footer>
        <hr />
        NextJS + Payload Server Boilerplate made by{' '}
        <a
          href="https://payloadcms.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Payload
        </a>
      </footer> */}
      </main>
    </Layout>
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

  const menuQuery: Menu = await payload.findGlobal({
    slug: 'menu',
    depth: 1
  })

  if (!pageQuery.docs[0]) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      page: pageQuery.docs[0],
      menu: menuQuery.menu
    }
  }
}
