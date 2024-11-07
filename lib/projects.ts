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
