import styles from './styles.module.scss';

const posts = [
  {
    date: '2026-04-18',
    label: '18 April 2026',
    tag: 'Project',
    title: 'Villa Azur handed over to the client',
    text: 'Eight months of work: 420 m² of living space, a rooftop terrace and a panoramic view of the bay.',
  },
  {
    date: '2026-03-02',
    label: '02 March 2026',
    tag: 'Studio',
    title: 'New office on Gambetta street',
    text: 'We have moved to a larger studio — now with a materials library open to all our clients.',
  },
  {
    date: '2026-01-25',
    label: '25 January 2026',
    tag: 'Award',
    title: 'Shortlisted at Cote d’Azur Design Week',
    text: 'The Pavillon Mer project made it to the final in the private architecture category.',
  },
];

const News = () => (
  <div className={styles.wrapper}>
    <ul className={styles.grid}>
      {posts.map((post) => (
        <li className={styles.card} key={post.date}>
          <div className={styles.meta}>
            <time className={styles.date} dateTime={post.date}>
              {post.label}
            </time>
            <span className={styles.tag}>{post.tag}</span>
          </div>
          <h3 className={styles.title}>{post.title}</h3>
          <p className={styles.text}>{post.text}</p>
          <span className={styles.more}>Read more</span>
        </li>
      ))}
    </ul>
  </div>
);

export default News;
