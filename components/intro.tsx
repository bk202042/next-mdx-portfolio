"use client"

import Image from 'next/image'
import authorImage from '@/public/images/authors/bk.png'
import { Card, CardContent } from '@/components/ui/card'
import { useEffect, useState } from 'react'

export default function Intro() {
  const [isVisible, setIsVisible] = useState(false)
  
  // Trigger animation on component mount
  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className='pb-10 sm:pb-16 md:pb-24'>
      <div className='flex flex-col-reverse items-center gap-y-8 md:flex-row md:items-center md:gap-x-12'>
        <div 
          className={`flex-1 text-center md:text-left transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <h1 className='text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-5xl'>
            Hey, I&apos;m <span className='font-serif'>BK</span>{' '}
            <span className='text-lg font-normal text-blue-500 sm:text-xl md:text-2xl lg:text-3xl'>
              /Bi-kei/
            </span>
          </h1>
          
          <Card 
            className={`mt-6 border-none bg-primary/5 backdrop-blur-sm shadow-lg overflow-hidden transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <CardContent className='p-5 md:p-6'>
              <p className='text-base leading-relaxed text-foreground sm:text-lg md:text-xl font-medium'>
                환영합니다! 저는 AI 소프트웨어 개발자이자 B2B 컨설턴트입니다.
              </p>
              <p className='mt-3 text-base leading-relaxed text-foreground/90 sm:text-lg'>
                이 공간에서는 AI 소프트웨어 개발과 B2B 업무 개선 프로젝트를 소개합니다.
              </p>
              <p className='mt-3 text-base leading-relaxed text-foreground/90 sm:text-lg'>
                AI로 비즈니스 혁신을 꿈꾸는 모든 분들께 실질적인 변화를 만들어 드리겠습니다.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div 
          className={`relative mb-8 flex-shrink-0 md:mb-0 md:ml-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <div className='relative'>
            <div className='absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-70 -z-10 animate-pulse'></div>
            <Image
              className='mx-auto rounded-lg object-cover shadow-lg grayscale hover:grayscale-0 transition-all duration-300 border-2 border-primary/10'
              src={authorImage}
              alt='BK'
              width={220}
              height={220}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
