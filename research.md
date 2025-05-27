# Next.js MDX Portfolio Project Agent Guide

## Commands

- Development: `pnpm dev` (start development server)
- Build: `pnpm build` (production build)
- Lint: `pnpm lint` (run ESLint)
- Start: `pnpm start` (start production server)

## Code Style Guidelines

- **TypeScript**: Use strict TypeScript with proper types. Use zod for schema
  validation.
- **Formatting**: Single quotes, no semi-colons, 2-space indentation, 80-char
  width limit, arrow function parentheses avoided.
- **Naming**: PascalCase for components, camelCase for functions/variables.
  Export named functions.
- **Imports**: Group imports (React, then external libraries, then internal
  imports with @/ path alias).
- **CSS**: Use Tailwind CSS with className. Use class-variance-authority (cva)
  for component variants.
- **Components**: 'use client' directive for client components. Use React server
  components where possible.
- **Error Handling**: Try/catch blocks with structured error returns:
  `{ error }` or `{ success: true }`.
- **Form Validation**: Zod schemas defined in lib/schemas.ts with
  react-hook-form and @hookform/resolvers/zod.

# 기술 스택 연구

이 문서는 `package.json` 파일에 명시된 주요 기술 스택에 대한 연구 결과를 담고
있습니다. Context7 MCP 서버에서 얻은 최신 문서를 기반으로 작성되었으며, 각
기술의 핵심 개념, 코드 스니펫, 그리고 서버/클라이언트 측 사용에 대한 고려 사항을
포함합니다.

## Next.js

Next.js는 React 애플리케이션을 위한 프레임워크로, 서버 측 렌더링, 정적 사이트
생성 및 API 라우트와 같은 기능을 제공합니다. App Router를 사용하여 서버 및
클라이언트 컴포넌트를 혼합하여 사용할 수 있습니다.

- **동적 라우트 링크**:

  ```typescript
  import Link from 'next/link';

  interface Post {
    id: number;
    title: string;
    slug: string;
  }

  export default function PostList({ posts }: { posts: Post[] }) {
    return (
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    );
  }
  ```

- **서버 컴포넌트에서 데이터 가져오기**:
  ```typescript
  export default async function Page() {
    const data = await fetch('https://api.vercel.app/blog');
    const posts = await data.json();
    return (
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    );
  }
  ```
- **서버 액션**: `'use server'` 지시어를 사용하여 서버에서 실행되는 비동기
  함수를 정의할 수 있습니다.

  ```typescript
  'use server'

  import { revalidatePath } from 'next/cache'

  export async function createPost() {
    try {
      // ...
    } catch (error) {
      // ...
    }

    revalidatePath('/posts')
  }
  ```

- **클라이언트 컴포넌트**: 상호작용이 필요한 컴포넌트는 파일 상단에
  `'use client'` 지시어를 추가해야 합니다.

  ```typescript
  'use client';

  import { usePathname } from 'next/navigation';
  import Link from 'next/link';

  export function Links() {
    const pathname = usePathname();

    return (
      <nav>
        <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
          Home
        </Link>

        <Link
          className={`link ${pathname === '/about' ? 'active' : ''}`}
          href="/about"
        >
          About
        </Link>
      </nav>
    );
  }
  ```

- **API 라우트**: `app/api` 디렉토리에 파일을 생성하여 API 엔드포인트를 정의할
  수 있습니다.

  ```typescript
  import { NextRequest, NextResponse } from 'next/server'
  import { verifySession } from '@/app/lib/dal'
  import { unauthorized } from 'next/navigation'

  export async function GET(req: NextRequest): Promise<NextResponse> {
    // Verify the user's session
    const session = await verifySession()

    // If no session exists, return a 401 and render unauthorized.tsx
    if (!session) {
      unauthorized()
    }

    // Fetch data
    // ...
  }
  ```

## React

React는 사용자 인터페이스를 구축하기 위한 JavaScript 라이브러리입니다. 컴포넌트
기반 아키텍처를 사용하며, 선언적 프로그래밍 방식을 따릅니다.

- **함수형 컴포넌트 및 Hooks**:

  ```javascript
  import { useEffect, useState } from 'react'

  function Foo() {
    const [state, setState] = useState(0)

    useEffect(() => setState(2), [])

    return <div>{state}</div>
  }
  ```

