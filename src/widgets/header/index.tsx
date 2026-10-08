'use client';

import Link from 'next/link';
import logo from '../../assets/icons/logoDark.svg';
import { useLanguage } from '../../shared/i18n/LanguageContext';
import styles from './styles.module.scss';

const Header = () => {
  const { t, lang } = useLanguage();

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
        </div>
      </div>
    </div>
  );
};

export default Header;
