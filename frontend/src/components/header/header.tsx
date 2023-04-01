import { Link } from 'react-router-dom';
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
			<Link className={styles['logo']} to="/">
				<img src={Logo} alt="logo" />
			</Link>
			<div className={styles['header-right']}>
				<Link to="/my-record">
					<img src={IconMemo} alt="memo" />
					自分の記録
				</Link>
				<Link to="/recommend">
					<img src={IconChallenge} alt="memo" />
					チャレンジ
				</Link>
				<Link to="/">
					<img src={IconInfo} alt="memo" />
					お知らせ
				</Link>
				<a href="#">
					<img src={IconMenu} alt="menu" />
				</a>
			</div>
		</div>
	);
}

export default Header;
