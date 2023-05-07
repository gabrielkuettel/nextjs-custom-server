import payload from 'payload'
import { GetServerSideProps } from 'next'

type BlogPageProps = {
  posts: any
}

const Blog: React.FC<BlogPageProps> = ({ posts }) => (
  <main>
    <pre>{JSON.stringify(posts, null, 2)}</pre>
  </main>
)

export default Blog

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const postsQuery = await payload.find({
    collection: 'posts'
  })

  console.log('posts', postsQuery)

  if (!postsQuery.docs[0]) {
    ctx.res.statusCode = 404

    return {
      props: {}
    }
  }

  return {
    props: {
      posts: postsQuery.docs
    }
  }
}
