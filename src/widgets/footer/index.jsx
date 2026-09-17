import logo from '../../assets/icons/logo.svg';
import { navItems, scrollToSection } from '../../shared/config/navigation';
import styles from './styles.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.inner}>
      <img className={styles.logo} src={logo} alt="ARS Design" />

      <nav className={styles.nav} aria-label="Footer">
        <ul className={styles.list}>
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className={styles.link}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <p className={styles.copy}>
        © {new Date().getFullYear()} ARS DESIGN — Nice, Gambetta st. 4
      </p>
    </div>
  </footer>
);

export default Footer;
