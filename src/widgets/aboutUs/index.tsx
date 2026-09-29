'use client';

import { useLanguage } from '../../shared/i18n/LanguageContext';
import styles from './styles.module.scss';

const AboutUs = () => {
  const { t } = useLanguage();

  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        <div className={styles.textCol}>
          <span className={styles.eyebrow}>ARS DESIGN</span>
          <p className={styles.lead}>{t.aboutUs.lead}</p>
          <p className={styles.body}>{t.aboutUs.body}</p>
        </div>

        <aside className={styles.principles}>
          <ul className={styles.principleList}>
            {t.aboutUs.principles.map((item) => (
              <li className={styles.principle} key={item}>
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default AboutUs;
