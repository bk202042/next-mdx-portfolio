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
