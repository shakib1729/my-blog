import PostPreview from '@/components/PostPreview';
import { getAllPostsMetadata } from '@/utils';

export default async function Home() {
  const postsMetadata = await getAllPostsMetadata();
  const postPreviews = postsMetadata?.map(metadata => <PostPreview key={metadata.slug} {...metadata} />);

  return <div className="grid grid-cols-1 gap-4 md:grid-cols-2">{postPreviews}</div>;
}
