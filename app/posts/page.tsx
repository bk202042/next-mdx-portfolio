import { getPosts } from '@/lib/posts'
import PostsWithSearch from '@/components/posts-with-search'

export default async function PostsPage() {
  const posts = await getPosts()

  return (
    <div className='py-16 pt-40 sm:py-24 sm:pt-48'>
      <div className='container max-w-5xl px-4 sm:px-6 lg:px-8'>
        <h1 className='title mb-12 text-4xl'>Posts</h1>
        <PostsWithSearch posts={posts} />
      </div>
    </div>
  )
}
