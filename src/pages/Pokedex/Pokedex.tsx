import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Heading from '../../components/Heading/Heading';
import Layout from '../../components/Layout/Layout';
import PokemonCard from '../../components/PokemonCard/PokemonCard';

import pokemons from '../../data/pokemons.json';
import { Pokemon } from './models/pokemon.model';
import styles from './Pokedex.module.scss';

export interface PokedexPageProps {}

const PokedexPage: React.FC<PokedexPageProps> = () => {
  const [cards, setCards] = useState<Pokemon[]>([]);

  useEffect(() => {
    setCards(pokemons as Pokemon[]);
  }, []);

  return (
    <div className={styles.root}>
      <Header />
      <Layout className={styles.content}>
        <Heading type="l">Pokedex</Heading>

        <div className={styles.cardsWrap}>
          {cards.map((item) => (
            <PokemonCard key={item.id} pokemon={item} />
          ))}
        </div>
      </Layout>
    </div>
  );
};

export default PokedexPage;
