// Единый источник пунктов меню — используется и в шапке, и в футере.
export type NavItem = {
  id: string;
  label: string;
};

export const navItems: NavItem[] = [
  { id: 'about', label: 'О нас' },
  { id: 'portfolio', label: 'Портфолио' },
  { id: 'services', label: 'Услуги' },
  { id: 'contact', label: 'Контакты' },
  { id: 'news', label: 'Новости' },
];

export const scrollToSection = (id: string): void => {
  const section = document.getElementById(id);
  if (!section) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  section.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
};
