import { JSX } from 'react'
import { highlight } from 'sugar-high'
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'
import Image from 'next/image'
import { ImgHTMLAttributes, DetailedHTMLProps } from 'react'

import Counter from '@/components/counter'

function Code({ children, ...props }: any) {
  let codeHTML = highlight(children)
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

const components = {
  code: Code,
  Counter,
  img: (props: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) => {
    // Remove width and height from props to avoid conflicts with Next.js Image props
    const { width: _w, height: _h, style: _s, ...rest } = props
    return (
      <Image
        src={props.src as string}
        alt={props.alt || ''}
        width={800}
        height={400}
        style={{ width: '100%', height: 'auto' }}
        priority
        {...rest}
      />
    )
  }
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
