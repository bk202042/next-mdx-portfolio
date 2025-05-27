import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'

export default function Header() {
  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm'>
      <nav className='container flex max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8'>
        <div>
          <Link
            href='/'
            className='font-serif text-4xl font-bold tracking-tight'
          >
            BK
          </Link>
        </div>

        <ul className='flex items-center gap-24 text-xl font-medium text-foreground'>
          <li>
            <Link
              href='/posts'
              className='transition-colors duration-200 hover:text-blue-500'
            >
              블로그
            </Link>
          </li>
          <li>
            <Link
              href='/projects'
              className='transition-colors duration-200 hover:text-blue-500'
            >
              프로젝트
            </Link>
          </li>
          <li>
            <Link
              href='/contact'
              className='transition-colors duration-200 hover:text-blue-500'
            >
              문의하기
            </Link>
          </li>
        </ul>

        <div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
