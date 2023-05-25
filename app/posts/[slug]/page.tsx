import { getAllPostsMetadata, getPostBySlug } from '@/utils';

export const generateStaticParams = async () => {
  const posts = await getAllPostsMetadata();
  return posts.map(post => ({
    slug: post.slug,
  }));
};

const PostPage = async (props: any) => {
  const slug = props.params.slug;
  const { meta, content } = await getPostBySlug(slug);
  return (
    <div>
      <div className="my-8 text-center">
        <h1 className="text-2xl text-slate-600"> {meta.title} </h1>
        <p className="text-slate-400 mt-2">{meta.date}</p>
      </div>
      <article className="prose">{content}</article>
    </div>
  );
};

export default PostPage;
