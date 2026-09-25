import { useCallback, useEffect, useRef, useState } from 'react';
import arrow from '../../assets/icons/Subtract.svg';
import corridor from '../../assets/images/portfolio/corridor.jpg';
import bathroom from '../../assets/images/portfolio/bathroom.jpg';
import ceilingMoldings from '../../assets/images/portfolio/ceiling-moldings.jpg';
import marbleFloor from '../../assets/images/portfolio/marble-floor.jpg';
import demolition from '../../assets/images/portfolio/demolition.jpg';
import drywallCeiling from '../../assets/images/portfolio/drywall-ceiling.jpg';
import styles from './styles.module.scss';

// Чтобы добавить фото — положите его в src/assets/images/portfolio,
// импортируйте выше и добавьте слайд в этот массив.
const slides = [
  { image: corridor, title: 'Коридор с лепниной', meta: 'Отделка стен и потолка' },
  { image: bathroom, title: 'Санузел под мрамор', meta: 'Облицовка крупноформатной плиткой' },
  { image: ceilingMoldings, title: 'Потолок с молдингами', meta: 'Лепной декор и розетка' },
  { image: marbleFloor, title: 'Пол под мрамор', meta: 'Укладка керамогранита' },
  { image: demolition, title: 'Демонтаж', meta: 'Подготовка помещения к ремонту' },
  { image: drywallCeiling, title: 'Потолок из гипсокартона', meta: 'Монтаж и разводка электрики' },
];

const AUTOPLAY_DELAY = 6000;

const Portfolio = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(null);

  const goPrev = useCallback(
    () => setIndex((i) => (i - 1 + slides.length) % slides.length),
    []
  );
  const goNext = useCallback(() => setIndex((i) => (i + 1) % slides.length), []);

  useEffect(() => {
    if (paused) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const timer = setInterval(goNext, AUTOPLAY_DELAY);
    return () => clearInterval(timer);
  }, [paused, goNext]);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goPrev();
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      goNext();
    }
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) {
      if (delta < 0) goNext();
      else goPrev();
    }
    touchStartX.current = null;
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.carousel}
        role="region"
        aria-roledescription="carousel"
        aria-label="Portfolio"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className={styles.viewport}>
          <div
            className={styles.track}
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((slide, i) => (
              <figure className={styles.slide} key={slide.title} aria-hidden={i !== index}>
                <img
                  className={styles.image}
                  src={slide.image}
                  alt={slide.title}
                  loading={i === 0 ? 'eager' : 'lazy'}
                />
                <figcaption className={styles.caption}>
                  <span className={styles.slideTitle}>{slide.title}</span>
                  <span className={styles.slideMeta}>{slide.meta}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          <button
            type="button"
            className={`${styles.nav} ${styles.prev}`}
            onClick={goPrev}
            aria-label="Previous project"
          >
            <img className={styles.navIcon} src={arrow} alt="" />
          </button>
          <button
            type="button"
            className={`${styles.nav} ${styles.next}`}
            onClick={goNext}
            aria-label="Next project"
          >
            <img className={styles.navIcon} src={arrow} alt="" />
          </button>
        </div>

        <div className={styles.dots}>
          {slides.map((slide, i) => (
            <button
              type="button"
              key={slide.title}
              className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to ${slide.title}`}
              aria-current={i === index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
