import Image from 'next/image';
import { useLocale } from 'next-intl';
import authorImage from '@/public/images/authors/bk.png';
import MDXContent from '@/components/mdx-content';
import { getIntroContent } from '@/lib/intro';

export default async function Intro() {
  const locale = useLocale();
  const content = await getIntroContent(locale);

  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <MDXContent source={content} />
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
