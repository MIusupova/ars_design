import styles from './styles.module.scss';

type RectangleInfoProps = {
  text: string;
  text2: string;
};

const RectangleInfo = ({ text, text2 }: RectangleInfoProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.rectangleInfo}>
        <h2 className={styles.title}>{text}</h2>
        <div className={styles.subtitle}>{text2}</div>
      </div>
    </div>
  );
};

export default RectangleInfo;
