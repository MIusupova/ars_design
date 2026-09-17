import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logo.svg';
import subtract from '../../assets/icons/Subtract.svg';
import { scrollToSection } from '../../shared/config/navigation';
import styles from './styles.module.scss';

const Header = () => (
  <div className={styles.wrapper}>
    <div className={styles.logo}>
      <Link to="/">
        <img className={styles.img} src={logo} alt="ARS DESIGN" />
      </Link>
    </div>
    <div className={styles.title}>
      <h1 className={styles.company}>Ремонт и отделка квартир и домов</h1>
    </div>

    <div className={styles.arrowWrapper}>
      <button
        type="button"
        className={styles.arrowButton}
        onClick={() => scrollToSection('about')}
        aria-label="Перейти к разделу «О нас»"
      >
        <img className={styles.str} src={subtract} alt="" />
      </button>
    </div>
  </div>
);

export default Header;
