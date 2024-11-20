import Image from 'next/image';
import authorImage from '@/public/images/authors/bk.png';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

export default function Intro() {
  const locale = useLocale();
  const t = useTranslations('Intro');

  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='text-4xl font-bold tracking-tight'>
          <span className={locale === 'ko' ? 'font-spoqa' : ''}>
            {t('greeting')} 
          </span>
          <span className='text-muted-foreground'>{t('pronunciation')}</span>
        </h1>
        <p className={`mt-6 text-xl text-muted-foreground ${locale === 'ko' ? 'font-spoqa' : ''}`}>
          {t('description')}
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg grayscale'
          src={authorImage}
          alt='BK'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  );
}