- **JSX**: JavaScript 코드 내에서 UI 구조를 정의하는 데 사용됩니다.

  ```jsx
  import { createRoot } from 'react-dom/client'

  function HelloMessage({ name }) {
    return <div>Hello {name}</div>
  }

  const root = createRoot(document.getElementById('container'))
  root.render(<HelloMessage name='Taylor' />)
  ```

- **`use client`**: 클라이언트 측에서 실행되어야 하는 컴포넌트에 사용됩니다.
- **`use server`**: 서버 측에서 실행되어야 하는 함수에 사용됩니다 (Next.js
  Server Actions).

## TypeScript

TypeScript는 JavaScript에 정적 타입 검사를 추가하여 코드의 안정성과 유지보수성을
향상시키는 언어입니다.

- **타입 주석 및 인터페이스**:

  ```typescript
  interface Post {
    id: number
    title: string
    slug: string
  }

  function processPost(post: Post): void {
    console.log(post.title)
  }
  ```

- **타입 추론**: TypeScript는 변수 및 함수의 타입을 자동으로 추론할 수 있습니다.
  ```typescript
  let greeting = 'Hello, world!' // greeting은 string으로 추론됩니다.
  ```
- **Zod와의 통합**: Zod 스키마를 사용하여 런타임 데이터 유효성 검사와 정적 타입
  추론을 결합할 수 있습니다.

  ```typescript
  import { z } from 'zod'

  const UserSchema = z.object({
    username: z.string(),
    age: z.number().positive()
  })

  type User = z.infer<typeof UserSchema>
  ```

## Tailwind CSS

Tailwind CSS는 유틸리티 우선 CSS 프레임워크로, 미리 정의된 클래스를 사용하여
HTML 마크업에서 직접 스타일을 적용할 수 있습니다.

- **유틸리티 클래스**:
  ```html
  <div class="flex min-h-screen items-center justify-center bg-gray-100">
    <div class="mt-4 bg-white px-8 py-6 text-left shadow-lg">
      <h3 class="text-center text-2xl font-bold">Welcome</h3>
      <p class="mt-2 text-gray-600">Sign in to your account</p>
    </div>
  </div>
  ```
- **반응형 디자인**: 미디어 쿼리 접두사 (예: `sm:`, `md:`, `lg:`)를 사용하여
  반응형 스타일을 적용할 수 있습니다.
  ```html
  <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
  </div>
  ```
- **다크 모드**: `dark:` 접두사를 사용하여 다크 모드 스타일을 적용할 수
  있습니다.
  ```html
  <div class="bg-white text-gray-900 dark:bg-gray-800 dark:text-white">
    This element has different styles in dark mode.
  </div>
  ```
- **`@apply` 지시어**: CSS 파일에서 Tailwind 유틸리티 클래스를 재사용 가능한
  커스텀 클래스로 인라인할 수 있습니다.
  ```css
  .card {
    @apply rounded-lg p-6 shadow-md;
  }
  ```

## MDX (next-mdx-remote)

MDX는 Markdown에 JSX를 삽입할 수 있게 해주는 형식입니다. 이를 통해 마크다운 문서
내에서 React 컴포넌트를 사용할 수 있습니다. `next-mdx-remote`는 Next.js에서
MDX를 서버 측에서 처리하고 클라이언트에서 렌더링하는 데 사용됩니다.

- **MDX 파일 구조**:

  ```mdx
  import { Chart } from './Chart'

  # 연간 보고서

  다음은 올해의 데이터입니다.

  <Chart data={[1, 2, 3]} />
  ```

- **Next.js에서 MDX 렌더링**:

  ```typescript
  import { serialize } from 'next-mdx-remote/serialize';
  import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

  interface PostPageProps {
    source: MDXRemoteSerializeResult;
  }

  export default function PostPage({ source }: PostPageProps) {
    return (
      <div>
        <MDXRemote {...source} />
      </div>
    );
  }

  export async function getStaticProps() {
    const source = await serialize('# Hello, world!');
    return { props: { source } };
  }
  ```

- **커스텀 컴포넌트 전달**: MDX 콘텐츠에 사용될 HTML 요소나 커스텀 컴포넌트를
  전달할 수 있습니다.

  ```jsx
  import { MDXRemote } from 'next-mdx-remote'

  const components = {
    h1: props => <h2 style={{ color: 'red' }} {...props} />,
    MyComponent: props => <div {...props}>Custom Component</div>
  }

  function Content({ source }) {
    return <MDXRemote {...source} components={components} />
  }
  ```

