

# .eslintrc.json

```json
{
  "extends": "next/core-web-vitals"
}

```

# .prettierrc

```
{
  "arrowParens": "avoid",
  "singleQuote": true,
  "jsxSingleQuote": true,
  "tabWidth": 2,
  "trailingComma": "none",
  "semi": false,
  "proseWrap": "always",
  "printWidth": 80,
  "plugins": ["prettier-plugin-tailwindcss"]
}

```

# app/contact/page.tsx

```tsx
import ContactForm from '@/components/contact-form';
import { useTranslations } from 'next-intl';

export default function Contact() {
  const t = useTranslations('ContactForm');

  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <h2 className='title'>{t('title')}</h2>
        <ContactForm />
      </div>
    </section>
  );
}

```

# app/favicon.ico

This is a binary file of the type: Binary

# app/fonts/SpoqaHanSansNeo-Bold.otf

This is a binary file of the type: Binary

# app/fonts/SpoqaHanSansNeo-Light.otf

This is a binary file of the type: Binary

# app/fonts/SpoqaHanSansNeo-Medium.otf

This is a binary file of the type: Binary

# app/fonts/SpoqaHanSansNeo-Regular.otf

This is a binary file of the type: Binary

# app/fonts/SpoqaHanSansNeo-Thin.otf

This is a binary file of the type: Binary

# app/globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 240 10% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 240 10% 3.9%;
    --primary: 240 5.9% 10%;
    --primary-foreground: 0 0% 98%;
    --secondary: 240 4.8% 95.9%;
    --secondary-foreground: 240 5.9% 10%;
    --muted: 240 4.8% 95.9%;
    --muted-foreground: 240 3.8% 46.1%;
    --accent: 240 4.8% 95.9%;
    --accent-foreground: 240 5.9% 10%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 240 5.9% 90%;
    --input: 240 5.9% 90%;
    --ring: 240 10% 3.9%;
    --radius: 0.5rem;
    --chart-1: 12 76% 61%;
    --chart-2: 173 58% 39%;
    --chart-3: 197 37% 24%;
    --chart-4: 43 74% 66%;
    --chart-5: 27 87% 67%;

    --sh-identifier: #354150;
    --sh-keyword: #f47067;
    --sh-string: #00a99a;
    --sh-class: #8d85ff;
    --sh-property: #4e8fdf;
    --sh-entity: #6eafad;
    --sh-jsxliterals: #bf7db6;
    --sh-sign: #8996a3;
    --sh-comment: #a19595;
  }

  .dark {
    --background: 240 10% 3.9%;
    --foreground: 0 0% 98%;
    --card: 240 10% 3.9%;
    --card-foreground: 0 0% 98%;
    --popover: 240 10% 3.9%;
    --popover-foreground: 0 0% 98%;
    --primary: 0 0% 98%;
    --primary-foreground: 240 5.9% 10%;
    --secondary: 240 3.7% 15.9%;
    --secondary-foreground: 0 0% 98%;
    --muted: 240 3.7% 15.9%;
    --muted-foreground: 240 5% 64.9%;
    --accent: 240 3.7% 15.9%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    --border: 240 3.7% 15.9%;
    --input: 240 3.7% 15.9%;
    --ring: 240 4.9% 83.9%;
    --chart-1: 220 70% 50%;
    --chart-2: 160 60% 45%;
    --chart-3: 30 80% 55%;
    --chart-4: 280 65% 60%;
    --chart-5: 340 75% 55%;

    --sh-class: #4c97f8;
    --sh-identifier: white;
    --sh-keyword: #f47067;
    --sh-string: #0fa295;
  }

  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground;
  }
}

@layer components {
  /* Main title */
  .title {
    @apply font-sans text-3xl font-bold;
  }

  /* Section titles */
  .subtitle {
    @apply font-sans text-xl font-medium tracking-tight sm:text-2xl;
  }

  /* Regular body text */
  .body-text {
    @apply font-sans text-base font-light text-muted-foreground;
  }

  /* Smaller text (dates, metadata) */
  .meta-text {
    @apply font-sans text-sm font-light text-muted-foreground;
  }

  /* Navigation/menu text */
  .menu-text {
    @apply font-sans text-sm font-medium text-muted-foreground transition-colors hover:text-foreground;
  }

  .prose {
    @apply text-foreground;
  }

  .prose pre {
    @apply overflow-x-auto rounded-lg bg-accent px-5 py-4 text-sm;
  }

  .prose code {
    @apply rounded-lg px-1 py-0.5;
  }

  .prose pre code {
    @apply p-0;
  }

  .prose code span {
    @apply font-medium;
  }

  /* Korean text specific classes */
  .ko-text {
    @apply font-sans; /* This will use Spoqa Han Sans Neo */
  }

  .ko-title {
    @apply font-sans text-3xl font-bold;
  }

  .ko-subtitle {
    @apply font-sans text-xl font-medium text-muted-foreground;
  }

  .ko-body {
    @apply font-sans text-base text-muted-foreground;
  }
}

```

# app/layout.tsx

```tsx
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

```

# app/not-found.tsx

```tsx
import Link from 'next/link'
import { ArrowLeftIcon } from '@radix-ui/react-icons'

export default function NotFound() {
  return (
    <section className='pb-24 pt-40'>
      <div className='min-h-full px-4 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8'>
        <div className='mx-auto max-w-max'>
          <main className='sm:flex'>
            <p className='text-4xl font-bold tracking-tight text-muted-foreground sm:text-5xl'>
              404
            </p>
            <div className='sm:ml-6'>
              <div className='sm:border-l sm:border-gray-200 sm:pl-6'>
                <h1 className='text-3xl font-bold tracking-tight sm:text-5xl'>
                  Page not found
                </h1>
                <p className='mt-1 text-base text-muted-foreground'>
                  Please check the URL in the address bar and try again.
                </p>
              </div>
              <div className='mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6'>
                <Link
                  href='/'
                  className='inline-flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground'
                >
                  <ArrowLeftIcon className='h-5 w-5' />
                  <span>Go back home</span>
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  )
}

```

# app/page.tsx

```tsx
import Intro from '@/components/intro'
import NewsletterForm from '@/components/newsletter-form'
import RecentPosts from '@/components/recent-posts'
import RecentProjects from '@/components/recent-projects'

