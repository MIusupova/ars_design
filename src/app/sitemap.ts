import type { MetadataRoute } from 'next';
import { SITE_URL } from '../shared/config/site';
import { posts } from '../shared/blog/posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = { fr: `${SITE_URL}/`, ru: `${SITE_URL}/ru`, 'x-default': `${SITE_URL}/` };

  return [
    { url: `${SITE_URL}/`, lastModified: new Date(), alternates: { languages } },
    { url: `${SITE_URL}/ru`, lastModified: new Date(), alternates: { languages } },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      alternates: { languages: { fr: `${SITE_URL}/blog`, ru: `${SITE_URL}/ru/blog` } },
    },
    { url: `${SITE_URL}/ru/blog`, lastModified: new Date() },
    ...posts.flatMap((post) => {
      const languages = { fr: `${SITE_URL}/blog/${post.slug}`, ru: `${SITE_URL}/ru/blog/${post.slug}` };
      const lastModified = new Date(post.date);
      return [
        { url: languages.fr, lastModified, alternates: { languages } },
        { url: languages.ru, lastModified, alternates: { languages } },
      ];
    }),
  ];
}
