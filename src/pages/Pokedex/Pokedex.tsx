import React, { ChangeEvent, useState } from 'react';
import Heading from '../../components/Heading/Heading';
import Layout from '../../components/Layout/Layout';
import Loader from '../../components/Loader/Loader';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import useData from '../../hooks/use-data';
import { Query } from '../../utils/get-url-with-params';
import { Pokemon } from './models/pokemon.model';
import { PokemonsResponse } from './models/response.model';

import styles from './Pokedex.module.scss';

interface Filter extends Query {
  name?: string;
}

export interface PokedexPageProps {}

const PokedexPage: React.FC<PokedexPageProps> = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<Filter>({});
  const { data, isLoading, isError } = useData<PokemonsResponse>('getPokemons', query, [searchValue]);

  const handleNameChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(target.value);
    setQuery((state) => ({
      ...state,
      name: target.value,
    }));
  };

  if (isError) {
    return <div>Something went wrong!</div>;
  }

  return (
    <div className={styles.root}>
      <Layout className={styles.content}>
        <Heading type="l" className={styles.title}>
          {data?.total} <b>Pokemons</b> for you to choose your favorite
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

        {isLoading ? (
          <Loader />
        ) : (
          <div className={styles.cardsWrap}>
            {data.pokemons.map((item: Pokemon) => (
              <PokemonCard key={item.id} pokemon={item} />
            ))}
          </div>
        )}
      </Layout>
    </div>
  );
};

export default PokedexPage;
