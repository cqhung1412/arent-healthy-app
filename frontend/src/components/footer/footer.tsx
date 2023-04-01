import styles from './footer.module.css';

/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
	return (
		<div className={styles['container']}>
			<div className={styles['item']}>
				<a>会員登録</a>
				<a>運営会社</a>
			</div>
			<div className={styles['item']}>
				<a>利用規約</a>
				<a>個人情報の取扱について</a>
				<a>特定商取引法に基づく表記</a>
			</div>
      <div className={styles['item']}>
        <a>お問い合わせ</a>
      </div>
		</div>
	);
}

export default Footer;
