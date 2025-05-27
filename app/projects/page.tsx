import Projects from '@/components/projects'
import { getProjects } from '@/lib/projects'

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <div className='py-16 pt-40 sm:py-24 sm:pt-48'>
      <div className='container max-w-5xl px-4 sm:px-6 lg:px-8'>
        <h1 className='title mb-12 text-4xl'>Projects</h1>
        <Projects projects={projects} />
      </div>
    </div>
  )
}
