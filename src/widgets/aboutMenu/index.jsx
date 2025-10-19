import { useState, useEffect } from "react";
import styles from "./styles.module.scss";

const menuItems = ["About us", "Portfolio", "Services", "Contact us", "News"];
const sections = {
  "About us": "about",
  "Portfolio": "portfolio",
  "Services": "services",
  "Contact us": "contact",
  "News": "news"
};

const AboutMenu = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const sectionIds = Object.values(sections);
    const sectionElements = sectionIds.map((id) => document.getElementById(id));

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5 // 50% видимости секции
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionIds.indexOf(entry.target.id);
          if (index !== -1) setActiveIndex(index);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sectionElements.forEach((el) => el && observer.observe(el));

    return () => {
      sectionElements.forEach((el) => el && observer.unobserve(el));
    };
  }, []);

  const handleClick = (index, item) => {
    const sectionId = sections[item];
    if (sectionId) {
      const section = document.getElementById(sectionId);
      section?.scrollIntoView({ behavior: "smooth" });
      setActiveIndex(index); // обновляем активный пункт при клике
    }
  };

  return (
    <div className={styles.aboutMenu}>
      <ul className={styles.menuList}>
        {menuItems.map((item, index) => (
          <li
            key={item}
            className={`${styles.menuItem} ${activeIndex === index ? styles.active : ""}`}
            onClick={() => handleClick(index, item)}
          >
            <span className={styles.line}></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutMenu;
