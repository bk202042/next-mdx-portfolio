import { getPostBySlug } from '@/lib/posts';
import { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  return {
    title: post?.metadata.title,
    description: post?.metadata.summary,
  };
}

export default async function Page({ params }: PageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <article className="prose prose-neutral dark:prose-invert">
      <h1>{post.metadata.title}</h1>
      <MDXRemote source={post.content} />
    </article>
  );
}