export default function Home() {
  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <Intro />

        <RecentPosts />
        <RecentProjects />

        <NewsletterForm />
      </div>
    </section>
  )
}

```

# app/posts/[slug]/page.tsx

```tsx
import Link from 'next/link'
import Image from 'next/image'

import { formatDate } from '@/lib/utils'
import MDXContent from '@/components/mdx-content'
import { getPosts, getPostBySlug } from '@/lib/posts'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import { notFound } from 'next/navigation'
import NewsletterForm from '@/components/newsletter-form'

export async function generateStaticParams() {
  const posts = await getPosts()
  const slugs = posts.map(post => ({ slug: post.slug }))

  return slugs
}

export default async function Post(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const { slug } = params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const { metadata, content } = post
  const { title, image, author, publishedAt } = metadata

  return (
    <section className='pb-24 pt-32'>
      <div className='container max-w-3xl'>
        <Link
          href='/posts'
          className='mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          <span>Back to posts</span>
        </Link>

        {image && (
          <div className='relative mb-6 h-96 w-full overflow-hidden rounded-lg'>
            <Image
              src={image}
              alt={title || ''}
              className='object-cover'
              fill
            />
          </div>
        )}

        <header>
          <h1 className='title'>{title}</h1>
          <p className='mt-3 text-xs text-muted-foreground'>
            {author} / {formatDate(publishedAt ?? '')}
          </p>
        </header>

        <main className='prose mt-16 dark:prose-invert'>
          <MDXContent source={content} />
        </main>

        <footer className='mt-16'>
          <NewsletterForm />
        </footer>
      </div>
    </section>
  )
}

```

# app/posts/page.tsx

```tsx
import { getPosts } from '@/lib/posts';
import PostsWithSearch from '@/components/posts-with-search';

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <h1 className='title mb-12'>Posts</h1>

        <PostsWithSearch posts={posts} />
      </div>
    </section>
  );
}


```

# app/projects/[slug]/page.tsx

```tsx
import Link from 'next/link'
import Image from 'next/image'

import { formatDate } from '@/lib/utils'
import MDXContent from '@/components/mdx-content'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import { getProjectBySlug, getProjects } from '@/lib/projects'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const projects = await getProjects()
  const slugs = projects.map(project => ({ slug: project.slug }))

  return slugs
}

export default async function Project(
  props: {
    params: Promise<{ slug: string }>
  }
) {
  const params = await props.params;
  const { slug } = params
  const project = await getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const { metadata, content } = project
  const { title, image, author, publishedAt } = metadata

  return (
    <section className='pb-24 pt-32'>
      <div className='container max-w-3xl'>
        <Link
          href='/projects'
          className='mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          <span>Back to projects</span>
        </Link>

        {image && (
          <div className='relative mb-6 h-96 w-full overflow-hidden rounded-lg'>
            <Image
              src={image}
              alt={title || ''}
              className='object-cover'
              fill
            />
          </div>
        )}

        <header>
          <h1 className='title'>{title}</h1>
          <p className='mt-3 text-xs text-muted-foreground'>
            {author} / {formatDate(publishedAt ?? '')}
          </p>
        </header>

        <main className='prose mt-16 dark:prose-invert'>
          <MDXContent source={content} />
        </main>
      </div>
    </section>
  )
}

```

# app/projects/page.tsx

```tsx
import Projects from '@/components/projects'
import { getProjects } from '@/lib/projects'

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <h1 className='title mb-12'>Projects</h1>

        <Projects projects={projects} />
      </div>
    </section>
  )
}

```

# components.json

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "app/globals.css",
    "baseColor": "zinc",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

# components/contact-form.tsx

```tsx
'use client'

import { z } from 'zod'
import Link from 'next/link'
import { toast } from 'sonner'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ContactFormSchema } from '@/lib/schemas'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { sendEmail } from '@/lib/actions'
import { useTranslations } from 'next-intl'

type Inputs = z.infer<typeof ContactFormSchema>

