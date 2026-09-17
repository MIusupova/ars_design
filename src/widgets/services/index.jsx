import styles from './styles.module.scss';

const services = [
  {
    number: '01',
    title: 'Architectural design',
    text: 'Concept, working drawings and permits — a complete package for private houses and commercial buildings.',
  },
  {
    number: '02',
    title: 'Interior design',
    text: 'Layouts, 3D visualisation and material selection, from the first sketch to the finished interior.',
  },
  {
    number: '03',
    title: 'Construction',
    text: 'Turnkey construction with our own crews, fixed estimates and clear deadlines at every stage.',
  },
  {
    number: '04',
    title: 'Renovation',
    text: 'Full and partial renovation of apartments, villas and offices with engineering systems included.',
  },
  {
    number: '05',
    title: 'Technical supervision',
    text: 'Independent quality control of works, materials and budget on sites built by other contractors.',
  },
  {
    number: '06',
    title: 'Landscape',
    text: 'Terraces, pools and gardens designed as one whole with the architecture of the house.',
  },
];

const Services = () => (
  <div className={styles.wrapper}>
    <ul className={styles.grid}>
      {services.map((service) => (
        <li className={styles.card} key={service.number}>
          <span className={styles.number}>{service.number}</span>
          <h3 className={styles.title}>{service.title}</h3>
          <p className={styles.text}>{service.text}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default Services;
