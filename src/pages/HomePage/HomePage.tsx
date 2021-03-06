import { navigate } from 'hookrouter';
import React from 'react';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import Heading from '../../components/Heading/Heading';
import Layout from '../../components/Layout/Layout';
import Parallax from '../../components/Parallax/Parallax';
import { RouteLinks } from '../../routes';

import styles from './HomePage.module.scss';

export interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  const onButtonClick = () => navigate(RouteLinks.Pokedex);

  return (
    <div className={styles.root}>
      <Layout className={styles.content}>
        <div className={styles.textWrap}>
          <Heading type="l">
            <b>Find</b> all your favorite <b>Pokemon</b>
          </Heading>
          <p>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
          <Button onClick={onButtonClick}>See pokemons</Button>
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
