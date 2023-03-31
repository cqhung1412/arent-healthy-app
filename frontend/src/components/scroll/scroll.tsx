import styles from './scroll.module.css';

/* eslint-disable-next-line */
export interface ScrollProps {}

export function Scroll(props: ScrollProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Scroll!</h1>
    </div>
  );
}

export default Scroll;
