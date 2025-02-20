import Link from 'next/link';
import type { PostMetadata } from '@/types';

const PostPreview = (props: PostMetadata) => (
  <Link href={`/posts/${props.slug}`}>
    <div className="border border-slate-300 p-4 rounded-md shadow-md bg-white">
      <p className="text-sm text-slate-400">{props.date}</p>
      <h2 className="text-violet-600 hover:underline mb-4">{props.title}</h2>
      <p className="text-slate-700">{props.subtitle}</p>
    </div>
  </Link>
);
export default PostPreview;
