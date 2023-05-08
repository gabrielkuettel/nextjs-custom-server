import payload from 'payload'
import { GetServerSideProps } from 'next'
import { Post } from '../types/payload'

import RichText from '../components/RichText'

type BlogPageProps = {
  posts: Post[]
}

const Blog: React.FC<BlogPageProps> = ({ posts }) => {
  return (
    <main>
      {posts.map((post) => (
        <div key={post.id} className="m-5 border-2 p-5">
          <h1 className="text-2xl font-bold">{post.title}</h1>
          <RichText content={post.content} />
        </div>
      ))}
    </main>
  )
}

export default Blog

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const postsQuery = await payload.find({
    collection: 'posts'
  })

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
