import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPost, posts } from '../../../shared/blog/posts';
import { buildPostMetadata } from '../../../shared/i18n/metadata';
import { LanguageProvider } from '../../../shared/i18n/LanguageContext';
import BlogPostView from '../../../views/blogPostPage/BlogPostView';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export const generateStaticParams = () => posts.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  const { title, excerpt } = post.text.fr;
  return buildPostMetadata('fr', post.slug, title, excerpt);
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <LanguageProvider
      lang="fr"
      paths={{ fr: `/blog/${slug}`, ru: `/ru/blog/${slug}` }}
    >
      <BlogPostView post={post} />
    </LanguageProvider>
  );
}
