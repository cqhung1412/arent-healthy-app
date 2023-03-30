import styles from './hex.module.css';
import KnifeIcon from '../../assets/svg/icon_knife.svg';

/* eslint-disable-next-line */
export interface HexProps {}

export function Hex(props: HexProps) {
  return (
    <span className={styles['container']}>
      <img className={styles['icon']} src={KnifeIcon} alt='icon' />
      <div className={styles['text']}>Morning</div>
    </span>
  );
}

export default Hex;
