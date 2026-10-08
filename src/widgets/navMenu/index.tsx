'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import logo from '../../assets/icons/logoDark.svg';
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

type NavMenuProps = {
  // На главной пункты прокручивают страницу; на странице блога ведут на главную.
  page?: 'home' | 'blog';
};

const NavMenu = ({ page = 'home' }: NavMenuProps) => {
  const { t, lang } = useLanguage();
  const home = lang === 'ru' ? '/ru' : '';
  const blogHref = `${home}/blog`;
  const isHome = page === 'home';
  const [activeId, setActiveId] = useState<(typeof navIds)[number] | null>(isHome ? navIds[0] : null);
  const [open, setOpen] = useState(false);
  const barRef = useRef<HTMLElement>(null);

  // Активный пункт: секция, пересекающая узкую полосу в середине экрана.
  // Так корректно подсвечиваются и высокие, и короткие секции.
  useEffect(() => {
    if (!isHome) return;
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
  }, [isHome]);

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
        {isHome ? (
          <button
            type="button"
            className={styles.brand}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label={t.navMenu.toTop}
          >
            <img className={styles.brandLogo} src={logo.src} alt="ARS Design" />
          </button>
        ) : (
          <Link className={styles.brand} href={home || '/'} aria-label="ARS Design">
            <img className={styles.brandLogo} src={logo.src} alt="ARS Design" />
          </Link>
        )}

        <nav className={styles.nav} aria-label={t.navMenu.mainNavAria}>
          <ul className={styles.list}>
            {navIds.map((id) => (
              <li key={id}>
                {isHome ? (
                  <button
                    type="button"
                    className={`${styles.link} ${activeId === id ? styles.active : ''}`}
                    onClick={() => handleClick(id)}
                    aria-current={activeId === id ? 'true' : undefined}
                  >
                    {t.nav[id]}
                  </button>
                ) : (
                  <Link className={styles.link} href={`${home}/#${id}`}>
                    {t.nav[id]}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <Link
                className={`${styles.link} ${page === 'blog' ? styles.active : ''}`}
                href={blogHref}
                aria-current={page === 'blog' ? 'page' : undefined}
              >
                {t.nav.blog}
              </Link>
            </li>
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
              {isHome ? (
                <button
                  type="button"
                  className={`${styles.panelLink} ${activeId === id ? styles.active : ''}`}
                  onClick={() => handleClick(id)}
                  tabIndex={open ? 0 : -1}
                >
                  {t.nav[id]}
                </button>
              ) : (
                <Link className={styles.panelLink} href={`${home}/#${id}`} tabIndex={open ? 0 : -1}>
                  {t.nav[id]}
                </Link>
              )}
            </li>
          ))}
          <li>
            <Link
              className={`${styles.panelLink} ${page === 'blog' ? styles.active : ''}`}
              href={blogHref}
              tabIndex={open ? 0 : -1}
            >
              {t.nav.blog}
            </Link>
          </li>
          <li>
            <LangSwitcher className={styles.panelLang} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavMenu;
