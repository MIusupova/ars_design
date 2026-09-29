import type { Metadata } from 'next';
import { buildMetadata } from '../../shared/i18n/metadata';
import { LanguageProvider } from '../../shared/i18n/LanguageContext';
import HomePageView from '../../views/homePage/HomePageView';

export const metadata: Metadata = buildMetadata('ru');

export default function Page() {
  return (
    <LanguageProvider lang="ru">
      <HomePageView />
    </LanguageProvider>
  );
}
