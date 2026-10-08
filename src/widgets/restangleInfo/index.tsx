import styles from './styles.module.scss';

type RectangleInfoProps = {
  text: string;
};

const RectangleInfo = ({ text }: RectangleInfoProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.rectangleInfo}>
        <div className={styles.subtitle}>{text}</div>
      </div>
    </div>
  );
};

export default RectangleInfo;
