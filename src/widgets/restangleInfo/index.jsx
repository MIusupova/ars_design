import styles from './styles.module.scss';

const RectangleInfo = ({ text, text2 }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.rectangleInfo}>
        <div className={styles.title}>{text}</div> 
        <div className={styles.subtitle}>{text2}</div>
      </div>
    </div>
  );
};

export default RectangleInfo;
