import styles from './column.module.css';
import ImagePlaceholder from '../../assets/images/column-1.png';

/* eslint-disable-next-line */
export interface ColumnProps {}

export function Column(props: ColumnProps) {
  return (
    <div className={styles['container']}>
      <img
        className={styles['image']}
        src={ImagePlaceholder}
        alt="placeholder"
      />
      <div className={styles['image-text-box']}>
        <div className={styles['image-text']}>2021.05.17 23:25</div>
      </div>
      <div className={styles['main-text-box']}>
        <div className={styles['main-text']}>
          魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…
        </div>
      </div>
      <div className={styles['hashtag-box']}>
        <div className={styles['hashtag']}>
          #魚料理  #和食  #DHA
        </div>
      </div>
    </div>
  );
}

export default Column;
