import styles from './styles.module.scss';

const services = [
  {
    number: '01',
    title: 'Ремонт квартир и домов',
    text: 'Полный ремонт помещений — от подготовки стен до финальной отделки.',
  },
  {
    number: '02',
    title: 'Отделка стен и потолков',
    text: 'Штукатурка, шпаклёвка, покраска и другие работы для аккуратного результата.',
  },
  {
    number: '03',
    title: 'Напольные покрытия',
    text: 'Укладка плитки, ламината, паркета и других напольных материалов.',
  },
  {
    number: '04',
    title: 'Ванная и кухня',
    text: 'Ремонт и отделка помещений с учётом особенностей влажных зон.',
  },
  {
    number: '05',
    title: 'Электрика и освещение',
    text: 'Монтаж розеток, выключателей, освещения и необходимых электрических систем.',
  },
  {
    number: '06',
    title: 'Ремонт под ключ',
    text: 'Берём на себя весь комплекс внутренних работ, чтобы вам не пришлось искать разных специалистов.',
  },
];

const Services = () => (
  <div className={styles.wrapper}>
    <ul className={styles.grid}>
      {services.map((service) => (
        <li className={styles.card} key={service.number}>
          <span className={styles.ghost} aria-hidden="true">{service.number}</span>
          <span className={styles.number}>{service.number}</span>
          <h3 className={styles.title}>{service.title}</h3>
          <p className={styles.text}>{service.text}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default Services;
