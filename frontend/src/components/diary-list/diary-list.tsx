import styles from './diary-list.module.css';

/* eslint-disable-next-line */
export interface DiaryListProps {}

export function DiaryList(props: DiaryListProps) {
  return (
    <div className={styles['container']}>
      <div className={styles['box']}>
        <div className={styles['current-time-box']}>
          <div className={styles['current-time']}>2021.05.21 23:25</div>
        </div>
        <div className={styles['memory-box']}>
          <div className={styles['memory']}>
            私の日記の記録が一部表示されます。
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiaryList;
