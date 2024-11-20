import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';
import { useTranslations } from 'next-intl';
import LocaleSwitcher from '@/components/locale-switcher';

export default function Header() {
  const t = useTranslations('Header');

  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm'>
      <nav className='container flex max-w-3xl items-center justify-between'>
        <div>
          <Link href='/' className='font-serif text-2xl font-bold'>
            BK
          </Link>
        </div>

        <ul className='flex items-center gap-6 text-sm font-light text-muted-foreground sm:gap-10'>
          <li>
            <Link 
              href='/posts' 
              className='font-spoqa transition-colors hover:text-foreground active:text-[rgb(1,120,223)]'
            >
              {t('posts')}
            </Link>
          </li>
          <li>
            <Link 
              href='/projects' 
              className='font-spoqa transition-colors hover:text-foreground active:text-[rgb(1,120,223)]'
            >
              {t('projects')}
            </Link>
          </li>
          <li>
            <Link 
              href='/contact' 
              className='font-spoqa transition-colors hover:text-foreground active:text-[rgb(1,120,223)]'
            >
              {t('contact')}
            </Link>
          </li>
        </ul>

        <div className='flex items-center gap-4'>
          <LocaleSwitcher />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