export default function ContactForm() {
  const t = useTranslations('ContactForm')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<Inputs>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  })

  const processForm: SubmitHandler<Inputs> = async data => {
    const result = await sendEmail(data)

    if (result?.error) {
      toast.error('An error occurred! Please try again.')
      return
    }

    toast.success('Message sent successfully!')
    reset()
  }

  return (
    <section className='relative isolate'>
      {/* Background pattern */}
      <svg
        className='absolute inset-0 -z-10 h-full w-full stroke-zinc-200 opacity-75 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] dark:stroke-zinc-700'
        aria-hidden='true'
      >
        <defs>
          <pattern
            id='83fd4e5a-9d52-42fc-97b6-718e5d7ee527'
            width={200}
            height={200}
            x='50%'
            y={-64}
            patternUnits='userSpaceOnUse'
          >
            <path d='M100 200V.5M.5 .5H200' fill='none' />
          </pattern>
        </defs>
        <svg
          x='50%'
          y={-64}
          className='overflow-visible fill-zinc-50 dark:fill-zinc-900/75'
        >
          <path
            d='M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M299.5 800h201v201h-201Z'
            strokeWidth={0}
          />
        </svg>
        <rect
          width='100%'
          height='100%'
          strokeWidth={0}
          fill='url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)'
        />
      </svg>

      {/* Form */}
      <div className='relative'>
        <form
          onSubmit={handleSubmit(processForm)}
          className='mt-16 lg:flex-auto'
          noValidate
        >
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
            {/* Name */}
            <div>
              <Input
                id='name'
                type='text'
                placeholder={t('name')}
                className='ko-text'
                {...register('name')}
              />

              {errors.name?.message && (
                <p className='ko-text ml-1 mt-2 text-rose-400'>
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <Input
                type='email'
                id='email'
                autoComplete='email'
                placeholder={t('email')}
                {...register('email')}
              />

              {errors.email?.message && (
                <p className='meta-text ml-1 mt-2 text-rose-400'>
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div className='sm:col-span-2'>
              <Textarea
                rows={4}
                placeholder={t('message')}
                {...register('message')}
              />

              {errors.message?.message && (
                <p className='meta-text ml-1 mt-2 text-rose-400'>
                  {errors.message.message}
                </p>
              )}
            </div>
          </div>
          <div className='mt-6'>
            <Button
              type='submit'
              disabled={isSubmitting}
              className='w-full disabled:opacity-50 ko-text'
            >
              {t('submit')}
            </Button>
          </div>
          <p className='ko-text mt-4 text-muted-foreground'>
            By submitting this form, I agree to the{' '}
            <Link href='/privacy' className='font-bold'>
              privacy&nbsp;policy.
            </Link>
          </p>
        </form>
      </div>
    </section>
  )
}

```

# components/counter.tsx

```tsx
'use client'

import { useState } from 'react'
import { Button } from './ui/button'
import { MinusIcon, PlusIcon } from '@radix-ui/react-icons'

export default function Counter() {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  return (
    <div className='flex items-center gap-3'>
      <Button size='icon' onClick={decrement}>
        <MinusIcon />
      </Button>
      <p>Current vote: {count}</p>
      <Button size='icon' onClick={increment}>
        <PlusIcon />
      </Button>
    </div>
  )
}

```

# components/footer.tsx

```tsx
import { JSX, SVGProps } from 'react'

const navigation = [
  // {
  //   name: 'Facebook',
  //   href: '#',
  //   icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //     <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
  //       <path
  //         fillRule='evenodd'
  //         d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
  //         clipRule='evenodd'
  //       />
  //     </svg>
  //   )
  // },
  // {
  //   name: 'Instagram',
  //   href: '#',
  //   icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //     <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
  //       <path
  //         fillRule='evenodd'
  //         d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
  //         clipRule='evenodd'
  //       />
  //     </svg>
  //   )
  // },
  {
    name: 'LinkedIn',
    href: '#',
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg fill='currentColor' viewBox='0 0 448 512' {...props}>
        <path
          fill='currentColor'
          d='M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z'
        ></path>
      </svg>
    )
  },
  {
    name: 'X',
    href: '#',
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
        <path d='M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z' />
      </svg>
    )
  },
  {
    name: 'GitHub',
    href: '#',
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
        <path
          fillRule='evenodd'
          d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
          clipRule='evenodd'
        />
      </svg>
    )
  },
  {
    name: 'YouTube',
    href: '#',
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
        <path
          fillRule='evenodd'
          d='M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z'
          clipRule='evenodd'
        />
      </svg>
    )
  }
]

