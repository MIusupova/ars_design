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
      <RectangleInfo text="our story" text2=" // ABOUT US" />
      <AboutUs/>
    </section>

    <section id="portfolio" className={styles.section}>
      <RectangleInfo text="our works" text2=" // PORTFOLIO" />
      <Portfolio/>
    </section>

    <section id="services" className={styles.section}>
      <RectangleInfo text="what we do" text2=" // SERVICES" />
      <Services/>
    </section>

    <section id="contact" className={styles.section}>
      <RectangleInfo text="where to find us" text2=" // CONTACT US" />
      <ContactSection/>
    </section>

    <section id="news" className={styles.section}>
      <RectangleInfo text="what's new" text2=" // NEWS" />
      <News/>
    </section>

    <Footer/>
  </div>
);

export default HomePage;
