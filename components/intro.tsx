import Image from 'next/image'
import authorImage from '@/public/images/authors/bk.png'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse gap-y-8 pb-16 md:flex-row md:items-start md:gap-x-16 md:pb-24'>
      <div className='flex-1'>
        <h1 className='text-4xl font-bold leading-tight tracking-tight md:text-5xl'>
          Hey, I&apos;m <span className='font-serif'>BK</span>{' '}
          <span className='text-lg font-normal text-blue-500 md:text-xl'>
            /Bi-kei/
          </span>
        </h1>
        <p className='mt-6 text-xl text-muted-foreground'>
          환영합니다! 👋 저는 AI 소프트웨어 개발자이자 콘텐츠 제작자입니다. 이
          디지털 공간에 저의 최신 프로젝트를 소개하고 인사이트를 공유하며 그
          과정에서 배운 자료들을 모아 놓았습니다. 제 블로그 글이나 AI 관련
          프로젝트를 통해서 의미 있는 무언가를 찾으시길 바랍니다.
        </p>
      </div>
      <div className='relative flex-shrink-0'>
        <Image
          className='rounded-lg object-cover shadow-md grayscale'
          src={authorImage}
          alt='BK'
          width={200}
          height={200}
          priority
        />
      </div>
    </section>
  )
}
