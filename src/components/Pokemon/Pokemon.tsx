import React from 'react';
import useData from '../../hooks/use-data';
import { PokemonRequest } from '../../pages/Pokedex/models/pokemon.model';
import Loader from '../Loader/Loader';

export interface PokemonProps {
  id: number | string;
}

const Pokemon: React.FC<PokemonProps> = ({ id }) => {
  const { data, isLoading } = useData<PokemonRequest>('getPokemon', { id }, [id]);

  if (isLoading) {
    return <Loader />;
  }

  return <div>This is pokemon {data.name}</div>;
};

export default Pokemon;