export default function Footer() {
  return (
    <footer className='py-8'>
      <div className='container max-w-3xl'>
        <div className='md:flex md:items-center md:justify-between'>
          <div className='flex justify-center space-x-6 md:order-2'>
            {navigation.map(item => (
              <a
                key={item.name}
                href={item.href}
                target='_blank'
                rel='noreferrer noopener'
                className='text-muted-foreground hover:text-foreground'
              >
                <span className='sr-only'>{item.name}</span>
                <item.icon aria-hidden='true' className='h-5 w-5' />
              </a>
            ))}
          </div>
          <div className='mt-8 md:order-1 md:mt-0'>
            <p className='text-center text-xs leading-5 text-muted-foreground'>
              &copy; {new Date().getFullYear()} Your Company. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

```

# components/header.tsx

```tsx
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

```

# components/intro.tsx

```tsx
import Image from 'next/image';
import authorImage from '@/public/images/authors/bk.png';
import { useTranslations } from 'next-intl';

export default function Intro() {
  const t = useTranslations('HomePage');

  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='ko-title'>{t('title')}</h1>
        <p className='ko-body mt-3'>{t('intro')}</p>
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
  );
}

```

# components/locale-switcher.tsx

```tsx
'use client';

import { useLocale } from 'next-intl';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function LocaleSwitcher() {
  const locale = useLocale();

  const onSelectChange = (newLocale: string) => {
    document.cookie = `locale=${newLocale};path=/;max-age=31536000`;
    window.location.reload();
  };

  return (
    <Select defaultValue={locale} onValueChange={onSelectChange}>
      <SelectTrigger className="w-[70px]">
        <SelectValue placeholder={locale.toUpperCase()} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="ko">KO</SelectItem>
        <SelectItem value="en">EN</SelectItem>
      </SelectContent>
    </Select>
  );
}

```

# components/mdx-content.tsx

```tsx
import { JSX } from 'react'
import { highlight } from 'sugar-high'
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'

import Counter from '@/components/counter'

function Code({ children, ...props }: any) {
  let codeHTML = highlight(children)
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

const components = {
  code: Code,
  Counter
}

export default function MDXContent(
  props: JSX.IntrinsicAttributes & MDXRemoteProps
) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}

```

# components/newsletter-form.tsx

```tsx
'use client'

import { z } from 'zod'
import Link from 'next/link'
import { toast } from 'sonner'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { NewsletterFormSchema } from '@/lib/schemas'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import { subscribe } from '@/lib/actions'
import { Card, CardContent } from '@/components/ui/card'

type Inputs = z.infer<typeof NewsletterFormSchema>

export default function NewsletterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<Inputs>({
    resolver: zodResolver(NewsletterFormSchema),
    defaultValues: {
      email: ''
    }
  })

  const processForm: SubmitHandler<Inputs> = async data => {
    const result = await subscribe(data)

    if (result?.error) {
      toast.error('An error occurred! Please try again.')
      return
    }

    toast.success('Subscribed successfully!')
    reset()
  }

  return (
    <section>
      <Card className='rounded-lg border-0 dark:border'>
        <CardContent className='flex flex-col gap-8 pt-6 md:flex-row md:justify-between md:pt-8'>
          <div>
            <h2 className='text-2xl font-bold'>Subscribe to my newsletter</h2>
            <p className='text-muted-foreground'>
              Get updates on my work and projects.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(processForm)}
            className='flex flex-col items-start gap-3'
          >
            <div className='w-full'>
              <Input
                type='email'
                id='email'
                autoComplete='email'
                placeholder='Email'
                className='w-full'
                {...register('email')}
              />

              {errors.email?.message && (
                <p className='ml-1 mt-2 text-sm text-rose-400'>
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className='w-full'>
              <Button
                type='submit'
                disabled={isSubmitting}
                className='w-full disabled:opacity-50'
              >
                {isSubmitting ? 'Submitting...' : 'Subscribe'}
              </Button>
            </div>

            <div>
              <p className='text-xs text-muted-foreground'>
                We care about your data. Read our{' '}
                <Link href='/privacy' className='font-bold'>
                  privacy&nbsp;policy.
                </Link>
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}

```

# components/posts-with-search.tsx

```tsx
'use client'

import { useState } from 'react'
import { PostMetadata } from '@/lib/posts'

import Posts from '@/components/posts'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Cross2Icon } from '@radix-ui/react-icons'

export default function PostsWithSearch({ posts }: { posts: PostMetadata[] }) {
  const [query, setQuery] = useState('')
  const filtered = posts.filter(post =>
    post.title?.toLowerCase().includes(query.toLowerCase())
  )

  const isFiltered = query.length > 0
  function resetFilter() {
    setQuery('')
  }

  return (
    <div>
      <div className='mb-12 flex items-center gap-3'>
        <Input
          type='text'
          placeholder='Search posts...'
          className='h-9 w-full sm:w-1/2'
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        {isFiltered && (
          <Button
            size='sm'
            variant='secondary'
            onClick={resetFilter}
            className='h-8 px-2 lg:px-3'
          >
            Reset
            <Cross2Icon className='ml-2 h-4 w-4' />
          </Button>
        )}
      </div>

      <Posts posts={filtered} />
    </div>
  )
}

```

# components/posts.tsx

```tsx
import Link from 'next/link'
import { useLocale } from 'next-intl'

import { PostMetadata } from '@/lib/posts'
import { formatDate } from '@/lib/utils'

export default function Posts({ posts }: { posts: PostMetadata[] }) {
  const locale = useLocale()

  return (
    <ul className='flex flex-col gap-8'>
      {posts.map(post => (
        <li key={post.slug}>
          <Link
            href={`/posts/${post.slug}`}
            className='flex flex-col justify-between gap-x-4 gap-y-1 sm:flex-row'
          >
            <div className='max-w-lg'>
              <p className='subtitle'>{post.title}</p>
              <p className='body-text mt-1 line-clamp-2'>{post.summary}</p>
            </div>

            {post.publishedAt && (
              <p className='meta-text mt-1'>{formatDate(post.publishedAt, locale)}</p>
            )}
          </Link>
        </li>
      ))}
    </ul>
  )
}

```

# components/projects.tsx

```tsx
import Image from 'next/image'
import Link from 'next/link'

import { ProjectMetadata } from '@/lib/projects'
import { formatDate } from '@/lib/utils'

export default function Projects({
  projects
}: {
  projects: ProjectMetadata[]
}) {
  return (
    <ul className='grid grid-cols-1 gap-8 sm:grid-cols-2'>
      {projects.map(project => (
        <li key={project.slug} className='group relative'>
          <Link href={`/projects/${project.slug}`}>
            {project.image && (
              <div className='h-72 w-full overflow-hidden bg-muted sm:h-60'>
                <Image
                  src={project.image}
                  alt={project.title || ''}
                  fill
                  className='rounded-lg object-cover object-center transition-transform duration-500 group-hover:scale-105'
                />
              </div>
            )}

            <div className='absolute inset-[1px] rounded-lg bg-background/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100' />

            <div className='absolute inset-x-0 bottom-0 translate-y-2 px-6 py-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100'>
              <h2 className='title line-clamp-1 text-xl no-underline'>
                {project.title}
              </h2>
              <p className='line-clamp-1 text-sm text-muted-foreground'>
                {project.summary}
              </p>
              <p className='text-xs font-light text-muted-foreground'>
                {formatDate(project.publishedAt ?? '')}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

```

# components/providers.tsx

```tsx
'use client'

import { ThemeProvider, useTheme } from 'next-themes'
import { Toaster } from '@/components/ui/sonner'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      enableSystem
      attribute='class'
      defaultTheme='system'
      disableTransitionOnChange
    >
      {children}
      <ToasterProvider />
    </ThemeProvider>
  )
}

function ToasterProvider() {
  const { resolvedTheme } = useTheme()

  return (
    <Toaster
      position='top-right'
      theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
    />
  )
}

```

# components/recent-posts.tsx

```tsx
import Link from 'next/link'
import { getPosts } from '@/lib/posts'
import Posts from '@/components/posts'

export default async function RecentPosts() {
  const posts = await getPosts(4)

  return (
    <section className='pb-24'>
      <div>
        <h2 className='title mb-12'>Recent posts</h2>
        <Posts posts={posts} />

        <Link
          href='/posts'
          className='mt-8 inline-flex items-center gap-2 text-muted-foreground underline decoration-1 underline-offset-2 transition-colors hover:text-foreground'
        >
          <span>All posts</span>
        </Link>
      </div>
    </section>
  )
}

```

# components/recent-projects.tsx

```tsx
import Link from 'next/link'
import { getProjects } from '@/lib/projects'
import Projects from '@/components/projects'

export default async function RecentProjects() {
  const projects = await getProjects(2)

  return (
    <section className='pb-24'>
      <div>
        <h2 className='title mb-12'>Recent projects</h2>
        <Projects projects={projects} />

        <Link
          href='/projects'
          className='mt-8 inline-flex items-center gap-2 text-muted-foreground underline decoration-1 underline-offset-2 transition-colors hover:text-foreground'
        >
          <span>All projects</span>
        </Link>
      </div>
    </section>
  )
}

```

# components/theme-toggle.tsx

```tsx
'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Button
      size='sm'
      variant='ghost'
      onClick={() => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
      }}
    >
      {resolvedTheme === 'dark' ? (
        <SunIcon className='size-4 text-orange-300' />
      ) : (
        <MoonIcon className='size-4 text-sky-950' />
      )}

      <span className='sr-only'>Toggle theme</span>
    </Button>
  )
}

```

# components/ui/button.tsx

```tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

```

# components/ui/card.tsx

```tsx
import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }

```

# components/ui/input.tsx

```tsx
import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }

```

# components/ui/select.tsx

```tsx
"use client"

import * as React from "react"
import {
  CaretSortIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons"
import * as SelectPrimitive from "@radix-ui/react-select"

import { cn } from "@/lib/utils"

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <CaretSortIcon className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronUpIcon />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronDownIcon />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold", className)}
    {...props}
  />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <CheckIcon className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}

