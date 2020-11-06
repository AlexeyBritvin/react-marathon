import React from 'react';
import classNames from 'classnames';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

import styles from './HomePage.module.scss';

export interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div className={styles.root}>
      <Header />
      <div className={styles.content}>
        <div className="container">
          <div className={classNames(styles.header, 'color')}>This is App Component!</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
