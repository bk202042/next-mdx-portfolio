import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { headers } from 'next/headers';

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

function getLocale(): string {
  try {
    const headersList = headers();
    const acceptLanguage = headersList.get('accept-language');
    return acceptLanguage?.split(',')[0].split('-')[0] ?? 'en';
  } catch {
    return 'en';
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const locale = getLocale();
    const filePath = path.join(rootDirectory(locale), `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });
    const { data, content } = matter(fileContent);
    return { metadata: { ...data, slug }, content };
  } catch (error) {
    return null;
  }
}

export async function getPosts(limit?: number): Promise<PostMetadata[]> {
  const locale = getLocale();
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
