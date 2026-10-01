import type { Metadata } from 'next';
import { buildBlogMetadata } from '../../../shared/i18n/metadata';
import { LanguageProvider } from '../../../shared/i18n/LanguageContext';
import BlogPageView from '../../../views/blogPage/BlogPageView';

export const metadata: Metadata = buildBlogMetadata('ru');

export default function Page() {
  return (
    <LanguageProvider lang="ru" paths={{ fr: '/blog', ru: '/ru/blog' }}>
      <BlogPageView />
    </LanguageProvider>
  );
}
