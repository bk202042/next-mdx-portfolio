import Intro from '@/components/intro'
import NewsletterForm from '@/components/newsletter-form'
import RecentPosts from '@/components/recent-posts'
import RecentProjects from '@/components/recent-projects'

export default function Home() {
  return (
    <div className='py-8 pt-24 sm:py-16 sm:pt-40 md:py-24 md:pt-48'>
      <div className='container max-w-5xl px-2 sm:px-4 md:px-6 lg:px-8'>
        <Intro />

        <div className='mt-16 space-y-16 sm:mt-20 sm:space-y-20'>
          <RecentPosts />
          <RecentProjects />

          <div className='mt-16 sm:mt-24'>
            <NewsletterForm />
          </div>
        </div>
      </div>
    </div>
  )
}
