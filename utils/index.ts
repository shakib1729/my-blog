import fs from 'fs';
import { compileMDX } from 'next-mdx-remote/rsc';
import path from 'path';
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';
import Image from '@/components/Image';
import ExternalLink from '@/components/ExternalLink';

import type { PostMetadata } from '@/types';
import type { ReactElement } from 'react';

const ROOT_DIR = 'articles/posts';

export const readMDX = async (filePath: string) => {
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' });

  return compileMDX<PostMetadata>({
    source: fileContent,
    components: { RoughNotationGroup, RoughNotation, Image, ExternalLink },
    options: { parseFrontmatter: true },
  });
};

export const getPostBySlug = async (slug: string): Promise<{ meta: PostMetadata; content: ReactElement }> => {
  const realSlug = slug.replace(/\.mdx$/, '');
  const filePath = path.join(ROOT_DIR, `${realSlug}.mdx`);

  const { frontmatter, content } = await readMDX(filePath);

  return { meta: { ...frontmatter, slug: realSlug }, content };
};

export const getAllPostsMetadata = async () => {
  const folder = ROOT_DIR;
  const files = fs.readdirSync(folder);
  const mdxPostFiles = files.filter(file => file.endsWith('.mdx'));

  const postsPromises = mdxPostFiles.map(async file => {
    const { meta } = await getPostBySlug(file);
    return meta;
  });
  const posts = await Promise.all(postsPromises);

  // Dates must be in YYYY-MM-DD format
  return posts.sort((first, second) => new Date(second.date).getTime() - new Date(first.date).getTime());
};

export const formatDate = (dateStr: string) => {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
};
