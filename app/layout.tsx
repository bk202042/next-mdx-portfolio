import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import localFont from 'next/font/local'

import { cn } from '@/lib/utils';

import './globals.css';
import Providers from '@/components/providers';
import Header from '@/components/header';
import Footer from '@/components/footer';

import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  preload: true,
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  preload: true,
});

const spoqa = localFont({
  src: [
    {
      path: './fonts/SpoqaHanSansNeo-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/SpoqaHanSansNeo-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/SpoqaHanSansNeo-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-spoqa',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'Your Site Title',
  description: 'Your site description',
};

export const dynamic = 'force-dynamic';

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={cn(
        inter.variable,
        playfair.variable,
        spoqa.variable,
        'font-sans'
      )}
      suppressHydrationWarning
    >
      <head>
        <meta name="color-scheme" content="light dark" />
      </head>
      <body suppressHydrationWarning>
        <Providers>
          <NextIntlClientProvider messages={messages}>
            <Header />
            <main>{children}</main>
            <Footer />
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
