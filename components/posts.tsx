import Link from 'next/link'
import { useLocale } from 'next-intl'

import { PostMetadata } from '@/lib/posts'
import { formatDate } from '@/lib/utils'

export default function Posts({ posts }: { posts: PostMetadata[] }) {
  const locale = useLocale()

  return (
    <ul className='flex flex-col gap-8'>
      {posts.map(post => (
        <li key={post.slug}>
          <Link
            href={`/posts/${post.slug}`}
            className='flex flex-col justify-between gap-x-4 gap-y-1 sm:flex-row'
          >
            <div className='max-w-lg'>
              <p className='subtitle'>{post.title}</p>
              <p className='body-text mt-1 line-clamp-2'>{post.summary}</p>
            </div>

            {post.publishedAt && (
              <p className='meta-text mt-1'>{formatDate(post.publishedAt, locale)}</p>
            )}
          </Link>
        </li>
      ))}
    </ul>
  )
}
