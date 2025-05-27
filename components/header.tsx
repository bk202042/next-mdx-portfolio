'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons' // Assuming these icons exist

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-background/75 py-4 backdrop-blur-sm sm:py-6'>
      <nav className='container flex max-w-5xl items-center justify-between px-2 sm:px-4 md:px-6 lg:px-8'>
        <div>
          <Link
            href='/'
            className='font-serif text-2xl font-bold tracking-tight sm:text-4xl'
            onClick={() => setIsMenuOpen(false)}
          >
            BK
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className='hidden flex-col items-center gap-4 text-base font-medium text-foreground sm:flex sm:flex-row sm:gap-24 sm:text-xl'>
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

        {/* Mobile Menu Toggle and Theme Toggle */}
        <div className='flex items-center gap-2 sm:ml-0'>
          <div className='sm:hidden'>
            <button
              onClick={toggleMenu}
              className='p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
              aria-label='Toggle mobile menu'
            >
              {isMenuOpen ? (
                <Cross1Icon className='h-6 w-6' />
              ) : (
                <HamburgerMenuIcon className='h-6 w-6' />
              )}
            </button>
          </div>
          <ThemeToggle />
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className='sm:hidden'>
          <ul className='flex flex-col items-center gap-4 py-4 text-base font-medium text-foreground'>
            <li>
              <Link
                href='/posts'
                className='block w-full py-2 text-center transition-colors duration-200 hover:text-blue-500'
                onClick={() => setIsMenuOpen(false)}
              >
                블로그
              </Link>
            </li>
            <li>
              <Link
                href='/projects'
                className='block w-full py-2 text-center transition-colors duration-200 hover:text-blue-500'
                onClick={() => setIsMenuOpen(false)}
              >
                프로젝트
              </Link>
            </li>
            <li>
              <Link
                href='/contact'
                className='block w-full py-2 text-center transition-colors duration-200 hover:text-blue-500'
                onClick={() => setIsMenuOpen(false)}
              >
                문의하기
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
