import Image from 'next/image'
import Link from 'next/link'

import { ProjectMetadata } from '@/lib/projects'
import { formatDate } from '@/lib/utils'

export default function Projects({
  projects
}: {
  projects: ProjectMetadata[]
}) {
  return (
    <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
      {projects.map(project => (
        <li key={project.slug}>
          <Link 
            href={`/projects/${project.slug}`}
            className='group block overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-900'
          >
            {project.image && (
              <div className='relative h-48 w-full overflow-hidden bg-gray-100 dark:bg-gray-800'>
                <Image
                  src={project.image}
                  alt={project.title || ''}
                  fill
                  className='object-cover object-center transition-transform duration-300 group-hover:scale-105'
                />
              </div>
            )}

            <div className='p-4'>
              <h3 className='line-clamp-1 text-lg font-medium group-hover:text-blue-500'>
                {project.title}
              </h3>
              <p className='mt-1 line-clamp-2 text-sm text-muted-foreground'>
                {project.summary}
              </p>
              <div className='mt-2 flex items-center justify-between'>
                <p className='text-xs text-muted-foreground'>
                  {formatDate(project.publishedAt ?? '')}
                </p>
                <span className='text-xs font-medium text-blue-500'>View project →</span>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
