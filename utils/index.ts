import fs from 'fs';
import { compileMDX } from 'next-mdx-remote/rsc';
import path from 'path';
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';
import Image from '@/components/Image';

import type { PostMetadata } from '@/types';
import type { ReactElement } from 'react';

const ROOT_DIR = 'posts';
export const getPostBySlug = async (slug: string): Promise<{ meta: PostMetadata; content: ReactElement }> => {
  const realSlug = slug.replace(/\.mdx$/, '');
  const filePath = path.join(ROOT_DIR, `${realSlug}.mdx`);

  const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' });

  const { frontmatter, content } = await compileMDX<PostMetadata>({
    source: fileContent,
    components: { RoughNotationGroup, RoughNotation, Image },
    options: { parseFrontmatter: true },
  });

  return { meta: { ...frontmatter, slug: realSlug }, content };
};

export const getAllPostsMetadata = async () => {
  const folder = ROOT_DIR;
  const files = fs.readdirSync(folder);
  const mdxPostFiles = files.filter(file => file.endsWith('.mdx'));

  // const posts = [];
  // for (const file of mdxPostFiles) {
  //   const { meta } = await getPostBySlug(file);
  //   posts.push(meta);
  // }

  const postsPromises = mdxPostFiles.map(async file => {
    const { meta } = await getPostBySlug(file);
    return meta;
  });
  const posts = await Promise.all(postsPromises);

  return posts;
};
