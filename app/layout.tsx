import type { Metadata } from 'next'
import { Noto_Sans_KR, Playfair_Display } from 'next/font/google'

import { cn } from '@/lib/utils'
import './globals.css'
import Providers from '@/components/providers'
import Header from '@/components/header'
import Footer from '@/components/footer'

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'], // 사용할 서브셋을 지정하세요
  variable: '--font-sans'
})

const playfair = Playfair_Display({
  subsets: ['latin'], // 사용할 서브셋을 지정하세요
  variable: '--font-serif'
})

export const metadata: Metadata = {
  title: 'AI 소프트웨어 개발 및 B2B 컨설팅',
  description: 'AI 소프트웨어 개발 및 B2B 컨설팅 포트폴리오',
  icons: {
    icon: '/logo3.png',
    apple: '/logo3.png'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ko' className={cn(notoSansKR.className, playfair.className)}>
      <body className='flex min-h-screen flex-col antialiased'>
        <Providers>
          <Header />
          <main className='grow'>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
