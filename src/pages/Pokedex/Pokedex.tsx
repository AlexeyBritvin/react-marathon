import React, { useEffect, useState } from 'react';
import Heading from '../../components/Heading/Heading';
import Layout from '../../components/Layout/Layout';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import { Pokemon } from './models/pokemon.model';
import { PokemonsResponse } from './models/response.model';

import styles from './Pokedex.module.scss';

const url = 'http://zar.hosthot.ru/api/v1/pokemons';

export interface PokedexPageProps {}

const PokedexPage: React.FC<PokedexPageProps> = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res: PokemonsResponse) => {
        setTotal(res.total);
        setPokemons(res.pokemons);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong!</div>;
  }

  return (
    <div className={styles.root}>
      <Layout className={styles.content}>
        <Heading type="l" className={styles.title}>
          {total} <b>Pokemons</b> for you to choose your favorite
        </Heading>

        <div className={styles.cardsWrap}>
          {pokemons.map((item) => (
            <PokemonCard key={item.id} pokemon={item} />
          ))}
        </div>
      </Layout>
    </div>
  );
};

export default PokedexPage;
