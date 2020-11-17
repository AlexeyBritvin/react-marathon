import React, { ChangeEvent, useState } from 'react';
import Heading from '../../components/Heading/Heading';
import Layout from '../../components/Layout/Layout';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import useData from '../../hooks/use-data';
import { PokemonsResponse } from './models/response.model';

import styles from './Pokedex.module.scss';

export interface PokedexPageProps {}

const PokedexPage: React.FC<PokedexPageProps> = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState({});
  const { data, isLoading, isError } = useData<PokemonsResponse>('getPokemons', query, [searchValue]);

  const handleNameChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(target.value);
    setQuery((s) => ({
      ...s,
      name: target.value,
    }));
  };

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
          {data.total} <b>Pokemons</b> for you to choose your favorite
        </Heading>

        <div className={styles.inputWrap}>
          <input
            className={styles.searchInput}
            type="text"
            value={searchValue}
            onChange={handleNameChange}
            placeholder="Find your pokemon"
          />
        </div>

        <div className={styles.cardsWrap}>
          {data.pokemons.map((item) => (
            <PokemonCard key={item.id} pokemon={item} />
          ))}
        </div>
      </Layout>
    </div>
  );
};

export default PokedexPage;