```

# components/ui/sonner.tsx

```tsx
"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }

```

# components/ui/textarea.tsx

```tsx
import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }

```

# content/posts/en/introduction-to-mdx.mdx

```mdx
---
  title: Introduction to MDX
  summary: MDX is a powerful tool that allows you to write JSX in your Markdown files. This post will introduce you to the basics of MDX.
  image: /images/posts/introduction-to-mdx.webp
  author: 'Hamed Bahram'
  publishedAt: '2024-08-08'
---

MDX is a powerful tool that allows you to write JSX in your Markdown files. This
post will introduce you to the basics of MDX.

## What is MDX?

MDX is a file format that allows you to write JSX in your Markdown files. This
means that you can use React components, import other components, and even write
inline JSX in your Markdown files.

\`\`\`
export async function getSource() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return data;
}
\`\`\`

## Why use MDX?

MDX is a great way to write interactive documentation, blog posts, and other
content that requires more than just plain text. By using MDX, you can easily
embed interactive components, code snippets, and other dynamic content in your
Markdown files.

<Counter />

## How to use MDX

To use MDX, you need to install a plugin for your static site generator or build
tool. For example, if you're using Gatsby, you can use the `gatsby-plugin-mdx`
plugin to enable MDX support in your project.

Once you have the plugin installed, you can start writing MDX files by creating
files with the `.mdx` extension and writing JSX inside them.

## Conclusion

MDX is a powerful tool that allows you to write JSX in your Markdown files. This
post has introduced you to the basics of MDX and explained why you might want to
use it in your projects.

```

# content/posts/en/introduction-to-nextjs.mdx

```mdx
---
  title: Introduction to NextJs
  summary: NextJs is a powerful React framework that makes it easy to build server-rendered React applications. This post will introduce you to the basics of NextJs.
  image: /images/posts/introduction-to-nextjs.webp
  author: 'Hamed Bahram'
  publishedAt: '2024-08-10'
---

NextJs is a powerful React framework that makes it easy to build server-rendered
React applications. This post will introduce you to the basics of NextJs.

## What is NextJs?

NextJs is a React framework that allows you to build server-rendered React
applications with ease. It provides a number of features out of the box, such as
server-side rendering, static site generation, and API routes, that make it easy
to build fast and scalable React applications.

\`\`\`jsx
export default function Home() {
  return <h1>Hello, NextJs!</h1>
}
\`\`\`

## Why use NextJs?

NextJs is a great choice for building server-rendered React applications because
it provides a number of features that make it easy to build fast and scalable
applications. Some of the key features of NextJs include:

- Server-side rendering: NextJs allows you to render your React components on
  the server, which can improve performance and SEO.
- Static site generation: NextJs can generate static HTML files for your pages
  at build time, which can improve performance and reduce hosting costs.
- API routes: NextJs allows you to create API routes that can be used to fetch
  data from external APIs or perform server-side logic.

## How to use NextJs

To use NextJs, you need to create a new NextJs project by running the following
command:

\`\`\`bash
npx create-next-app my-app
\`\`\`

This will create a new NextJs project in a directory called `my-app`. You can
then navigate to the project directory and start the development server by
running the following command:

\`\`\`bash
cd my-app
npm run dev
\`\`\`

This will start the development server and open your NextJs application in your
browser. You can then start building your application by creating new pages,
components, and API routes.

## Conclusion

NextJs is a powerful React framework that makes it easy to build server-rendered
React applications. This post has introduced you to the basics of NextJs and
explained why you might want to use it in your projects.

```

# content/posts/ko/introduction-to-mdx.mdx

```mdx
---
  title: Introduction to MDX
  summary: MDX is a powerful tool that allows you to write JSX in your Markdown files. This post will introduce you to the basics of MDX.
  image: /images/posts/introduction-to-mdx.webp
  author: 'Hamed Bahram'
  publishedAt: '2024-08-08'
---

MDX is a powerful tool that allows you to write JSX in your Markdown files. This
post will introduce you to the basics of MDX.

## What is MDX?

MDX is a file format that allows you to write JSX in your Markdown files. This
means that you can use React components, import other components, and even write
inline JSX in your Markdown files.

\`\`\`
export async function getSource() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return data;
}
\`\`\`

## Why use MDX?

MDX is a great way to write interactive documentation, blog posts, and other
content that requires more than just plain text. By using MDX, you can easily
embed interactive components, code snippets, and other dynamic content in your
Markdown files.

<Counter />

## How to use MDX

To use MDX, you need to install a plugin for your static site generator or build
tool. For example, if you're using Gatsby, you can use the `gatsby-plugin-mdx`
plugin to enable MDX support in your project.

Once you have the plugin installed, you can start writing MDX files by creating
files with the `.mdx` extension and writing JSX inside them.

## Conclusion

MDX is a powerful tool that allows you to write JSX in your Markdown files. This
post has introduced you to the basics of MDX and explained why you might want to
use it in your projects.

```

# content/posts/ko/introduction-to-nextjs.mdx

```mdx
---
  title: Introduction to NextJs
  summary: NextJs is a powerful React framework that makes it easy to build server-rendered React applications. This post will introduce you to the basics of NextJs.
  image: /images/posts/introduction-to-nextjs.webp
  author: 'Hamed Bahram'
  publishedAt: '2024-08-10'
---

NextJs is a powerful React framework that makes it easy to build server-rendered
React applications. This post will introduce you to the basics of NextJs.

## What is NextJs?

NextJs is a React framework that allows you to build server-rendered React
applications with ease. It provides a number of features out of the box, such as
server-side rendering, static site generation, and API routes, that make it easy
to build fast and scalable React applications.

\`\`\`jsx
export default function Home() {
  return <h1>Hello, NextJs!</h1>
}
\`\`\`

## Why use NextJs?

NextJs is a great choice for building server-rendered React applications because
it provides a number of features that make it easy to build fast and scalable
applications. Some of the key features of NextJs include:

- Server-side rendering: NextJs allows you to render your React components on
  the server, which can improve performance and SEO.
- Static site generation: NextJs can generate static HTML files for your pages
  at build time, which can improve performance and reduce hosting costs.
- API routes: NextJs allows you to create API routes that can be used to fetch
  data from external APIs or perform server-side logic.

## How to use NextJs

To use NextJs, you need to create a new NextJs project by running the following
command:

\`\`\`bash
npx create-next-app my-app
\`\`\`

This will create a new NextJs project in a directory called `my-app`. You can
then navigate to the project directory and start the development server by
running the following command:

\`\`\`bash
cd my-app
npm run dev
\`\`\`

This will start the development server and open your NextJs application in your
browser. You can then start building your application by creating new pages,
components, and API routes.

## Conclusion

NextJs is a powerful React framework that makes it easy to build server-rendered
React applications. This post has introduced you to the basics of NextJs and
explained why you might want to use it in your projects.

```

