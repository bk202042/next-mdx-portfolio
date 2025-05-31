import React, { ReactNode } from 'react'
import Link from 'next/link'
import { ArrowLeft } from '@/components/ui/icon'

interface ProjectContainerProps {
  title: string
  author: string
  date: string
  children: ReactNode
}

export default function ProjectContainer({
  title,
  author,
  date,
  children
}: ProjectContainerProps) {
  return (
    <div className='container mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
      {/* Enhanced Back Navigation with animation */}
      <Link
        href='/projects'
        className='group mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-blue-600'
      >
        <ArrowLeft className='transition-transform duration-300 group-hover:-translate-x-1' />
        <span className='border-b border-transparent pb-0.5 transition-colors group-hover:border-blue-600'>
          Back to projects
        </span>
      </Link>

      {/* Enhanced Header with improved typography and spacing */}
      <header className='mb-12'>
        <h1 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl'>
          {title}
        </h1>
        <div className='mt-4 flex items-center gap-3'>
          <p className='text-sm text-gray-600 sm:text-base'>{author}</p>
          <span className='text-gray-300'>/</span>
          <time className='text-sm text-gray-600 sm:text-base'>{date}</time>
        </div>
      </header>

      {/* Enhanced content area with better typography settings */}
      <main className='prose prose-lg mx-auto mt-10 max-w-3xl dark:prose-invert lg:prose-xl prose-headings:font-bold prose-headings:tracking-tight prose-p:leading-7 prose-p:text-gray-700 prose-a:font-medium prose-a:text-blue-600 prose-a:no-underline hover:prose-a:text-blue-700 prose-img:rounded-lg prose-img:shadow-md'>
        {children}
      </main>
    </div>
  )
}

// Alert box component with improved design
export function InfoAlert({
  title,
  description,
  children
}: {
  title: string
  description?: string
  children?: ReactNode
}) {
  return (
    <div className='my-8 rounded-lg border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 shadow-sm'>
      <div className='flex items-start'>
        <div className='ml-3'>
          <h3 className='text-lg font-medium text-blue-800'>{title}</h3>
          {description && (
            <div className='mt-2 text-blue-700'>
              <p className='mb-3'>{description}</p>
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Enhanced CTA button with animation effects
export function CtaButton({ href, text }: { href: string; text: string }) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className='group relative mx-auto mt-8 block w-full max-w-md overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 text-center text-lg font-bold text-white shadow-md transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
    >
      <span className='relative z-10'>{text} →</span>
      <span className='absolute inset-0 -translate-y-full bg-gradient-to-r from-blue-700 to-indigo-700 transition-transform duration-300 ease-in-out group-hover:translate-y-0'></span>
    </a>
  )
}
