import React, { useEffect, useState } from 'react';
import styles from './date-achievement.module.css';

import PlaceholderImage from '../../assets/images/d01.png';
import Pie from '../pie/pie';

/* eslint-disable-next-line */
export interface DateAchievementProps {}

export interface DateAchievementData {
	date: string;
	percentage: number;
}

export function DateAchievement(props: DateAchievementProps) {
	const [data, setData] = useState<DateAchievementData | null>(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetch('/api/date-achievement')
			.then((res) => res.json())
			.then((data) => setData(data as DateAchievementData))
			.catch((err) => setData(null))
			.finally(() => setLoading(false));
	}, []);

	return (
		<div className={styles['container']}>
			<img
				className={styles['image']}
				src={PlaceholderImage}
				alt="placeholder"
			/>
			<div className={styles['pie']}>
				<Pie
					extra={data?.date || '05/21'}
					percentage={data?.percentage || 75}
					colour={'salmon'}
				/>
			</div>
		</div>
	);
}

export default DateAchievement;