## React Hook Form

React Hook Form은 React 애플리케이션에서 폼 상태 관리, 유효성 검사 및 제출을
위한 라이브러리입니다. 비제어 컴포넌트와 함께 작동하여 성능을 최적화합니다.

- **`useForm` Hook**: 폼 상태 및 메서드에 접근하기 위한 기본 Hook입니다.

  ```typescript
  import { useForm, SubmitHandler } from 'react-hook-form';

  interface IFormInput {
    firstName: string;
    lastName: string;
  }

  function MyForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('firstName', { required: true })} />
        {errors.firstName && <span>First name is required</span>}
        <input {...register('lastName', { required: true })} />
        {errors.lastName && <span>Last name is required</span>}
        <button type="submit">Submit</button>
      </form>
    );
  }
  ```

- **`register`**: 입력 필드를 React Hook Form에 등록합니다.
- **`handleSubmit`**: 폼 제출을 처리하고 유효성 검사를 실행합니다.
- **`control` 및 `Controller`**: 외부 제어 컴포넌트 (예: UI 라이브러리
  컴포넌트)와 통합하는 데 사용됩니다.

  ```typescript
  import { useForm, Controller } from 'react-hook-form';
  import { TextField } from '@material-ui/core';

  interface IFormInputs {
    firstName: string;
  }

  function App() {
    const { control, handleSubmit } = useForm<IFormInputs>();
    const onSubmit = (data: IFormInputs) => console.log(data);

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          render={({ field }) => <TextField {...field} />}
          name="firstName"
          control={control}
          rules={{ required: true }}
          defaultValue=""
        />
        <input type="submit" />
      </form>
    );
  }
  ```

- **유효성 검사 규칙**: `register`에 유효성 검사 규칙을 직접 전달하거나 Zod와
  같은 스키마 유효성 검사 라이브러리와 통합할 수 있습니다.

  ```typescript
  import { useForm } from 'react-hook-form';
  import { z } from 'zod';
  import { zodResolver } from '@hookform/resolvers/zod';

  const schema = z.object({
    email: z.string().email('유효하지 않은 이메일 주소입니다.'),
    password: z.string().min(6, '비밀번호는 6자 이상이어야 합니다.'),
  });

  type LoginFormInputs = z.infer<typeof schema>;

  function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>({
      resolver: zodResolver(schema),
    });

    const onSubmit = (data: LoginFormInputs) => console.log(data);

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" {...register('email')} />
        {errors.email && <span>{errors.email.message}</span>}
        <input type="password" {...register('password')} />
        {errors.password && <span>{errors.password.message}</span>}
        <button type="submit">Login</button>
      </form>
    );
  }
  ```

## Zod

Zod는 TypeScript 우선 스키마 유효성 검사 라이브러리로, 정적 타입 추론 기능을
제공합니다. 런타임 데이터 유효성 검사와 컴파일 타임 타입 안전성을 결합하는 데
사용됩니다.

- **스키마 정의**: 다양한 데이터 유형에 대한 스키마를 정의할 수 있습니다.

  ```typescript
  import { z } from 'zod'

  const myString = z.string()
  const myNumber = z.number()
  const myBoolean = z.boolean()
  const myObject = z.object({
    name: z.string(),
    age: z.number().positive()
  })
  const myArray = z.array(z.string())
  const myUnion = z.union([z.string(), z.number()])
  ```

- **데이터 구문 분석 및 유효성 검사**: `.parse()` 또는 `.safeParse()` 메서드를
  사용하여 데이터를 스키마에 대해 유효성 검사할 수 있습니다.

  ```typescript
  const UserSchema = z.object({
    username: z.string()
  })

  UserSchema.parse({ username: 'testuser' }) // 유효한 데이터
  // UserSchema.parse({ username: 123 }); // ZodError 발생

  const result = UserSchema.safeParse({ username: 'testuser' })
  if (result.success) {
    console.log(result.data)
  } else {
    console.error(result.error.issues)
  }
  ```

- **타입 추론**: `z.infer<typeof schema>`를 사용하여 Zod 스키마에서 TypeScript
  타입을 추론할 수 있습니다.

  ```typescript
  const ProductSchema = z.object({
    id: z.string().uuid(),
    name: z.string(),
    price: z.number().positive()
  })

  type Product = z.infer<typeof ProductSchema>
  // type Product = { id: string; name: string; price: number; }
  ```

