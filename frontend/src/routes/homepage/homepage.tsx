import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import MainLayout from '../../components/main-layout/main-layout';
import Pie from '../../components/pie/pie';
import styles from './homepage.module.css';

/* eslint-disable-next-line */
export interface HomepageProps {}

export function Homepage(props: HomepageProps) {
	return <MainLayout>
    <Pie
      percentage={12}
      colour={'grey'}
    />
  </MainLayout>;
}

export default Homepage;
