import AboutMenu from '../aboutMenu';
import ContactAdress from '../../assets/icons/cotactAdress.svg';
import ContactPhone from '../../assets/icons/contactPhone.svg';
import ContactMail from '../../assets/icons/contactMail.svg';
import styles from './styles.module.scss';

const ContactSection = () => (
  <div id="contact" className={styles.wrapper}>
    <section className={styles.section}>
      {/* Left side — contact info */}
      <div className={styles.infoBlock}>
        <div className={styles.infoItem}>
          <div className={styles.infoItemContent}> 
            <img className={styles.img} src={ContactAdress} alt="Logo" />
          <p className={styles.text}>Nice, Gambetta st. 4</p>
        </div>
        </div>
       
        <div className={styles.infoItem}>
          <a href="tel:+33749566614" className={styles.infoItemContent}>
          <img className={styles.img} src={ContactPhone} alt="Logo" />
          +33 749 56 66 14
          </a>
        </div>
        <div className={styles.infoItem}>
          <a href="mailto:arsdesign06.fr@gmail.com" className={styles.infoItemContent}>
          <img className={styles.img} src={ContactMail} alt="Logo" />
          arsdesign06.fr@gmail.com
          </a>
        </div>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className={styles.formBlock}
      >
        <input
          type="text"
          placeholder="First name"
          className={styles.input}
        />
        <input
          type="tel"
          placeholder="+38 (0__) ___ __ __"
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          CALL ME
        </button>
      </form>
      <AboutMenu/>
    </section>
    
  </div>
);

export default ContactSection;