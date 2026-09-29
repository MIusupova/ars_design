import type { MetadataRoute } from 'next';
import { SITE_URL } from '../shared/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = { fr: `${SITE_URL}/`, ru: `${SITE_URL}/ru`, 'x-default': `${SITE_URL}/` };

  return [
    { url: `${SITE_URL}/`, lastModified: new Date(), alternates: { languages } },
    { url: `${SITE_URL}/ru`, lastModified: new Date(), alternates: { languages } },
  ];
}
