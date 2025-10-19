import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import logo from '../../assets/icons/logo.svg';

import AboutMenu from '../aboutMenu';

const AboutUs = () => (
  <div id="about" className={styles.wrapper}>
    <div className={styles.aboutIcon}>
        <Link to="/">
       <img className={styles.img} src={logo} alt="Logo" />

      </Link>
        </div>
    <div className={styles.aboutUs}>
        <div className={styles.aboutText}>ARS DESIGN — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus ornare ex, nec euismod neque blandit eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed lobortis neque, a commodo nunc. Maecenas at rutrum justo. Ut ac leo neque.</div>
        <AboutMenu/>
    </div>

   
    
  </div>
);

export default AboutUs;