# content/projects/en/ecommerce-store.mdx

```mdx
---
  title: Ecommerce Store
  summary: A full-stack ecommerce store built with NextJs and Stripe.
  image: /images/projects/ecommerce-store.jpg
  author: 'Hamed Bahram'
  publishedAt: '2024-08-04'
---

This is a full-stack ecommerce store built with NextJs and Stripe. It uses the
`@stripe/stripe-js` package to handle payments and the `@next/bundle-analyzer`
package to analyze the bundle size.

## Features

- **Stripe Payments**: Accept payments using the Stripe API.
- **Product Catalog**: Display products in a grid layout.
- **Shopping Cart**: Add products to the shopping cart and checkout.
- **User Authentication**: Allow users to sign up and log in.
- **Order History**: View order history and track shipments.

## Technologies

- **NextJs**: A React framework for building static and dynamic websites.
- **Stripe**: A payment processing platform for online businesses.
- **Tailwind CSS**: A utility-first CSS framework for building custom designs.
- **Vercel**: A cloud platform for static sites and serverless functions.

## Getting Started

To get started with this project, you can clone the repository and install the
dependencies:

\`\`\`bash
git clone
cd ecommerce-store
npm install
\`\`\`

Once the dependencies are installed, you can run the development server:

\`\`\`bash
npm run dev
\`\`\`

The development server will start at `http://localhost:3000`.

## Deployment

To deploy this project, you can use Vercel. You can link your GitHub repository
to Vercel and deploy the project with a single click.

## Conclusion

This ecommerce store is a great example of how you can build a full-stack
application with NextJs and Stripe. By integrating the Stripe API with NextJs,
you can create a seamless shopping experience for your customers and manage
payments securely and efficiently.

```

# content/projects/en/next-mdx-portfolio.mdx

```mdx
---
  title: NextJs MDX Portfolio
  summary: A portfolio website built with NextJs and MDX.
  image: /images/projects/next-mdx-portfolio.jpg
  author: 'Hamed Bahram'
  publishedAt: '2024-08-08'
---

This is a portfolio website built with NextJs and MDX. It uses the `@next/mdx`
package to render MDX content in NextJs pages.

## Features

- **MDX Support**: Write content in MDX format.
- **Syntax Highlighting**: Code blocks are syntax highlighted.
- **Custom Components**: Use custom components in your MDX files.
- **Responsive Design**: The website is responsive and works on all devices.

## Technologies

- **NextJs**: A React framework for building static and dynamic websites.
- **MDX**: A file format that allows you to write JSX in your Markdown files.
- **Tailwind CSS**: A utility-first CSS framework for building custom designs.
- **Vercel**: A cloud platform for static sites and serverless functions.

## Getting Started

To get started with this project, you can clone the repository and install the
dependencies:

\`\`\`bash
git clone
cd next-mdx-portfolio
npm install
\`\`\`

Once the dependencies are installed, you can run the development server:

\`\`\`bash
npm run dev
\`\`\`

The development server will start at `http://localhost:3000`.

## Deployment

To deploy this project, you can use Vercel. You can link your GitHub repository
to Vercel and deploy the project with a single click.

## Conclusion

This portfolio website is a great example of how you can use NextJs and MDX to
build a modern website with dynamic content. By combining the power of NextJs
and MDX, you can create interactive and engaging websites that are easy to
maintain and update.

```

# content/projects/en/sample-project.mdx

```mdx
---
title: Sample Project
description: This is a sample project
publishedAt: '2024-03-20'
---

Project content goes here...

```

# content/projects/ko/ecommerce-store.mdx

```mdx
---
  title: Ecommerce Store
  summary: A full-stack ecommerce store built with NextJs and Stripe.
  image: /images/projects/ecommerce-store.jpg
  author: 'Hamed Bahram'
  publishedAt: '2024-08-04'
---

This is a full-stack ecommerce store built with NextJs and Stripe. It uses the
`@stripe/stripe-js` package to handle payments and the `@next/bundle-analyzer`
package to analyze the bundle size.

## Features

- **Stripe Payments**: Accept payments using the Stripe API.
- **Product Catalog**: Display products in a grid layout.
- **Shopping Cart**: Add products to the shopping cart and checkout.
- **User Authentication**: Allow users to sign up and log in.
- **Order History**: View order history and track shipments.

## Technologies

- **NextJs**: A React framework for building static and dynamic websites.
- **Stripe**: A payment processing platform for online businesses.
- **Tailwind CSS**: A utility-first CSS framework for building custom designs.
- **Vercel**: A cloud platform for static sites and serverless functions.

## Getting Started

To get started with this project, you can clone the repository and install the
dependencies:

\`\`\`bash
git clone
cd ecommerce-store
npm install
\`\`\`

Once the dependencies are installed, you can run the development server:

\`\`\`bash
npm run dev
\`\`\`

The development server will start at `http://localhost:3000`.

## Deployment

To deploy this project, you can use Vercel. You can link your GitHub repository
to Vercel and deploy the project with a single click.

## Conclusion

This ecommerce store is a great example of how you can build a full-stack
application with NextJs and Stripe. By integrating the Stripe API with NextJs,
you can create a seamless shopping experience for your customers and manage
payments securely and efficiently.

```

# content/projects/ko/next-mdx-portfolio.mdx

```mdx
---
  title: NextJs MDX Portfolio
  summary: A portfolio website built with NextJs and MDX.
  image: /images/projects/next-mdx-portfolio.jpg
  author: 'Hamed Bahram'
  publishedAt: '2024-08-08'