- **변환 및 개선**: `.transform()`을 사용하여 데이터를 변환하거나 `.refine()`을
  사용하여 커스텀 유효성 검사 로직을 추가할 수 있습니다.

  ```typescript
  const stringToNumber = z.string().transform(val => val.length)
  stringToNumber.parse('hello') // => 5

  const passwordSchema = z.string().refine(val => val.length >= 8, {
    message: '비밀번호는 8자 이상이어야 합니다.'
  })
  ```

## Radix UI

Radix UI는 접근 가능하고 사용자 정의 가능한 UI 컴포넌트 프리미티브
라이브러리입니다. 스타일이 지정되지 않은 로우 레벨 컴포넌트를 제공하여 디자인
시스템을 구축하는 데 유용합니다.

- **프리미티브 컴포넌트**: 버튼, 체크박스, 슬라이더 등과 같은 기본 UI 요소에
  대한 컴포넌트를 제공합니다.

  ```typescript
  import * as Checkbox from '@radix-ui/react-checkbox';
  import { CheckIcon } from '@radix-ui/react-icons';

  function MyCheckbox() {
    return (
      <form>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Checkbox.Root className="CheckboxRoot" defaultChecked id="c1">
            <Checkbox.Indicator className="CheckboxIndicator">
              <CheckIcon />
            </Checkbox.Indicator>
          </Checkbox.Root>
          <label className="Label" htmlFor="c1" style={{ paddingLeft: 15 }}>
            Accept terms and conditions.
          </label>
        </div>
      </form>
    );
  }
  ```

- **접근성**: Radix UI 컴포넌트는 WAI-ARIA 가이드라인을 준수하여 접근성을
  고려하여 설계되었습니다.
- **스타일링**: Radix UI는 스타일이 지정되지 않은 컴포넌트를 제공하므로 Tailwind
  CSS와 같은 다른 스타일링 라이브러리와 함께 사용하여 원하는 디자인을 적용할 수
  있습니다.

## Class Variance Authority (CVA)

Class Variance Authority (CVA)는 Tailwind CSS와 같은 유틸리티 우선 CSS
프레임워크에서 컴포넌트 변형을 관리하기 위한 라이브러리입니다. 변형에 따라
동적으로 클래스 이름을 생성하는 데 도움이 됩니다.

- **`cva` 함수**: 기본 클래스와 변형 옵션을 정의하는 데 사용됩니다.

  ```typescript
  import { cva } from 'class-variance-authority'

  const buttonVariants = cva(
    'inline-flex items-center justify-center rounded-md text-sm font-medium',
    {
      variants: {
        intent: {
          primary: 'bg-blue-500 text-white hover:bg-blue-600',
          secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300'
        },
        size: {
          small: 'px-3 py-1',
          medium: 'px-4 py-2'
        }
      },
      defaultVariants: {
        intent: 'primary',
        size: 'medium'
      }
    }
  )

  // 사용 예시:
  // buttonVariants({ intent: 'secondary', size: 'small' });
  // => "inline-flex items-center justify-center rounded-md text-sm font-medium bg-gray-200 text-gray-800 hover:bg-gray-300 px-3 py-1"
  ```

- **`compoundVariants`**: 여러 변형이 동시에 적용될 때 추가 클래스를 정의합니다.

  ```typescript
  import { cva } from 'class-variance-authority'

  const buttonVariants = cva('...', {
    variants: {
      intent: { primary: '...', secondary: '...' },
      size: { small: '...', medium: '...' }
    },
    compoundVariants: [
      {
        intent: 'primary',
        size: 'medium',
        class: 'uppercase'
      }
    ]
  })
  ```

- **`cx` (clsx)와의 통합**: `clsx`는 조건부로 클래스 이름을 결합하는 데
  사용되며, CVA와 함께 자주 사용됩니다.

  ```typescript
  import { cva, cx } from 'class-variance-authority';

  const buttonVariants = cva('...');

  function Button({ className, ...props }) {
    return <button className={cx(buttonVariants(), className)} {...props} />;
  }
  ```

