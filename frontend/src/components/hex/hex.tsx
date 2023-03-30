import styles from './hex.module.css';

/* eslint-disable-next-line */
export interface HexProps {}

export function Hex(props: HexProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Hex!</h1>
    </div>
  );
}

export default Hex;
