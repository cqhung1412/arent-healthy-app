import styles from './button.module.css';

/* eslint-disable-next-line */
export interface ButtonProps {}

export function Button(props: ButtonProps) {
  return (
    <button className={styles['container']}>
      <div className={styles['container-box']}>
        <div className={styles['text']}>記録をもっと見る</div>
      </div>
    </button>
  );
}

export default Button;
