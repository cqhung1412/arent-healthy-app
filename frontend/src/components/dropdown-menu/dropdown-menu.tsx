import styles from './dropdown-menu.module.css';

/* eslint-disable-next-line */
export interface DropdownMenuProps {}

export function DropdownMenu(props: DropdownMenuProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DropdownMenu!</h1>
    </div>
  );
}

export default DropdownMenu;
