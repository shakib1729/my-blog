import Link from 'next/link';
import { formatDate } from '@/utils';
import type { PostMetadata } from '@/types';

const PostPreview = (props: PostMetadata) => (
  <Link href={`/posts/${props.slug}`}>
    <div className="flex flex-col gap-2 rounded-md shadow-md p-4 bg-white group outline-slate-700 outline-2 hover:outline h-36">
      <p className="text-sm text-slate-500">{formatDate(props.date)}</p>
      <h2 className="text-slate-700 group-hover:underline">{props.title}</h2>
      <p className="text-slate-500">{props.subtitle}</p>
    </div>
  </Link>
);
export default PostPreview;
