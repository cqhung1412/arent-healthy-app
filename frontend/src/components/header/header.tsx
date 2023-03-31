import styles from './header.module.css';
import Logo from '../../assets/svg/logo.svg';
import IconMemo from '../../assets/svg/icon_memo.svg';
import IconChallenge from '../../assets/svg/icon_challenge.svg';
import IconInfo from '../../assets/svg/icon_info.svg';
import IconMenu from '../../assets/svg/icon_menu.svg';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
	return (
		<div className={styles['header']}>
			<a className={styles['logo']} href="/">
				<img src={Logo} alt="logo" />
			</a>
			<div className={styles['header-right']}>
				<a href="#home">
					<img src={IconMemo} alt="memo" />
					自分の記録
				</a>
				<a href="#home">
					<img src={IconChallenge} alt="memo" />
					チャレンジ
				</a>
				<a href="#home">
					<img src={IconInfo} alt="memo" />
					お知らせ
				</a>
				<a href="#">
					<img src={IconMenu} alt="menu" />
				</a>
			</div>
		</div>
	);
}

export default Header;
