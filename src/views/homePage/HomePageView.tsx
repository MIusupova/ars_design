'use client';

import AboutUs from '../../widgets/aboutUs';
import Footer from '../../widgets/footer';
import Header from '../../widgets/header';
import NavMenu from '../../widgets/navMenu';
import Portfolio from '../../widgets/portfolio';
import RectangleInfo from '../../widgets/restangleInfo';
import Services from '../../widgets/services';
import ContactSection from '../../widgets/contactSection';
import { useLanguage } from '../../shared/i18n/LanguageContext';
import styles from './styles.module.scss';

const HomePageView = () => {
  const { t } = useLanguage();

  return (
    <div className={styles.wrapper}>
      <NavMenu />
      <Header />

      <section id="about" className={styles.section}>
        <RectangleInfo text={t.sections.about.label} />
        <AboutUs />
      </section>

      <section id="portfolio" className={styles.section}>
        <RectangleInfo text={t.sections.portfolio.label} />
        <Portfolio />
      </section>

      <section id="services" className={styles.section}>
        <RectangleInfo text={t.sections.services.label} />
        <Services />
      </section>

      <section id="contact" className={styles.section}>
        <RectangleInfo text={t.sections.contact.label} />
        <ContactSection />
      </section>

      <Footer />
    </div>
  );
};

export default HomePageView;
