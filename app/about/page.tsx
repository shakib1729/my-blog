import path from 'path';
import { readMDX } from '@/utils';

const PostPage = async () => {
  const { content } = await readMDX(path.join('articles', `about.mdx`));
  return <article className="prose">{content}</article>;
};

export default PostPage;
