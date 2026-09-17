// Единый источник пунктов меню — используется и в шапке, и в футере.
export type NavItem = {
  id: string;
  label: string;
};

export const navItems: NavItem[] = [
  { id: 'about', label: 'About us' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact us' },
  { id: 'news', label: 'News' },
];

export const scrollToSection = (id: string): void => {
  const section = document.getElementById(id);
  if (!section) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  section.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
};
