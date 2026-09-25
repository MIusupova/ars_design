import styles from './styles.module.scss';

const principles = ['Качество', 'Точность', 'Внимание к деталям'];

const AboutUs = () => (
  <div className={styles.wrapper}>
    <div className={styles.grid}>
      <div className={styles.textCol}>
        <span className={styles.eyebrow}>ARS DESIGN</span>
        <p className={styles.lead}>
          Мы создаём качественные и продуманные интерьеры, уделяя внимание каждой детали.
        </p>
        <p className={styles.body}>
          Наша команда выполняет внутренние ремонтные и отделочные работы для квартир, домов
          и коммерческих помещений. Работаем аккуратно, соблюдаем сроки и стремимся
          к результату, который будет радовать вас долгие годы.
        </p>
      </div>

      <aside className={styles.principles}>
        <span className={styles.principlesCaption}>основа нашей работы</span>
        <ul className={styles.principleList}>
          {principles.map((item) => (
            <li className={styles.principle} key={item}>
              {item}
            </li>
          ))}
        </ul>
      </aside>
    </div>
  </div>
);

export default AboutUs;
