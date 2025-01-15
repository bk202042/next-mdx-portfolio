import Image from 'next/image'
import authorImage from '@/public/images/authors/bk.png'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>안녕하세요, 저는 BK입니다.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          환영합니다! 👋 안녕하세요, 저는 AI 소프트웨어 개발자이자 콘텐츠 제작자인 비케이 /Bi-kei/입니다. 이 디지털 공간에 저의 최신 프로젝트를 소개하고 인사이트를 공유하며 그 과정에서 배운 자료들을 모아 놓았습니다. 제 블로그 글이나 AI 관련 프로젝트를 통해서 의미 있는 무언가를 찾으시길 바랍니다. 들러주셔서 감사합니다! 🌟
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg grayscale'
          src={authorImage}
          alt='Hamed Bahram'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  )
}
