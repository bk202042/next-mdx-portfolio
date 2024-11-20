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

export async function getProjectMetadata(filepath: string, forceLocale?: string): Promise<ProjectMetadata> {
  try {
    let locale = 'en';
    if (!forceLocale) {
      try {
        const cookieStore = cookies();
        locale = (await cookieStore).get('locale')?.value || 'en';
      } catch {
        // Fallback to default locale if cookies are not available
      }
    } else {
      locale = forceLocale;
    }
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

export async function getProjectBySlug(slug: string, forceLocale?: string) {
  try {
    let locale = 'ko';
    if (!forceLocale) {
      try {
        const cookieStore = await cookies();
        locale = cookieStore.get('locale')?.value ?? 'ko';
      } catch {
        // Fallback to default locale if cookies are not available
      }
    } else {
      locale = forceLocale;
    }
    const filePath = path.join(rootDirectory(locale), `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });
    const { data, content } = matter(fileContent);

    return {
      metadata: {
        ...data,
        slug,
        title: locale === 'ko' ? `<span class="ko-text">${data.title}</span>` : data.title,
        description: locale === 'ko' ? `<span class="ko-text">${data.description}</span>` : data.description,
      },
      content,
    };
  } catch (error) {
    console.error('Error reading project:', error);
    return null;
  }
}

export async function getProjects(forceLocale?: string): Promise<ProjectMetadata[]> {
  let locale = 'ko';
  if (!forceLocale) {
    try {
      const cookieStore = await cookies();
      locale = cookieStore.get('locale')?.value ?? 'ko';
    } catch {
      // Fallback to default locale if cookies are not available
    }
  } else {
    locale = forceLocale;
  }
  const files = fs.readdirSync(rootDirectory(locale));

  const projects = files
    .filter(file => file.endsWith('.mdx'))
    .map(file => getProjectMetadata(file));

  return Promise.all(projects);
}
