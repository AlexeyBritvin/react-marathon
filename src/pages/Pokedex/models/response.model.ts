import { Pokemon } from './pokemon.model';

export interface PokemonsResponse {
  count: number;
  limit: number;
  offset: number;
  total: number;
  pokemons: Pokemon[];
}
