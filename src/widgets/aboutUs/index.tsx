'use client';

import { useLanguage } from '../../shared/i18n/LanguageContext';
import styles from './styles.module.scss';

const AboutUs = () => {
  const { t } = useLanguage();

  return (
    <div className={styles.wrapper}>
      <div className={styles.media}>
        <video
          className={styles.video}
          src="/video/about-interior.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
        <div className={styles.fade} />
      </div>

      <div className={styles.content}>
        <div className={styles.textCol}>
          <span className={styles.eyebrow}>ARS DESIGN</span>
          <p className={styles.lead}>{t.aboutUs.lead}</p>
        </div>

        <div className={styles.side}>
          <p className={styles.body}>{t.aboutUs.body}</p>
          
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
