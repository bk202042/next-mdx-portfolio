import Intro from '@/components/intro'
import NewsletterForm from '@/components/newsletter-form'
import RecentPosts from '@/components/recent-posts'
import RecentProjects from '@/components/recent-projects'

export default function Home() {
  return (
    <div className='py-16 pt-40 sm:py-24 sm:pt-48'>
      <div className='container max-w-5xl px-4 sm:px-6 lg:px-8'>
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
