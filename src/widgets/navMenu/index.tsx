'use client';

import { useEffect, useRef, useState } from 'react';
import logo from '../../assets/icons/logo.svg';
import { navIds, scrollToSection } from '../../shared/config/navigation';
import { useLanguage } from '../../shared/i18n/LanguageContext';
import type { Lang } from '../../shared/i18n/translations';
import styles from './styles.module.scss';

const LangSwitcher = ({ className }: { className?: string }) => {
  const { lang, setLang } = useLanguage();

  return (
    <div className={className}>
      <button
        type="button"
        className={lang === 'fr' ? styles.langActive : styles.langOption}
        onClick={() => setLang('fr' as Lang)}
        aria-current={lang === 'fr' ? 'true' : undefined}
      >
        FR
      </button>
      <span className={styles.langSep}>/</span>
      <button
        type="button"
        className={lang === 'ru' ? styles.langActive : styles.langOption}
        onClick={() => setLang('ru' as Lang)}
        aria-current={lang === 'ru' ? 'true' : undefined}
      >
        RU
      </button>
    </div>
  );
};

const NavMenu = () => {
  const { t } = useLanguage();
  const [activeId, setActiveId] = useState(navIds[0]);
  const [open, setOpen] = useState(false);
  const barRef = useRef<HTMLElement>(null);

  // Активный пункт: секция, пересекающая узкую полосу в середине экрана.
  // Так корректно подсвечиваются и высокие, и короткие секции.
  useEffect(() => {
    const sections = navIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id as (typeof navIds)[number]);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Бургер: закрываем по Escape и по клику вне панели.
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const handlePointerDown = (e: PointerEvent) => {
      if (barRef.current && !barRef.current.contains(e.target as Node)) setOpen(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('pointerdown', handlePointerDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [open]);

  const handleClick = (id: (typeof navIds)[number]) => {
    setActiveId(id);
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <header className={styles.bar} ref={barRef}>
      <div className={styles.inner}>
        <button
          type="button"
          className={styles.brand}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label={t.navMenu.toTop}
        >
          <img className={styles.brandLogo} src={logo.src} alt="ARS Design" />
        </button>

        <nav className={styles.nav} aria-label={t.navMenu.mainNavAria}>
          <ul className={styles.list}>
            {navIds.map((id) => (
              <li key={id}>
                <button
                  type="button"
                  className={`${styles.link} ${activeId === id ? styles.active : ''}`}
                  onClick={() => handleClick(id)}
                  aria-current={activeId === id ? 'true' : undefined}
                >
                  {t.nav[id]}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <LangSwitcher className={styles.lang} />

        <button
          type="button"
          className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? t.navMenu.closeMenu : t.navMenu.openMenu}
          aria-expanded={open}
        >
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
        </button>
      </div>

      <nav
        className={`${styles.panel} ${open ? styles.panelOpen : ''}`}
        aria-label={t.navMenu.mobileNavAria}
        aria-hidden={!open}
      >
        <ul className={styles.panelList}>
          {navIds.map((id) => (
            <li key={id}>
              <button
                type="button"
                className={`${styles.panelLink} ${activeId === id ? styles.active : ''}`}
                onClick={() => handleClick(id)}
                tabIndex={open ? 0 : -1}
              >
                {t.nav[id]}
              </button>
            </li>
          ))}
          <li>
            <LangSwitcher className={styles.panelLang} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavMenu;
