'use client';

import { useState } from 'react';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import { useLanguage } from '../../shared/i18n/LanguageContext';
import zal1 from '../../assets/images/portfolio/zal1.jpg';
import zal2 from '../../assets/images/portfolio/zal2.jpg';
import zal3 from '../../assets/images/portfolio/zal3.jpg';
import zal4 from '../../assets/images/portfolio/zal4.jpg';
import vanna1 from '../../assets/images/portfolio/vanna1.jpg';
import vanna2 from '../../assets/images/portfolio/vanna2.jpg';
import vanna3 from '../../assets/images/portfolio/vanna3.jpg';
import tual1 from '../../assets/images/portfolio/tual1.jpg';
import tual2 from '../../assets/images/portfolio/tual2.jpg';
import salon1 from '../../assets/images/portfolio/salon1.jpg';
import vvan1 from '../../assets/images/portfolio/vvan1.jpg';
import vvan2 from '../../assets/images/portfolio/vvan2.jpg';

import styles from './styles.module.scss';

type Shape = 'wide' | 'tall';

type PortfolioItem = {
  images: StaticImageData[];
  shape: Shape;
  mobileOrder: number;
  key: string;
};

// Каждая плитка — один ремонт, а images — его фотографии (лучше 3).
// Чтобы добавить фото, положите его в src/assets/images/portfolio,
// импортируйте выше и допишите в массив images нужного ремонта.
// Стрелки и точки появляются сами, когда в плитке больше одного фото.
//
// shape: 'wide' — плитка горизонтальная, 'tall' — вертикальная.
// mobileOrder — порядок на телефонах, где ряды складываются в две колонки:
// вертикальные плитки встают парами, горизонтальные занимают всю ширину.
// key — ссылка на перевод названия и описания в src/shared/i18n/translations.ts
const rows: PortfolioItem[][] = [
  [
    { images: [zal1, zal2, zal3, zal4], shape: 'wide', mobileOrder: 1, key: 'livingRoom' },
    { images: [vvan1, vvan2], shape: 'tall', mobileOrder: 2, key: 'showerBathroom' },
    { images: [vanna3, vanna2, vanna1], shape: 'wide', mobileOrder: 4, key: 'marbleBathroom' },
  ],
  [
    { images: [salon1], shape: 'tall', mobileOrder: 3, key: 'reception' },
    { images: [tual1, tual2], shape: 'wide', mobileOrder: 5, key: 'toiletShower' },
  ],
];

const SWIPE_THRESHOLD = 40;

const Chevron = ({ direction }: { direction: 'prev' | 'next' }) => (
  <svg
    className={direction === 'prev' ? styles.chevronPrev : undefined}
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    aria-hidden="true"
  >
    <path d="M5 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Tile = ({ item, number }: { item: PortfolioItem; number: number }) => {
  const { t } = useLanguage();
  const { title, meta } = t.portfolio.items[item.key];
  const [index, setIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const total = item.images.length;
  const multiple = total > 1;

  const go = (step: number) => setIndex((i) => (i + step + total) % total);

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(delta) > SWIPE_THRESHOLD) go(delta < 0 ? 1 : -1);
    setTouchStartX(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!multiple) return;
    if (e.key === 'ArrowLeft') go(-1);
    if (e.key === 'ArrowRight') go(1);
  };

  return (
    <figure
      className={`${styles.item} ${styles[item.shape]}`}
      style={{ '--m-order': item.mobileOrder } as React.CSSProperties}
      role={multiple ? 'group' : undefined}
      aria-roledescription={multiple ? 'carousel' : undefined}
      aria-label={multiple ? title : undefined}
      onKeyDown={handleKeyDown}
    >
      <div
        className={styles.track}
        style={{ transform: `translateX(-${index * 100}%)` }}
        onTouchStart={multiple ? (e) => setTouchStartX(e.touches[0].clientX) : undefined}
        onTouchEnd={multiple ? handleTouchEnd : undefined}
      >
        {item.images.map((src, i) => (
          <div className={styles.slide} key={src.src}>
            <Image
              className={styles.image}
              src={src}
              alt={t.portfolio.photoAlt(title, i + 1, total)}
              fill
              sizes="(max-width: 780px) 50vw, 480px"
              aria-hidden={i !== index}
            />
          </div>
        ))}
      </div>

      <figcaption className={styles.caption}>
        <span className={styles.number}>{String(number).padStart(2, '0')}</span>
        <span className={styles.itemTitle}>{title}</span>
        <span className={styles.itemMeta}>{meta}</span>
      </figcaption>

      {multiple && (
        <>
          <button
            type="button"
            className={`${styles.arrow} ${styles.arrowPrev}`}
            onClick={() => go(-1)}
            aria-label={t.portfolio.prevAria}
          >
            <Chevron direction="prev" />
          </button>
          <button
            type="button"
            className={`${styles.arrow} ${styles.arrowNext}`}
            onClick={() => go(1)}
            aria-label={t.portfolio.nextAria}
          >
            <Chevron direction="next" />
          </button>

          <div className={styles.dots}>
            {item.images.map((src, i) => (
              <button
                type="button"
                className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
                onClick={() => setIndex(i)}
                aria-label={t.portfolio.photoAriaLabel(i + 1, total)}
                aria-current={i === index}
                key={src.src}
              />
            ))}
          </div>
        </>
      )}
    </figure>
  );
};

const itemNumbers = new Map<string, number>();
rows.flat().forEach((item, i) => itemNumbers.set(item.key, i + 1));

const Portfolio = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.gallery}>
        {rows.map((row, rowIndex) => (
          <div className={`${styles.row} ${rowIndex === 0 ? styles.rowA : styles.rowB}`} key={rowIndex}>
            {row.map((item) => (
              <Tile item={item} number={itemNumbers.get(item.key)!} key={item.key} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
