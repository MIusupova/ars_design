import { SITE_URL } from './site';

export function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: 'ARS DESIGN',
    image: `${SITE_URL}/og-image.jpg`,
    url: SITE_URL,
    telephone: '+33749566614',
    email: 'arsanakaev.fr@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '85 boulevard Gambetta',
      addressLocality: 'Nice',
      postalCode: '06000',
      addressRegion: "Provence-Alpes-Côte d'Azur",
      addressCountry: 'FR',
    },
    areaServed: "Côte d'Azur",
    availableLanguage: ['fr', 'ru'],
    priceRange: '€€',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '19:00',
    },
    // Когда появятся ссылки на соцсети компании, добавить сюда:
    // sameAs: ['https://instagram.com/...', 'https://facebook.com/...'],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
