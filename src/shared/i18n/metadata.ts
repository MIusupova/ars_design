import type { Metadata } from 'next';
import { SITE_URL } from '../config/site';
import { translations } from './translations';
import type { Lang } from './translations';

const path: Record<Lang, string> = { fr: '/', ru: '/ru' };

export function buildMetadata(lang: Lang): Metadata {
  const t = translations[lang].meta;
  const url = `${SITE_URL}${path[lang]}`;

  return {
    title: t.title,
    description: t.description,
    alternates: {
      canonical: url,
      languages: {
        fr: `${SITE_URL}/`,
        ru: `${SITE_URL}/ru`,
        'x-default': `${SITE_URL}/`,
      },
    },
    openGraph: {
      type: 'website',
      siteName: 'ARS DESIGN',
      title: t.title,
      description: t.ogDescription,
      url,
      images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.title,
      description: t.ogDescription,
      images: [`${SITE_URL}/og-image.jpg`],
    },
  };
}

const blogPath: Record<Lang, string> = { fr: '/blog', ru: '/ru/blog' };

type PageMeta = { title: string; description: string; path: Record<Lang, string>; lang: Lang; article?: boolean; image?: string };

function buildPageMetadata({ title, description, path, lang, article, image }: PageMeta): Metadata {
  const url = `${SITE_URL}${path[lang]}`;
  const images = [{ url: image ?? `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }];

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: { fr: `${SITE_URL}${path.fr}`, ru: `${SITE_URL}${path.ru}` },
    },
    openGraph: { type: article ? 'article' : 'website', siteName: 'ARS DESIGN', title, description, url, images },
    twitter: { card: 'summary_large_image', title, description, images: images.map((i) => i.url) },
  };
}

export function buildBlogMetadata(lang: Lang): Metadata {
  const t = translations[lang].blog;
  return buildPageMetadata({ title: t.metaTitle, description: t.metaDescription, path: blogPath, lang });
}

export function buildPostMetadata(lang: Lang, slug: string, title: string, description: string): Metadata {
  const path = { fr: `/blog/${slug}`, ru: `/ru/blog/${slug}` };
  return buildPageMetadata({ title: `${title} | ARS DESIGN`, description, path, lang, article: true });
}