---

This is a portfolio website built with NextJs and MDX. It uses the `@next/mdx`
package to render MDX content in NextJs pages.

## Features

- **MDX Support**: Write content in MDX format.
- **Syntax Highlighting**: Code blocks are syntax highlighted.
- **Custom Components**: Use custom components in your MDX files.
- **Responsive Design**: The website is responsive and works on all devices.

## Technologies

- **NextJs**: A React framework for building static and dynamic websites.
- **MDX**: A file format that allows you to write JSX in your Markdown files.
- **Tailwind CSS**: A utility-first CSS framework for building custom designs.
- **Vercel**: A cloud platform for static sites and serverless functions.

## Getting Started

To get started with this project, you can clone the repository and install the
dependencies:

\`\`\`bash
git clone
cd next-mdx-portfolio
npm install
\`\`\`

Once the dependencies are installed, you can run the development server:

\`\`\`bash
npm run dev
\`\`\`

The development server will start at `http://localhost:3000`.

## Deployment

To deploy this project, you can use Vercel. You can link your GitHub repository
to Vercel and deploy the project with a single click.

## Conclusion

This portfolio website is a great example of how you can use NextJs and MDX to
build a modern website with dynamic content. By combining the power of NextJs
and MDX, you can create interactive and engaging websites that are easy to
maintain and update.

```

# content/projects/ko/sample-project.mdx

```mdx
---
title: 샘플 프로젝트
description: 이것은 샘플 프로젝트입니다
publishedAt: '2024-03-20'
---

프로젝트 내용이 여기에 들어갑니다...

```

# emails/contact-form-email.tsx

```tsx
interface ContactFormEmailProps {
  name: string
  email: string
  message: string
}

const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  name,
  email,
  message
}) => (
  <div>
    <h1>Contact form submission</h1>
    <p>
      From <strong>{name}</strong> at {email}
    </p>
    <h2>Message:</h2>
    <p>{message}</p>
  </div>
)

export default ContactFormEmail

```

# i18n/config.ts

```ts
export type Locale = (typeof locales) [number];

export const locales = ["en", "ko"] as const;
export const defaultLocale: Locale = "ko";

```

# i18n/request.ts

```ts
import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async () => {
  const cookieStore = cookies();
  const locale = (await cookieStore).get('locale')?.value ?? 'ko';

  try {
    return {
      locale,
      messages: (await import(`@/messages/${locale}.json`)).default
    };
  } catch (error) {
    console.error('Error loading messages:', error);
    return {
      locale: 'ko',
      messages: (await import(`@/messages/ko.json`)).default
    };
  }
});

```

# lib/actions.ts

```ts
'use server'

import { z } from 'zod'
import { Resend } from 'resend'
import { ContactFormSchema, NewsletterFormSchema } from '@/lib/schemas'
import ContactFormEmail from '@/emails/contact-form-email'

type ContactFormInputs = z.infer<typeof ContactFormSchema>
type NewsletterFormInputs = z.infer<typeof NewsletterFormSchema>
const resend = new Resend(process.env.RESEND_API_KEY)

// If you want to add a check to ensure the API key is present, you can do:
if (!process.env.RESEND_API_KEY) {
  throw new Error('Missing RESEND_API_KEY environment variable')
}

export async function sendEmail(data: ContactFormInputs) {
  const result = ContactFormSchema.safeParse(data)

  if (result.error) {
    return { error: result.error.format() }
  }

  try {
    const { name, email, message } = result.data
    const { data, error } = await resend.emails.send({
      from: 'admin@bkmind.com',
      to: [email],
      cc: ['admin@bkmind.com'],
      subject: 'Contact form submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      react: ContactFormEmail({ name, email, message })
    })

    if (!data || error) {
      throw new Error('Failed to send email')
    }

    return { success: true }
  } catch (error) {
    return { error }
  }
}

export async function subscribe(data: NewsletterFormInputs) {
  const result = NewsletterFormSchema.safeParse(data)

  if (result.error) {
    return { error: result.error.format() }
  }

  try {
    const { email } = result.data
    const { data, error } = await resend.contacts.create({
      email: email,
      audienceId: process.env.RESEND_AUDIENCE_ID as string
    })

    if (!data || error) {
      throw new Error('Failed to subscribe')
    }

    // TODO: Send a welcome email

    return { success: true }
  } catch (error) {
    return { error }
  }
}

```

# lib/posts.ts

```ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { cookies } from 'next/headers';

const rootDirectory = (locale: string) =>
  path.join(process.cwd(), 'content', 'posts', locale);

export type Post = {
  metadata: PostMetadata;
  content: string;
};

