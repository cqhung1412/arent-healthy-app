import styles from './footer.module.css';

/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <div className={styles['container']}>
      <div className={styles['container-box']}>
        <div className={styles['text-1']}>会員登録</div>
        <div className={styles['text-2']}>運営会社</div>
        <div className={styles['text-3']}>利用規約</div>
        <div className={styles['text-4']}>個人情報の取扱について</div>
        <div className={styles['text-5']}>特定商取引法に基づく表記</div>
        <div className={styles['text-6']}>お問い合わせ</div>
      </div>
    </div>
  );
}

export default Footer;
