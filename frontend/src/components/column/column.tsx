import styles from './column.module.css';

/* eslint-disable-next-line */
export interface ColumnProps {}

export function Column(props: ColumnProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Column!</h1>
    </div>
  );
}

export default Column;
