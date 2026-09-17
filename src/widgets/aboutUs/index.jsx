import styles from './styles.module.scss';

const AboutUs = () => (
  <div className={styles.wrapper}>
    <div className={styles.content}>
      <p className={styles.lead}>
        <span className={styles.accent}>ARS DESIGN</span> — мы создаём качественные
        и продуманные интерьеры, уделяя внимание каждой детали.
      </p>
      <p className={styles.body}>
        Наша команда выполняет внутренние ремонтные и отделочные работы для квартир, домов
        и коммерческих помещений. Работаем аккуратно, соблюдаем сроки и стремимся
        к результату, который будет радовать вас долгие годы.
      </p>
      <p className={styles.closing}>
        Качество, точность и внимание к деталям — основа нашей работы.
      </p>
    </div>
  </div>
);

export default AboutUs;
