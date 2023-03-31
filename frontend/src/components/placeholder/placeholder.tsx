import styles from './placeholder.module.css';

/* eslint-disable-next-line */
export interface PlaceholderProps {}

export function Placeholder(props: PlaceholderProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Placeholder!</h1>
    </div>
  );
}

export default Placeholder;
