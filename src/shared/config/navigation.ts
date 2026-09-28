// Единый источник пунктов меню — используется и в шапке, и в футере.
// Подписи берутся из переводов (src/shared/i18n) по id.
export type NavId = 'about' | 'portfolio' | 'services' | 'contact';

export const navIds: NavId[] = ['about', 'portfolio', 'services', 'contact'];

export const scrollToSection = (id: string): void => {
  const section = document.getElementById(id);
  if (!section) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  section.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
};
