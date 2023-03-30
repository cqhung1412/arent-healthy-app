import styles from './record.module.css';
import ImagePlaceholder from 'src/assets/images/m01.png';

/* eslint-disable-next-line */
export interface RecordProps {
  imageName?: string;
  imageSpec?: string;
}

export function Record(props: RecordProps) {
  console.log(ImagePlaceholder)
  return (
    <div className={styles['container']}>
      <img className={styles['image']} src={props.imageName} alt={`record-${props.imageName}`}/>
      <div className={styles['bottonLeft']}>{props.imageSpec}</div>
    </div>
  );
}

export default Record;
