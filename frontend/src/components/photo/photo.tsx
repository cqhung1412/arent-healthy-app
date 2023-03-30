import styles from './photo.module.css';

/* eslint-disable-next-line */
export interface PhotoProps {
  imageName: string;
  imageSpec: string;
}

export function Photo(props: PhotoProps) {
  return (
    <div className={styles['container']}>
      <img
        className={styles['image']}
        src={props.imageName}
        alt={`record-${props.imageName}`}
      />
      <div className={styles['text']}>{props.imageSpec}</div>
    </div>
  );
}

export default Photo;
