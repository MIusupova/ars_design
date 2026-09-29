'use client';

import logo from '../../assets/icons/logo.svg';
import { navIds, scrollToSection } from '../../shared/config/navigation';
import { useLanguage } from '../../shared/i18n/LanguageContext';
import styles from './styles.module.scss';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <img className={styles.logo} src={logo.src} alt="ARS Design" />

        <nav className={styles.nav} aria-label={t.footer.navAria}>
          <ul className={styles.list}>
            {navIds.map((id) => (
              <li key={id}>
                <button
                  type="button"
                  className={styles.link}
                  onClick={() => scrollToSection(id)}
                >
                  {t.nav[id]}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <p className={styles.copy}>{t.footer.copy(new Date().getFullYear())}</p>
      </div>
    </footer>
  );
};

export default Footer;
