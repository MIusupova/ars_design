import { useEffect, useRef, useState } from 'react';
import logo from '../../assets/icons/logo.svg';
import { navItems, scrollToSection } from '../../shared/config/navigation';
import styles from './styles.module.scss';

const NavMenu = () => {
  const [activeId, setActiveId] = useState(navItems[0].id);
  const [open, setOpen] = useState(false);
  const barRef = useRef(null);

  // Активный пункт: секция, пересекающая узкую полосу в середине экрана.
  // Так корректно подсвечиваются и высокие, и короткие секции.
  useEffect(() => {
    const sections = navItems
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Бургер: закрываем по Escape и по клику вне панели.
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const handlePointerDown = (e) => {
      if (barRef.current && !barRef.current.contains(e.target)) setOpen(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('pointerdown', handlePointerDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [open]);

  const handleClick = (id) => {
    setActiveId(id);
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <header className={styles.bar} ref={barRef}>
      <div className={styles.inner}>
        <button
          type="button"
          className={styles.brand}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
        >
          <img className={styles.brandLogo} src={logo} alt="ARS Design" />
        </button>

        <nav className={styles.nav} aria-label="Main">
          <ul className={styles.list}>
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  className={`${styles.link} ${activeId === item.id ? styles.active : ''}`}
                  onClick={() => handleClick(item.id)}
                  aria-current={activeId === item.id ? 'true' : undefined}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.lang}>UA / RU / EN</div>

        <button
          type="button"
          className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
        </button>
      </div>

      <nav
        className={`${styles.panel} ${open ? styles.panelOpen : ''}`}
        aria-label="Mobile"
        aria-hidden={!open}
      >
        <ul className={styles.panelList}>
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className={`${styles.panelLink} ${activeId === item.id ? styles.active : ''}`}
                onClick={() => handleClick(item.id)}
                tabIndex={open ? 0 : -1}
              >
                {item.label}
              </button>
            </li>
          ))}
          <li>
            <span className={styles.panelLang}>UA / RU / EN</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavMenu;
