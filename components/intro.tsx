import Image from 'next/image'
import authorImage from '@/public/images/authors/bk.png'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-center gap-y-6 pb-10 sm:pb-16 md:flex-row md:items-start md:gap-x-16 md:pb-24'>
      <div className='flex-1 text-center md:text-left'>
        <h1 className='text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl'>
          Hey, I&apos;m <span className='font-serif'>BK</span>{' '}
          <span className='text-base font-normal text-blue-500 sm:text-lg md:text-xl'>
            /Bi-kei/
          </span>
        </h1>
        <p className='mt-4 text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg md:text-xl'>
          환영합니다! 저는 AI 소프트웨어 개발자이자 B2B 컨설턴트입니다. 이
          공간에서는 AI 소프트웨어 개발과 비즈니스 자동화, 그리고 B2B 컨설팅
          프로젝트를 소개합니다. 최신 프로젝트, 인사이트, 그리고 실질적인
          비즈니스 혁신 사례를 공유합니다. AI로 비즈니스 혁신을 꿈꾸는 모든
          분들께 실질적인 변화를 만들어드리겠습니다.
        </p>
      </div>
      <div className='relative mb-6 flex-shrink-0 md:mb-0'>
        <Image
          className='mx-auto rounded-lg object-cover shadow-md grayscale'
          src={authorImage}
          alt='BK'
          width={120}
          height={120}
          priority
        />
      </div>
    </section>
  )
}
