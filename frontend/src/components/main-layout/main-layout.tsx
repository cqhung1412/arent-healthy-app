import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './main-layout.module.css';

/* eslint-disable-next-line */
export interface MainLayoutProps {
	children: React.ReactNode;
}

export function MainLayout(props: React.PropsWithChildren<MainLayoutProps>) {
	return (
		<div className={styles['container']}>
			<Header />
			{props.children}
			<Footer />
		</div>
	);
}

export default MainLayout;
