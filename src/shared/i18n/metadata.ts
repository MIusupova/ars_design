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
