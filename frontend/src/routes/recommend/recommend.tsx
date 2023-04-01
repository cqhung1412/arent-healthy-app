import MainLayout from '../../components/main-layout/main-layout';
import Column from '../../components/column/column';
import styles from './recommend.module.css';

export const RECOMMEND_CARD = [
	{ header: 'RECOMMENDED COLUMN', subText: 'オススメ' },
	{ header: 'RECOMMENDED DIET', subText: 'ダイエット' },
	{ header: 'RECOMMENDED BEAUTY', subText: '美容' },
	{ header: 'RECOMMENDED HEALTH', subText: '健康' },
];

const LANDING_ARTICLE = [
	{
		image: 'images/column-1.jpg',
		created: '2021.05.17   23:25',
		description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
		tags: ['#魚料理 ', '#和食', '#DHA'],
	},
	{
		image: 'images/column-2.jpg',
		created: '2021.05.17   23:25',
		description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
		tags: ['#魚料理 ', '#和食', '#DHA'],
	},
	{
		image: 'images/column-3.jpg',
		created: '2021.05.17   23:25',
		description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
		tags: ['#魚料理 ', '#和食', '#DHA'],
	},
	{
		image: 'images/column-4.jpg',
		created: '2021.05.17   23:25',
		description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
		tags: ['#魚料理 ', '#和食', '#DHA'],
	},
	{
		image: 'images/column-5.jpg',
		created: '2021.05.17   23:25',
		description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
		tags: ['#魚料理 ', '#和食', '#DHA'],
	},
	{
		image: 'images/column-6.jpg',
		created: '2021.05.17   23:25',
		description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
		tags: ['#魚料理 ', '#和食', '#DHA'],
	},
	{
		image: 'images/column-7.jpg',
		created: '2021.05.17   23:25',
		description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
		tags: ['#魚料理 ', '#和食', '#DHA'],
	},
	{
		image: 'images/column-8.jpg',
		created: '2021.05.17   23:25',
		description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
		tags: ['#魚料理 ', '#和食', '#DHA'],
	},
];

/* eslint-disable-next-line */
export interface RecommendProps {}

export function Recommend(props: RecommendProps) {
	return (
		<MainLayout>
			<div className={styles['page-container']}>
				<div className={styles['container']}>
					<div className={styles['card-container']}>
						{RECOMMEND_CARD.map((card, index) => (
							<div
								key={index}
								className={`${styles['recommend-card']} ${
									index === RECOMMEND_CARD.length - 1 && styles['last-item']
								}`}
							>
								<div className={styles['header']}>{card.header}</div>
								<hr />
								<div className={styles['sub-text']}>{card.subText}</div>
							</div>
						))}
					</div>
					<div
						className={styles['article-container']}
						style={{ marginBottom: 20 }}
					>
						{LANDING_ARTICLE.map((card, index) => (
							<Column key={index} />
						))}
					</div>
					<div className={styles["bottom-button-container"]}>
						<button className={styles["bottom-button"]}>コラムをもっと見る</button>
					</div>
				</div>
			</div>
		</MainLayout>
	);
}

export default Recommend;
