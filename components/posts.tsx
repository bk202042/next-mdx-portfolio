import Link from 'next/link'

import { PostMetadata } from '@/lib/posts'
import { formatDate } from '@/lib/utils'

export default function Posts({ posts }: { posts: PostMetadata[] }) {
  return (
    <ul className='flex flex-col divide-y divide-gray-100 dark:divide-gray-800'>
      {posts.map(post => (
        <li key={post.slug} className='py-4 first:pt-0'>
          <Link
            href={`/posts/${post.slug}`}
            className='group flex flex-col justify-between gap-x-4 gap-y-1 sm:flex-row'
          >
            <div className='max-w-lg'>
              <h3 className='text-lg font-medium group-hover:text-blue-500 group-hover:underline'>
                {post.title}
              </h3>
              <p className='mt-1 line-clamp-2 text-sm text-muted-foreground'>
                {post.summary}
              </p>
            </div>

            {post.publishedAt && (
              <p className='mt-1 shrink-0 text-sm text-muted-foreground'>
                {formatDate(post.publishedAt)}
              </p>
            )}
          </Link>
        </li>
      ))}
    </ul>
  )
}
