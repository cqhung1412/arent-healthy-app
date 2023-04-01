import styles from './record.module.css';

/* eslint-disable-next-line */
export interface RecordProps {
	imagePath: string;
	mainText: string;
	buttonText: string;
}

export function Record({ imagePath, mainText, buttonText }: RecordProps) {
	return (
		<div className={styles['container']}>
			<div className={styles['outer-line']}>
				<img className={styles['image']} src={imagePath} alt="placeholder" />
				<div className={styles['inner']}>
					<div className={styles['main-text']}>{mainText}</div>
					<button className={styles['button']}>{buttonText}</button>
				</div>
			</div>
		</div>
	);
}

export default Record;
