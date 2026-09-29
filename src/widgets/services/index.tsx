'use client';

import { useLanguage } from '../../shared/i18n/LanguageContext';
import styles from './styles.module.scss';

const Services = () => {
  const { t } = useLanguage();

  return (
    <div className={styles.wrapper}>
      <ul className={styles.grid}>
        {t.services.map((service) => (
          <li className={styles.card} key={service.number}>
            <span className={styles.ghost} aria-hidden="true">{service.number}</span>
            <span className={styles.number}>{service.number}</span>
            <h3 className={styles.title}>{service.title}</h3>
            <p className={styles.text}>{service.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
