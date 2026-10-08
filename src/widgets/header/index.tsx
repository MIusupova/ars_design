'use client';

import { scrollToSection } from '../../shared/config/navigation';
import { useLanguage } from '../../shared/i18n/LanguageContext';
import styles from './styles.module.scss';

const TITLE = 'ARS DESIGN';

const Header = () => {
  const { t } = useLanguage();
  const words = t.header.title.split(' ');

  return (
    <div className={styles.wrapper}>
      <div className={styles.media}>
        <video
          className={styles.video}
          src="/video/hero.mp4"
          poster="/images/hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />
        <div className={styles.veil} />
        <div className={styles.fade} />
      </div>

      <div className={styles.content}>
        <div className={styles.row}>
          <p className={styles.lead} aria-label={t.header.title}>
            {words.map((word, i) => (
              <span key={i} className={styles.word} aria-hidden="true" style={{ animationDelay: `${0.9 + i * 0.07}s` }}>
                {word}&nbsp;
              </span>
            ))}
          </p>
          <button type="button" className={styles.cta} onClick={() => scrollToSection('contact')}>
            <span>{t.header.cta}</span>
            <span className={styles.ctaIcon} aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M8 7h9v9" />
              </svg>
            </span>
          </button>
        </div>
        <h1 className={styles.company} aria-label={TITLE}>
          {TITLE.split('').map((ch, i) => (
            <span key={i} className={styles.mask} aria-hidden="true">
              <span className={styles.letter} style={{ animationDelay: `${0.15 + i * 0.07}s` }}>
                {ch === ' ' ? '\u00a0' : ch}
              </span>
            </span>
          ))}
        </h1>
      </div>
    </div>
  );
};

export default Header;
