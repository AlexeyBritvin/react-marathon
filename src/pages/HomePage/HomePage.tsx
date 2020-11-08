import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Parallax from '../../components/Parallax/Parallax';
import Layout from '../../components/Layout/Layout';

import styles from './HomePage.module.scss';

export interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div className={styles.root}>
      <Header />
      <Layout className={styles.content}>
        <Button onClick={() => {}}>See pokemons</Button>
        <Parallax />
      </Layout>
      <Footer />
    </div>
  );
};

export default HomePage;
