import styles from './photo.module.css';

/* eslint-disable-next-line */
export interface PhotoProps {}

export function Photo(props: PhotoProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Photo!</h1>
    </div>
  );
}

export default Photo;
