'use client';

import { createContext, useCallback, useContext, useLayoutEffect, useMemo } from 'react';
import type { ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { translations } from './translations';
import type { Lang, Translation } from './translations';

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translation;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider = ({ lang, children }: { lang: Lang; children: ReactNode }) => {
  const router = useRouter();

  // Заголовок, description, canonical и hreflang теперь приходят с сервера
  // (см. shared/i18n/metadata.ts) — здесь остаётся поправить только атрибут
  // <html lang>, потому что он задан в корневом layout один раз для обоих
  // языков (см. suppressHydrationWarning в app/layout.tsx).
  useLayoutEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback(
    (next: Lang) => {
      if (next === lang) return;
      router.push(next === 'ru' ? '/ru' : '/');
    },
    [lang, router]
  );

  const value = useMemo(() => ({ lang, setLang, t: translations[lang] }), [lang, setLang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextValue => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};
