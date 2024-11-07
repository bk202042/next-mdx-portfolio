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
            HB
          </Link>
        </div>

        <ul className='flex items-center gap-6 text-sm font-light text-muted-foreground sm:gap-10'>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/posts' className='font-spoqa'>{t('posts')}</Link>
          </li>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/projects' className='font-spoqa'>{t('projects')}</Link>
          </li>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/contact' className='font-spoqa'>{t('contact')}</Link>
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
