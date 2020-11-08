import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Parallax from '../../components/Parallax/Parallax';
import Layout from '../../components/Layout/Layout';
import Heading from '../../components/Heading/Heading';

import styles from './HomePage.module.scss';

export interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div className={styles.root}>
      <Header />
      <Layout className={styles.content}>
        <div className={styles.textWrap}>
          <Heading type="h1">
            <b>Find</b> all your favorite <b>Pokemon</b>
          </Heading>
          <p>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
          <Button onClick={() => {}}>See pokemons</Button>
        </div>

        <div>
          <Parallax />
        </div>
      </Layout>
      <Footer />
    </div>
  );
};

export default HomePage;
