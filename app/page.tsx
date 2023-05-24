import Link from 'next/link';
import getPostMetadata from '@/components/getPostMetadata';
import PostPreview from '@/components/PostPreview';

export const metadata = {
  title: `Shakib's blog`,
};

export default function Home() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map(post => <PostPreview key={post.slug} {...post} />);

  return <div className="grid grid-cols-1 gap-4 md:grid-cols-2">{postPreviews}</div>;
}
