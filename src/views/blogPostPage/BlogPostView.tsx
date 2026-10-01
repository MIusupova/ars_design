'use client';

import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../widgets/footer';
import NavMenu from '../../widgets/navMenu';
import { formatPostDate } from '../../shared/blog/posts';
import type { Post } from '../../shared/blog/posts';
import { useLanguage } from '../../shared/i18n/LanguageContext';
import styles from './styles.module.scss';

const BlogPostView = ({ post }: { post: Post }) => {
  const { t, lang } = useLanguage();
  const text = post.text[lang];

  return (
    <div className={styles.wrapper}>
      <NavMenu page="blog" />

      <main className={styles.main}>
        <Link className={styles.back} href={lang === 'ru' ? '/ru/blog' : '/blog'}>
          ← {t.blog.back}
        </Link>

        <article className={styles.article}>
          <header className={styles.head}>
            <time className={styles.date} dateTime={post.date}>
              {formatPostDate(post.date, lang)}
            </time>
            <h1 className={styles.title}>{text.title}</h1>
          </header>

          <div className={styles.cover}>
            <Image
              src={post.cover}
              alt={text.title}
              fill
              sizes="(max-width: 860px) 100vw, 860px"
              className={styles.coverImg}
              priority
            />
          </div>

          <div className={styles.content}>
            {text.blocks.map((block, i) => (
              <section key={i}>
                {block.heading && <h2 className={styles.heading}>{block.heading}</h2>}
                {block.paragraphs.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </section>
            ))}
          </div>
        </article>
      </main>

      <Footer page="blog" />
    </div>
  );
};

export default BlogPostView;
