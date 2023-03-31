import styles from './record.module.css';
import ImagePlaceholder from '../../assets/images/MyRecommend-1.png';
/* eslint-disable-next-line */
export interface RecordProps {}

export function Record(props: RecordProps) {
  return (
    <div className={styles['container']}>
      <div className={styles['outer-line']}>
        <img
          className={styles['image']}
          src={ImagePlaceholder}
          alt="placeholder"
        />
        <div className={styles['main-text']}>BODY RECORD</div>
        <button className={styles['button']}>自分のカラダの記録</button>
      </div>
    </div>
  );
}

export default Record;
