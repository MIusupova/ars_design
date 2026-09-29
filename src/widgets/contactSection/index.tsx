'use client';

import ContactAdress from '../../assets/icons/cotactAdress.svg';
import ContactPhone from '../../assets/icons/contactPhone.svg';
import ContactMail from '../../assets/icons/contactMail.svg';
import { useLanguage } from '../../shared/i18n/LanguageContext';
import styles from './styles.module.scss';

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <div className={styles.wrapper}>
      <div className={styles.section}>
        {/* Слева — контактная информация */}
        <div className={styles.infoBlock}>
          <div className={styles.infoItem}>
            <div className={styles.infoItemContent}>
              <img className={styles.img} src={ContactAdress.src} alt={t.contact.addressAlt} />
              <p className={styles.text}>Nice, bd. Gambetta st. 85</p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <a href="tel:+33749566614" className={styles.infoItemContent}>
              <img className={styles.img} src={ContactPhone.src} alt={t.contact.phoneAlt} />
              +33 749 56 66 14
            </a>
          </div>
          <div className={styles.infoItem}>
            <a href="mailto:arsanakaev.fr@gmail.com" className={styles.infoItemContent}>
              <img className={styles.img} src={ContactMail.src} alt={t.contact.mailAlt} />
              arsanakaev.fr@gmail.com
            </a>
          </div>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className={styles.formBlock}
        >
          <input
            type="text"
            placeholder={t.contact.namePlaceholder}
            className={styles.input}
          />
          <input
            type="tel"
            placeholder={t.contact.phonePlaceholder}
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
            {t.contact.submit}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
