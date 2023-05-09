/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { Tags } from '../../components/Tags'
import { Author } from '../../components/Author'

type PostProps = {
  slug: string
  title: string
  imageUrl: string
  primaryTag?: {
    name: string
    slug: string
  }
  author?: {
    name: string
    slug: string
    imageUrl: string
  }
  publishedDate: string
  excerpt?: string
}

export const BlogPostCard: React.FC<PostProps> = ({
  slug,
  title,
  imageUrl,
  primaryTag,
  author,
  publishedDate,
  excerpt
}) => {
  return (
    <article className="flex flex-col items-start">
      <div className="relative w-full">
        <Link href={`/blog/${slug}`}>
          <img
            src={imageUrl}
            alt=""
            className="aspect-[16/9] w-full rounded-2xl bg-neutral-100 object-cover shadow-lg sm:aspect-[2/1] lg:aspect-[3/2]"
          />
          <div className="absolute inset-0 rounded-2xl" />
        </Link>
      </div>
      <div className="max-w-xl">
        <div className="mt-6 flex min-h-[28px] items-center gap-x-4 text-xs">
          <time dateTime={publishedDate} className="text-neutral-500">
            {publishedDate
              ? new Date(publishedDate).toLocaleDateString('en-US')
              : ''}
          </time>
          {primaryTag && (
            <div className="relative z-10 -mt-2">
              <Tags
                tags={[
                  {
                    name: primaryTag.name,
                    slug: primaryTag.slug
                  }
                ]}
              />
            </div>
          )}
        </div>
        <div className="group relative">
          <h3 className="mt-3 line-clamp-1 text-lg font-semibold leading-6 text-neutral-900 group-hover:text-neutral-600">
            <Link href={`/blog/${slug}`}>
              <span className="absolute inset-0 truncate" />
              {title}
            </Link>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-neutral-600">
            {excerpt}
          </p>
        </div>
        {author?.imageUrl && (
          <Author
            avatarSrc={author?.imageUrl || ''}
            avatarAlt={author?.name || ''}
            name={author?.name || ''}
            href={`/blog/authors/${author?.slug}`}
            size="sm"
            className="mt-4"
          />
        )}
      </div>
    </article>
  )
}
