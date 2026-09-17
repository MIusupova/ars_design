import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import logo from '../../assets/icons/logo.svg';

const AboutUs = () => (
  <div className={styles.wrapper}>
    <div className={styles.aboutUs}>
      <div className={styles.aboutIcon}>
        <Link to="/">
          <img className={styles.img} src={logo} alt="Logo" />
        </Link>
      </div>
      <div className={styles.aboutText}>ARS DESIGN — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus ornare ex, nec euismod neque blandit eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed lobortis neque, a commodo nunc. Maecenas at rutrum justo. Ut ac leo neque.</div>
    </div>
  </div>
);

export default AboutUs;
