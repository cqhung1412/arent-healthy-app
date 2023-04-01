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
					weight: 300,
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

const exerciseItem = {
	name: '家事全般（立位・軽い）',
	kcal: 26,
	duration: '10 min',
};

const diaryItem = {
	date: '2021.05.21',
	hour: '23:25',
	name: '私の日記の記録が一部表示されます。',
	description:
		'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
};

const buttons = [
	{ text: '日', active: false },
	{ text: '週', active: false },
	{ text: '月', active: false },
	{ text: '年', active: true },
];

/* eslint-disable-next-line */
export interface MyRecordProps {}

export function MyRecord(props: MyRecordProps) {
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
					{Array.from({ length: 20 }, () => exerciseItem).map((item, index) => (
						<div className={styles['data-item']} key={`data-${index}`}>
							<li>
								<div className={styles['name']}>
									{item.name}
									<br />
									<span className={styles['kcal']}>{item.kcal}kcal</span>
								</div>
							</li>
							<div className={styles['duration']}>{item.duration}</div>
						</div>
					))}
				</div>
			</div>
			<div className={styles['my-diary-container']}>
				<div className={styles['name']}>MY DIARY</div>
				<div className={styles['data-container']}>
					{Array.from({ length: 8 }, () => diaryItem).map((item, index) => (
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
