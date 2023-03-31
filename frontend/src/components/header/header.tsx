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
    <div className={styles['container']}>
      <div className={styles['container-box']}>
        <img className={styles['logo']} src={Logo} alt="logo" />
        <div className={styles['navi-1']}>
          <img src={IconMemo} alt="memo" />
          自分の記録
        </div>
        <div className={styles['navi-2']}>
          <img src={IconChallenge} alt="challenge" />
          チャレンジ
        </div>
        <div className={styles['navi-3']}>
          <img src={IconInfo} alt="info" />
          お知らせ
        </div>
        <div className={styles['menu']}>
          <img src={IconMenu} alt="menu" />
        </div>
      </div>
    </div>
  );
}

export default Header;
