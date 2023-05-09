/* eslint-disable @next/next/no-img-element */
import payload from 'payload'
import { GetServerSideProps } from 'next'

import { Post, PaginatedDocs } from '@/types/cms'
import { mapPosts } from '@/utilities/formatPost'
import { Container } from '@/components/Container'
import { Author } from '@/components/Author'
import { RichText } from '@/components/RichText'
import { Tags } from '@/components/Tags'
import { HeaderSection } from '@/components/HeaderSection'
import { BlogSection } from '@/components/BlogSection'

export type Props = {
  post: Post
  relatedPosts: Post[]
}

const Page: React.FC<Props> = ({ post, relatedPosts }) => {
  return (
    <article>
      <div className="relative h-[250px] shadow-xl md:h-[400px] lg:h-[500px]">
        <div className="absolute h-full w-full bg-gradient-to-t from-primary-950 to-transparent"></div>
        <div
          className="h-full w-full bg-cover bg-fixed bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${post.image.url})` }}
        />
        <Container className="z-10">
          <div className="absolute bottom-8 z-10 text-white lg:bottom-16">
            <Author
              avatarSrc={post.author?.avatar.url || ''}
              avatarAlt={post.author?.name || ''}
              name={post.author?.name || ''}
              href={`/blog/authors/${post.author?.slug}`}
              darkMode={true}
              className="mb-4 hidden sm:my-8 sm:block"
            />
            <Author
              avatarSrc={post.author?.avatar.url || ''}
              avatarAlt={post.author?.name || ''}
              name={post.author?.name || ''}
              href={`/blog/authors/${post.author?.slug}`}
              size="sm"
              darkMode={true}
              className="mb-4 sm:mt-8 sm:hidden"
            />
            <h1 className="pr-6 text-3xl font-bold lg:pr-12 lg:text-5xl">
              {post.title}
            </h1>
          </div>
        </Container>
      </div>
      <Container className="mt-4 sm:mt-8">
        <RichText content={post.content} />
        {post.tags?.length && (
          <div className="mt-8 sm:mt-16">
            <Tags
              tags={post.tags.map((tag) => ({
                name: tag.name || '',
                slug: tag.slug || ''
              }))}
              className="text-sm no-underline"
            />
          </div>
        )}
        {relatedPosts && post.tags?.[0].name && (
          <div className="mt-16 sm:mt-32">
            <HeaderSection
              title="Keep Reading"
              description={`More posts related to '${post.tags[0].name}'`}
            />
            <BlogSection posts={mapPosts(relatedPosts)} />
          </div>
        )}
      </Container>
    </article>
  )
}

export default Page

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const slug = ctx.params?.slug || ''

  const postQuery: PaginatedDocs<Post> = await payload.find({
    collection: 'posts',
    where: {
      slug: {
        equals: slug
      }
    }
  })

  if (!postQuery.docs[0]) {
    return {
      notFound: true
    }
  }

  const primaryTag = postQuery.docs[0]?.tags?.[0]?.slug || ''

  const relatedPostsQuery: PaginatedDocs<Post> = await payload.find({
    collection: 'posts',
    depth: 2,
    limit: 3,
    where: {
      and: [
        {
          'tags.slug': {
            contains: primaryTag
          }
        },
        {
          slug: {
            not_equals: slug
          }
        }
      ]
    }
  })

  return {
    props: {
      post: postQuery.docs[0],
      relatedPosts: relatedPostsQuery.docs
    }
  }
}
