import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logo.svg';
import subtract from '../../assets/icons/Subtract.svg';
import { scrollToSection } from '../../shared/config/navigation';
import { useLanguage } from '../../shared/i18n/LanguageContext';
import styles from './styles.module.scss';

const Header = () => {
  const { t } = useLanguage();

  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <Link to="/">
          <img className={styles.img} src={logo} alt="ARS DESIGN" />
        </Link>
      </div>
      <div className={styles.title}>
        <h1 className={styles.company}>{t.header.title}</h1>
        <p className={styles.subtitle}>{t.header.subtitle}</p>
      </div>

      <div className={styles.arrowWrapper}>
        <button
          type="button"
          className={styles.arrowButton}
          onClick={() => scrollToSection('about')}
          aria-label={t.header.scrollAria}
        >
          <img className={styles.str} src={subtract} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Header;
