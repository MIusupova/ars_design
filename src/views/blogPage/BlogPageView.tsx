'use client';

import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../widgets/footer';
import NavMenu from '../../widgets/navMenu';
import RectangleInfo from '../../widgets/restangleInfo';
import { formatPostDate, posts } from '../../shared/blog/posts';
import { useLanguage } from '../../shared/i18n/LanguageContext';
import styles from './styles.module.scss';

const BlogPageView = () => {
  const { t, lang } = useLanguage();
  const base = lang === 'ru' ? '/ru/blog' : '/blog';

  return (
    <div className={styles.wrapper}>
      <NavMenu page="blog" />
      <RectangleInfo text={t.blog.eyebrow} text2={t.blog.label} />

      <main className={styles.main}>
        {posts.length === 0 ? (
          <p className={styles.empty}>{t.blog.empty}</p>
        ) : (
          <ul className={styles.grid}>
            {posts.map((post, i) => {
              const text = post.text[lang];
              return (
                <li key={post.slug}>
                  <Link className={styles.card} href={`${base}/${post.slug}`}>
                    <div className={styles.cover}>
                      <Image
                        src={post.cover}
                        alt=""
                        fill
                        sizes="(max-width: 780px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className={styles.coverImg}
                        priority={i === 0}
                      />
                    </div>
                    <div className={styles.body}>
                      <time className={styles.date} dateTime={post.date}>
                        {formatPostDate(post.date, lang)}
                      </time>
                      <h2 className={styles.title}>{text.title}</h2>
                      <p className={styles.excerpt}>{text.excerpt}</p>
                      <span className={styles.more}>{t.blog.readMore} →</span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </main>

      <Footer page="blog" />
    </div>
  );
};

export default BlogPageView;