- **`tailwind-merge`와의 통합**: `tailwind-merge`는 충돌하는 Tailwind CSS
  클래스를 자동으로 병합하여 스타일 우선순위 문제를 해결합니다. CVA와 함께
  사용하여 최종 클래스 문자열을 정리할 수 있습니다.

  ```typescript
  import { cva } from 'class-variance-authority';
  import { twMerge } from 'tailwind-merge';

  const buttonVariants = cva('...');

  function Button({ className, ...props }) {
    return <button className={twMerge(buttonVariants(), className)} {...props} />;
  }
  ```

## clsx

clsx는 조건부로 `className` 문자열을 구성하기 위한 작고 빠른 유틸리티입니다.
다양한 유형의 입력을 처리할 수 있습니다.

- **기본 사용법**:

  ```javascript
  import clsx from 'clsx'

  clsx('foo', true && 'bar', 'baz') // => 'foo bar baz'
  clsx({ foo: true, bar: false }) // => 'foo'
  clsx(['foo', 0, false, 'bar']) // => 'foo bar'
  clsx(
    'foo',
    [1 && 'bar', { baz: false, bat: null }, ['hello', ['world']]],
    'cya'
  ) // => 'foo bar hello world cya'
  ```

- **Falsey 값 처리**: `false`, `null`, `undefined`, `0`, `''`, `NaN`과 같은
  falsey 값은 무시됩니다.
  ```javascript
  clsx(true, false, '', null, undefined, 0, NaN) // => ''
  ```

## Next Themes

Next Themes는 Next.js 애플리케이션에서 테마 (특히 다크 모드)를 쉽게 구현할 수
있도록 도와주는 라이브러리입니다. 시스템 설정, 로컬 스토리지 및 강제 테마를
지원하며 깜박임 없이 테마 전환을 처리합니다.

- **`ThemeProvider`**: 애플리케이션 루트에 추가하여 테마 기능을 활성화합니다.

  ```jsx
  // app/layout.jsx (App Router)
  import { ThemeProvider } from 'next-themes'

  export default function Layout({ children }) {
    return (
      <html suppressHydrationWarning>
        <body>
          <ThemeProvider>{children}</ThemeProvider>
        </body>
      </html>
    )
  }
  ```

- **`useTheme` Hook**: 클라이언트 컴포넌트에서 현재 테마에 접근하고 테마를
  변경하는 데 사용됩니다.

  ```jsx
  'use client'

  import { useTheme } from 'next-themes'
  import { useState, useEffect } from 'react'

  function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    // useEffect는 클라이언트에서만 실행되므로 UI를 안전하게 표시할 수 있습니다.
    useEffect(() => {
      setMounted(true)
    }, [])

    if (!mounted) {
      return null
    }

    return (
      <select value={theme} onChange={e => setTheme(e.target.value)}>
        <option value='system'>System</option>
        <option value='dark'>Dark</option>
        <option value='light'>Light</option>
      </select>
    )
  }
  ```

- **CSS 변수 테마링**: `data-theme` 속성을 기반으로 CSS 변수를 사용하여 테마
  스타일을 정의하는 것이 권장됩니다.

  ```css
  :root {
    --background: white;
    --foreground: black;
  }

  [data-theme='dark'] {
    --background: black;
    --foreground: white;
  }
  ```

## Resend

Resend는 개발자를 위한 이메일 API입니다. 이메일 전송, 대상 관리, 브로드캐스트 및
도메인과 같은 기능을 제공합니다.

- **이메일 전송**: Resend SDK를 사용하여 프로그래밍 방식으로 이메일을 보낼 수
  있습니다.

  ```typescript
  import { Resend } from 'resend'

  const resend = new Resend(process.env.RESEND_API_KEY)

  async function sendEmail() {
    try {
      const { data, error } = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['delivered@resend.dev'],
        subject: 'Hello world',
        html: '<strong>It works!</strong>'
      })

      if (error) {
        console.error({ error })
        return
      }

      console.log({ data })
    } catch (error) {
      console.error({ error })
    }
  }
  ```

- **React Email**: React 컴포넌트를 사용하여 이메일을 작성할 수 있도록 Resend와
  함께 사용되는 라이브러리입니다.

## Sonner

Sonner는 React를 위한 의견이 있는 토스트 컴포넌트입니다. 간단하고 사용자 정의
가능한 알림을 표시하는 데 사용됩니다.

