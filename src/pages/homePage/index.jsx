import AboutUs from "../../widgets/aboutUs";
import Header from "../../widgets/header";
import RectangleInfo from "../../widgets/restangleInfo";
import styles from './styles.module.scss';
import ContactSection from "../../widgets/сontactSection";


const HomePage = () => (
  <div className={styles.wrapper}>
    <Header/>
    <RectangleInfo text="our story" text2=" // ABOUT US" />
    <AboutUs/>
    <RectangleInfo text="where to find us" text2=" // CONTACT US" />
    <ContactSection/>
    
  </div>
);

export default HomePage;