export type PostMetadata = {
  title?: string;
  summary?: string;
  image?: string;
  author?: string;
  publishedAt?: string;
  slug: string;
};

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const cookieStore = await cookies();
    const locale = cookieStore.get('locale')?.value || 'en';
    const filePath = path.join(rootDirectory(locale), `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });
    const { data, content } = matter(fileContent);
    return { metadata: { ...data, slug }, content };
  } catch (error) {
    return null;
  }
}

export async function getPosts(limit?: number): Promise<PostMetadata[]> {
  const cookieStore = cookies();
  const locale = (await cookieStore).get('locale')?.value ?? 'ko';
  const files = fs.readdirSync(rootDirectory(locale));

  const posts = files
    .map((file) => getPostMetadata(file, locale))
    .sort((a, b) => {
      if (new Date(a.publishedAt ?? '') < new Date(b.publishedAt ?? '')) {
        return 1;
      }
      return -1;
    });

  if (limit) {
    return posts.slice(0, limit);
  }

  return posts;
}

export function getPostMetadata(filepath: string, locale: string): PostMetadata {
  const slug = filepath.replace(/\.mdx$/, '');
  const filePath = path.join(rootDirectory(locale), filepath);
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });
  const { data } = matter(fileContent);
  return { ...data, slug };
}

```

# lib/projects.ts

```ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { cookies } from 'next/headers';

const rootDirectory = (locale: string) =>
  path.join(process.cwd(), 'content', 'projects', locale);

export type ProjectMetadata = {
  title?: string;
  description?: string;
  image?: string;
  publishedAt?: string;
  slug: string;
};

export async function getProjectMetadata(filepath: string): Promise<ProjectMetadata> {
  try {
    const cookieStore = await cookies();
    const locale = cookieStore.get('locale')?.value || 'en';
    const slug = filepath.replace(/\.mdx$/, '');
    const filePath = path.join(rootDirectory(locale), filepath);
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });
    const { data } = matter(fileContent);
    return {
      ...data,
      slug,
      title: locale === 'ko' ? `<span class="ko-text">${data.title}</span>` : data.title,
      description: locale === 'ko' ? `<span class="ko-text">${data.description}</span>` : data.description,
    };
  } catch (error) {
    console.error('Error reading project metadata:', error);
    return { slug: filepath.replace(/\.mdx$/, '') };
  }
}

export async function getProjects(): Promise<ProjectMetadata[]> {
  const cookieStore = cookies();
  const locale = (await cookieStore).get('locale')?.value ?? 'ko';
  const files = fs.readdirSync(rootDirectory(locale));

  const projects = files
    .filter(file => file.endsWith('.mdx'))
    .map(file => getProjectMetadata(file));

  return Promise.all(projects);
}

```

# lib/schemas.ts

```ts
import { z } from 'zod'

export const ContactFormSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Name is required.' })
    .min(2, { message: 'Must be at least 2 characters.' }),
  email: z
    .string()
    .min(1, { message: 'Email is required.' })
    .email('Invalid email.'),
  message: z.string().min(1, { message: 'Message is required.' })
})

export const NewsletterFormSchema = z.object({
  email: z.string().email('Invalid email.')
})

```

# lib/utils.ts

```ts
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string, locale: string) {
  return new Date(date).toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}


```

# messages/en.json

```json
{
  "HomePage": {
    "title": "Hi, I'm BK",
    "intro":"Welcome to my digital nook.I'm a software engineer specializing in developing IT service products using cutting-edge AI technologies. I'm passionate about learning new technologies and sharing knowledge with others."
  },
  "Header": {
    "posts": "Posts",
    "projects": "Projects",
    "contact": "Contact"
  },
  "Footer": {
    "rights": "All rights reserved."
  },
  "ContactForm": {
    "title": "Let's talk about your project",
    "subtitle": "We help companies and individuals build out their digital presence.",
    "name": "Name",
    "email": "Email",
    "message": "Message",
    "submit": "Contact Us",
    "privacyPolicy": "privacy policy"
  }

}

```

# messages/ko.json

```json
{
    "HomePage": {
        "title": "안녕하세요, BK입니다.",
        "intro": "저의 웹사이트에 오신것을 환영합니다. 저는 최신 AI 기술을 활용하여 IT 서비스 제품을 개발하는 소프트웨어 엔지니어입니다. 새로운 기술을 배우고 다른 사람들과 지식을 공유하는 것에 열정을 가지고 있습니다.",
        "subtitle": "AI 기술로 혁신적인 솔루션을 만듭니다"
    },
    "Header": {
        "posts": "포스트",
        "projects": "프로젝트",
        "contact": "문의하기"
    },
    "Footer": {
        "rights": "모든 권리 보유"
    },
    "ContactForm": {
        "title": "지금 무료 상담을 신청하세요",
        "subtitle": "기업과 개인의 디지털 전환을 지원합니다",
        "name": "이름",
        "email": "이메일",
        "message": "메시지",
        "submit": "문의하기",
        "privacyPolicy": "개인정보처리방침"
    },
    "Services": {
        "title": "서비스",
        "ai": "AI 솔루션 개발",
        "software": "소프트웨어 개발",
        "consulting": "기술 컨설팅"
    }
}

```

# next-env.d.ts

```ts
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/building-your-application/configuring/typescript for more information.

```

# next.config.mjs

```mjs
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextIntl(nextConfig);

```

# package.json

```json
{
  "name": "next-mdx-portfolio",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@hookform/resolvers": "^3.9.0",
    "@radix-ui/react-icons": "^1.3.0",
    "@radix-ui/react-select": "^2.1.2",
    "@radix-ui/react-slot": "^1.1.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.1",
    "gray-matter": "^4.0.3",
    "next": "15.0.2",
    "next-intl": "^3.23.5",
    "next-mdx-remote": "^5.0.0",
    "next-themes": "^0.3.0",
    "prettier": "^3.3.3",
    "prettier-plugin-tailwindcss": "^0.6.5",
    "react": "19.0.0-rc-02c0e824-20241028",
    "react-dom": "19.0.0-rc-02c0e824-20241028",
    "react-hook-form": "^7.52.2",
    "resend": "^3.5.0",
    "sonner": "^1.5.0",
    "sugar-high": "^0.7.0",
    "tailwind-merge": "^2.4.0",
    "tailwindcss-animate": "^1.0.7",
    "zod": "^3.23.8"
  },
  "devDependencies": {
    "@tailwindcss/typography": "^0.5.14",
    "@types/node": "^20",
    "@types/react": "npm:types-react@19.0.0-rc.1",
    "@types/react-dom": "npm:types-react-dom@19.0.0-rc.1",
    "autoprefixer": "^10.0.0",
    "eslint": "^8",
    "eslint-config-next": "15.0.2",
    "postcss": "^8.0.0",
    "tailwindcss": "^3.0.0",
    "typescript": "^5"
  },
  "pnpm": {
    "overrides": {
      "@types/react": "npm:types-react@19.0.0-rc.1",
      "@types/react-dom": "npm:types-react-dom@19.0.0-rc.1"
    }
  }
}

```

# postcss.config.js

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}

```

# postcss.config.mjs

```mjs
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    'tailwindcss': {},
    'autoprefixer': {},
  }
}

export default config

```

# README.md

```md
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

```

# tailwind.config.ts

```ts
import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-spoqa)', 'Spoqa Han Sans Neo', ...fontFamily.sans],
        serif: ['var(--font-serif)', ...fontFamily.serif],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animate')
  ]
}

export default config

```

# tsconfig.json

```json
{
  "compilerOptions": {
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "forceConsistentCasingInFileNames": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": [
        "./*"
      ]
    },
    "target": "ES2017"
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts"
  ],
  "exclude": [
    "node_modules"
  ]
}

```

