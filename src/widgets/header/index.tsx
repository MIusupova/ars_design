'use client';

import Link from 'next/link';
import logo from '../../assets/icons/logoDark.svg';
import { scrollToSection } from '../../shared/config/navigation';
import { useLanguage } from '../../shared/i18n/LanguageContext';
import styles from './styles.module.scss';

const Header = () => {
  const { t, lang } = useLanguage();

  // Ссылка показывается в двух местах: рядом с текстом на десктопе
  // и отдельным блоком под видео на телефоне. Какой из них виден, решает CSS.
  const cta = (
    <button type="button" className={styles.cta} onClick={() => scrollToSection('contact')}>
      <span>{t.header.cta}</span>
      <span className={styles.ctaArrow} aria-hidden="true">→</span>
    </button>
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.media}>
        <video
          className={styles.video}
          src="/video/about-interior.mp4"
          poster="/images/header.webp"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />
        <div className={styles.veil} />
      </div>

      <div className={styles.card}>
        <Link href={lang === 'ru' ? '/ru' : '/'} className={styles.logo}>
          <img className={styles.logoImg} src={logo.src} alt="ARS DESIGN" />
        </Link>
        <div className={styles.text}>
          <h1 className={styles.company}>{t.header.title}</h1>
          <p className={styles.subtitle}>{t.header.subtitle}</p>
          <div className={styles.contactsInline}>{cta}</div>
        </div>
      </div>

      <div className={styles.contacts}>{cta}</div>
    </div>
  );
};

export default Header;
