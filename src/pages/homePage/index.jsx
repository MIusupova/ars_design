import AboutUs from "../../widgets/aboutUs";
import Footer from "../../widgets/footer";
import Header from "../../widgets/header";
import NavMenu from "../../widgets/navMenu";
import News from "../../widgets/news";
import Portfolio from "../../widgets/portfolio";
import RectangleInfo from "../../widgets/restangleInfo";
import Services from "../../widgets/services";
import styles from './styles.module.scss';
import ContactSection from "../../widgets/сontactSection";


const HomePage = () => (
  <div className={styles.wrapper}>
    <NavMenu/>
    <Header/>

    <section id="about" className={styles.section}>
      <RectangleInfo text="наша история" text2=" // О НАС" />
      <AboutUs/>
    </section>

    <section id="portfolio" className={styles.section}>
      <RectangleInfo text="наши работы" text2=" // ПОРТФОЛИО" />
      <Portfolio/>
    </section>

    <section id="services" className={styles.section}>
      <RectangleInfo text="что мы делаем" text2=" // УСЛУГИ" />
      <Services/>
    </section>

    <section id="contact" className={styles.section}>
      <RectangleInfo text="где нас найти" text2=" // КОНТАКТЫ" />
      <ContactSection/>
    </section>

    <section id="news" className={styles.section}>
      <RectangleInfo text="что нового" text2=" // НОВОСТИ" />
      <News/>
    </section>

    <Footer/>
  </div>
);

export default HomePage;
