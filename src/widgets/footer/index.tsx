'use client';

import Link from 'next/link';
import logo from '../../assets/icons/logoDark.svg';
import { navIds, scrollToSection } from '../../shared/config/navigation';
import { useLanguage } from '../../shared/i18n/LanguageContext';
import styles from './styles.module.scss';

type FooterProps = {
  page?: 'home' | 'blog';
};

const Footer = ({ page = 'home' }: FooterProps) => {
  const { t, lang } = useLanguage();
  const home = lang === 'ru' ? '/ru' : '';

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <img className={styles.logo} src={logo.src} alt="ARS Design" />

        <nav className={styles.nav} aria-label={t.footer.navAria}>
          <ul className={styles.list}>
            {navIds.map((id) => (
              <li key={id}>
                {page === 'home' ? (
                  <button type="button" className={styles.link} onClick={() => scrollToSection(id)}>
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
              <Link className={styles.link} href={`${home}/blog`}>
                {t.nav.blog}
              </Link>
            </li>
          </ul>
        </nav>

        <p className={styles.copy}>{t.footer.copy(new Date().getFullYear())}</p>
      </div>
    </footer>
  );
};

export default Footer;
