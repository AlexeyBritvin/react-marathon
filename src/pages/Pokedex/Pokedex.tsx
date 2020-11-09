import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Heading from '../../components/Heading/Heading';
import Layout from '../../components/Layout/Layout';

import styles from './Pokedex.module.scss';

export interface PokedexPageProps {}

const PokedexPage: React.FC<PokedexPageProps> = () => {
  return (
    <div className={styles.root}>
      <Header />
      <Layout className={styles.content}>
        <Heading type="h1">Pokedex</Heading>
      </Layout>
      <Footer />
    </div>
  );
};

export default PokedexPage;
