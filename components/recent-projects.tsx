import Link from 'next/link'
import { getProjects } from '@/lib/projects'
import Projects from '@/components/projects'

export default async function RecentProjects() {
  const projects = await getProjects(2)

  return (
    <section className='pb-16 md:pb-24'>
      <div className='w-full'>
        <h2 className='mb-8 text-2xl font-bold tracking-tight md:text-3xl'>Recent Projects</h2>
        <Projects projects={projects} />

        <Link
          href='/projects'
          className='mt-8 inline-flex items-center gap-2 text-sm font-medium text-blue-500 hover:underline'
        >
          <span>All projects</span> →
        </Link>
      </div>
    </section>
  )
}
