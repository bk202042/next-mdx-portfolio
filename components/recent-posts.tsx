import Link from 'next/link'
import { getPosts } from '@/lib/posts'
import Posts from '@/components/posts'

export default async function RecentPosts() {
  const posts = await getPosts(4)

  return (
    <section className='pb-16 md:pb-24'>
      <div className='w-full'>
        <h2 className='mb-8 text-2xl font-bold tracking-tight md:text-3xl'>Recent Notes</h2>
        <Posts posts={posts} />

        <Link
          href='/posts'
          className='mt-8 inline-flex items-center gap-2 text-sm font-medium text-blue-500 hover:underline'
        >
          <span>All posts</span> →
        </Link>
      </div>
    </section>
  )
}