- **`Toaster` 컴포넌트**: 토스트 알림을 렌더링하기 위해 애플리케이션 레이아웃에
  추가해야 합니다.

  ```jsx
  import { Toaster } from 'sonner'

  function App() {
    return (
      <div>
        <Toaster />
        {/* ... */}
      </div>
    )
  }
  ```

- **`toast` 함수**: 다양한 유형의 토스트 알림을 표시하는 데 사용됩니다.

  ```typescript
  import { toast } from 'sonner'

  toast('기본 토스트 알림')
  toast.success('성공!')
  toast.error('오류!')
  toast.info('정보')
  toast.warning('경고')
  toast.loading('로딩 중...')
  ```

- **옵션 및 사용자 정의**: 토스트의 모양, 동작 및 내용을 사용자 정의하기 위한
  다양한 옵션을 제공합니다.

  ```typescript
  import { toast } from 'sonner'

  toast('사용자 정의 토스트', {
    description: '이것은 설명입니다.',
    duration: 5000,
    action: {
      label: '실행',
      onClick: () => console.log('실행됨!')
    }
  })
  ```

## tailwindcss-animate

tailwindcss-animate는 Tailwind CSS 프로젝트에 애니메이션 유틸리티를 추가하는
플러그인입니다. 요소에 진입 및 종료 애니메이션을 쉽게 적용할 수 있습니다.

- **설치**: `tailwind.config.js` 파일에 플러그인을 추가합니다.
  ```javascript
  // tailwind.config.js
  module.exports = {
    theme: {
      // ...
    },
    plugins: [
      require('tailwindcss-animate')
      // ...
    ]
  }
  ```
- **진입 애니메이션**: `animate-in`과 함께 `fade-in`, `zoom-in`,
  `slide-in-from-*` 등의 유틸리티를 사용합니다.
  ```html
  <div class="animate-in fade-in slide-in-from-top">
    이 요소는 위에서 페이드 인됩니다.
  </div>
  ```
- **종료 애니메이션**: `animate-out`과 함께 `fade-out`, `zoom-out`,
  `slide-out-to-*` 등의 유틸리티를 사용합니다.
  ```html
  <div class="animate-out fade-out slide-out-to-bottom">
    이 요소는 아래로 페이드 아웃됩니다.
  </div>
  ```
- **애니메이션 제어**: `duration-*`, `delay-*`, `repeat-*`, `direction-*`,
  `fill-mode-*` 등의 유틸리티를 사용하여 애니메이션 속성을 제어할 수 있습니다.
  ```html
  <button class="animate-bounce delay-200 duration-1000 repeat-infinite">
    애니메이션 버튼
  </button>
  ```

## 추가 참고 사항

- **`gray-matter`**: 이 라이브러리는 파일에서 프런트매터 (YAML, JSON 또는 TOML
  형식의 메타데이터)를 구문 분석하는 데 사용됩니다. 일반적으로 MDX 파일과 함께
  사용하여 게시물 제목, 날짜 등과 같은 메타데이터를 추출합니다.
- **`prettier-plugin-tailwindcss`**: 이 Prettier 플러그인은 Tailwind CSS
  클래스를 권장 순서로 자동으로 정렬하여 코드 일관성을 유지하는 데 도움이
  됩니다.
- **`sugar-high`**: Context7에서 이 라이브러리에 대한 특정 문서를 찾을 수
  없었습니다. `package.json`에 포함되어 있지만, 주요 애플리케이션 로직의 핵심
  부분은 아닐 수 있습니다. 추가 정보가 필요하면 사용자에게 문의해야 할 수
  있습니다.
- **`tailwind-merge`**: 이 라이브러리에 대한 직접적인 Context7 문서는 찾지
  못했지만, Class Variance Authority (CVA) 문서에서 `tailwind-merge`와 함께
  사용하여 Tailwind 클래스 충돌을 해결하는 예시를 확인했습니다. 이는 CVA와 함께
  사용하여 최종 클래스 문자열을 정리하는 일반적인 패턴입니다.

## 개발 서버 실행 (pnpm)

프로젝트 개발 서버를 실행하려면 `pnpm dev` 명령어를 사용합니다. 이 명령어는
Next.js 개발 서버를 시작하여 코드 변경 사항을 실시간으로 반영합니다.

```bash
pnpm dev
```

이 연구 결과는 `next-mdx-portfolio` 프로젝트의 기술 스택에 대한 개요를
제공합니다. 각 기술에 대한 자세한 내용은 해당 공식 문서를 참조하십시오.
