import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logo.svg';
import subtract from '../../assets/icons/Subtract.svg';
import { scrollToSection } from '../../shared/config/navigation';
import styles from './styles.module.scss';

const Header = () => (
  <div className={styles.wrapper}>
    <div className={styles.logo}>
      <Link to="/">
        <img className={styles.img} src={logo} alt="Logo" />
      </Link>
    </div>
    <div className={styles.title}>
      <h1 className={styles.company}>Architectural and construction company</h1>
    </div>

    <div className={styles.arrowWrapper}>
      <button
        type="button"
        className={styles.arrowButton}
        onClick={() => scrollToSection('about')}
        aria-label="Scroll to about us"
      >
        <img className={styles.str} src={subtract} alt="" />
      </button>
    </div>
  </div>
);

export default Header;
