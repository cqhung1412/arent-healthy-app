import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
	getPendingSelector,
	getUserSelector,
	getErrorSelector,
} from '../../redux/user/selectors';
import { fetchUser, login } from '../../redux/user/actions';

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
import DateAchievement from '../../components/date-achievement/date-achievement';
import MainLayout from '../../components/main-layout/main-layout';
import Photo from '../../components/photo/photo';

import styles from './homepage.module.css';

import IconKnife from '../../assets/svg/icon_knife.svg';
import IconCup from '../../assets/svg/icon_cup.svg';
import httpUtil from '../../utils/http.util';

const FOOD_MENU = [
	{ icon: IconKnife, text: 'Morning' },
	{ icon: IconKnife, text: 'Lunch' },
	{ icon: IconKnife, text: 'Dinner' },
	{ icon: IconCup, text: 'Snack' },
];
let mealData = [
	{
		image: 'images/m01.png',
		description: '05.21.Morning',
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

export type Composition = {
	id: number;
	monthstamp: string;
	weight: number;
	body_fat: number;
};

type Meal = {
	id: number;
	image_path: string;
	type: string;
	datestamp: string;
};

/* eslint-disable-next-line */
export interface HomepageProps {}

export function Homepage(props: HomepageProps) {
	const dispatch = useDispatch();
	const pending = useSelector(getPendingSelector);
	const user = useSelector(getUserSelector);
	const error = useSelector(getErrorSelector);

	const [compositions, setCompositions] = useState<Composition[]>([]);
	const [meals, setMeals] = useState<Meal[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		console.log('user updated: ', user);
		if (user?.id) {
			getData();
		}
	}, [user]);

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
		if (meals.length > 0) {
			mealData = meals.map((meal) => {
				const date = new Date(meal.datestamp);
				return {
					image: meal.image_path,
					description: `${date.getMonth() + 1}.${date.getDate()}.${meal.type}`,
				};
			});
		}
	}, [meals]);

	useEffect(() => {
		dispatch(login());
	}, []);

	const getData = () => {
		setIsLoading(true);
		const compositionPromise = httpUtil.getJson('/body-composition', true);
		const mealPromise = httpUtil.getJson('/meals', true);
		Promise.all([compositionPromise, mealPromise])
			.then((res) => {
				setCompositions(res[0]);
				setMeals(res[1]);
			})
			.catch((err) => console.log(err))
			.finally(() => setIsLoading(false));
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
			<div className={styles['row-1']}>
				<div className={styles['progress-container']}></div> <DateAchievement />
				<div className={styles['chart-container']}>
					<Line
						height="200px"
						options={lineChartOptions}
						data={myRecordLineChartData}
					/>
				</div>
			</div>
			<div className={styles['row-2']}>
				{FOOD_MENU.map((item, index) => (
					<button key={`button-${index}`} className={styles['hex-button']}>
						<img src={item.icon} alt="icon" />
						<div className={styles['text']}>{item.text}</div>
					</button>
				))}
			</div>
			<div className={styles['row-3']}>
				<div className={styles['card-container']}>
					{mealData.map((card, index) => (
						<Photo
							key={index}
							imageName={card.image}
							imageSpec={card.description}
						/>
					))}
				</div>
			</div>
			<div className={styles['row-4']}>
				<button className={styles['bottom-button']}>コラムをもっと見る</button>
			</div>
		</MainLayout>
	);
}

export default Homepage;
