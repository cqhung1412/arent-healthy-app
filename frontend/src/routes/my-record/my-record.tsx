import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import MainLayout from '../../components/main-layout/main-layout';
import DiaryList from '../../components/diary-list/diary-list';
import styles from './my-record.module.css';
import Record from '../../components/record/record';
import type { Composition } from '../homepage/homepage';

export const RECORD_CARD = [
	{
		image: '/images/MyRecommend-1.png',
		header: 'BODY RECORD',
		subText: '自分のカラダの記録',
	},
	{
		image: '/images/MyRecommend-2.png',
		header: 'MY EXCERCISE',
		subText: '自分の運動の記録',
	},
	{
		image: '/images/MyRecommend-3.png',
		header: 'MY DIARY',
		subText: '自分の日記',
	},
];

const myRecordLineChartData = {
	labels: [
		'6月',
		'7月',
		'8月',
		'9月',
		'10月',
		'11月',
		'12月',
		'1月',
		'2月',
		'3月',
		'4月',
		'5月',
	],
	datasets: [
		{
			label: 'Body Fat',
			data: [16, 15, 14, 12, 14, 11, 10, 8, 9, 7, 6, 5],
			borderColor: '#FFCC21',
			pointBackgroundColor: '#FFCC21',
		},
		{
			label: 'Weight',
			data: [16, 14, 15, 12, 13, 14, 12, 10, 9, 9, 8, 6],
			borderColor: '#8FE9D0',
			pointBackgroundColor: '#8FE9D0',
		},
	],
};

export const lineChartOptions = {
	responsive: true,
	plugins: {
		legend: {
			display: false,
		},
	},
	layout: {
		padding: {
			left: 50,
			right: 50,
			top: 10,
			bottom: 10,
		},
	},
	scales: {
		x: {
			ticks: {
				color: 'white',
				font: {
					size: 10,
					weight: '300',
				},
			},
			grid: {
				drawBorder: false,
				lineWidth: 0.7,
				color: '#777777',
			},
		},
		y: {
			display: false,
			grid: {
				display: false,
			},
		},
	},
	maintainAspectRatio: false,
};

const buttons = [
	{ text: '日', active: false },
	{ text: '週', active: false },
	{ text: '月', active: false },
	{ text: '年', active: true },
];

type Exercise = {
	id: number;
	name: string;
	kcal: number;
	minutes: number;
};

type DiaryEntry = {
	id: number;
	entry: string;
	created_at: string;
};

/* eslint-disable-next-line */
export interface MyRecordProps {}

export function MyRecord(props: MyRecordProps) {
	const [compositions, setCompositions] = useState<Composition[]>([]);
	const [exercises, setExercises] = useState<Exercise[]>([]);
	const [diaryEntries, setDiaryEntries] = useState<DiaryEntry[]>([]);

	useEffect(() => {
		if (compositions.length > 0) {
			myRecordLineChartData.datasets[0].data = compositions.map(
				(composition) => composition.body_fat
			);
			myRecordLineChartData.datasets[1].data = compositions.map(
				(composition) => composition.weight
			);
			myRecordLineChartData.labels = compositions.map((composition) => {
				const date = new Date(composition.monthstamp);
				return `${date.getMonth() + 1}月`;
			});
		}
	}, [compositions]);

	useEffect(() => {
		fetch('/api/user/login', {
			method: 'POST',
			body: JSON.stringify({
				email: 'cqhung1412@gmail.com',
				password: 'password',
			}),
		})
			.then((res) => res.json())
			.then((res) => {
				localStorage.setItem('access_token', res.access_token);
				return res.access_token;
			})
			.then((token) => getData(token))
			.catch((err) => console.log(err));
	}, []);

	const getData = (token: string) => {
		const compositionPromise = fetch('/api/body-composition', {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		const exercisePromise = fetch('/api/exercises', {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		const diaryPromise = fetch('/api/diary-entries', {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		Promise.all([compositionPromise, exercisePromise, diaryPromise])
			.then((res) => Promise.all(res.map((r) => r.json())))
			.then((res) => {
				setCompositions(res[0]);
				setExercises(res[1] || []);
				setDiaryEntries(res[2] || []);
			})
			.catch((err) => console.log(err));
	};

	ChartJS.register(
		CategoryScale,
		LinearScale,
		PointElement,
		LineElement,
		Title,
		Tooltip,
		Legend
	);

	return (
		<MainLayout>
			<div className={styles['card-container']}>
				{RECORD_CARD.map((card, index) => (
					<Record
						key={index}
						imagePath={card.image}
						mainText={card.header}
						buttonText={card.subText}
					/>
				))}
			</div>
			<div className={styles['chart-container']}>
				<div className={styles['chart-header']}>
					<div className={styles['chart-name']}>
						BODY <br /> RECORD
					</div>
					<div className={styles['date']}>2021.05.21</div>
				</div>
				<div>
					<Line
						height="200px"
						options={lineChartOptions}
						data={myRecordLineChartData}
					/>
				</div>
				<div className={styles['button-container']}>
					{buttons.map((button, index) => (
						<button
							key={`button-${index}`}
							className={`${styles['buttons']} ${
								button.active && styles['active']
							}`}
						>
							{button.text}
						</button>
					))}
				</div>
			</div>
			<div className={styles['chart-container']}>
				<div className={styles['chart-header']}>
					<div className={styles['chart-name']}>
						MY <br /> EXERCISE
					</div>
					<div className={styles['date']}>2021.05.21</div>
				</div>
				<div className={styles['data-container']}>
					{exercises.map((item, index) => (
						<div className={styles['data-item']} key={`data-${index}`}>
							<li>
								<div className={styles['name']}>
									{item.name}
									<br />
									<span className={styles['kcal']}>{item.kcal}kcal</span>
								</div>
							</li>
							<div className={styles['duration']}>{item.minutes} min</div>
						</div>
					))}
				</div>
			</div>
			<div className={styles['my-diary-container']}>
				<div className={styles['name']}>MY DIARY</div>
				<div className={styles['data-container']}>
					{diaryEntries.map((item, index) => (
						<DiaryList key={index} />
					))}
				</div>
			</div>
			<div className={styles['bottom-button-container']}>
				<button className={styles['bottom-button']}>コラムをもっと見る</button>
			</div>
		</MainLayout>
	);
}

export default MyRecord;
