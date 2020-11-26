/* eslint-disable camelcase */
import { Stats } from './stats.model';

export interface PokemonRequest {
  id: number;
  name_clean: string;
  abilities: string[];
  stats: Stats;
  types: PokemonTypes[];
  img: string;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
}

export enum PokemonTypes {
  Grass = 'grass',
  Fire = 'fire',
  Water = 'water',
  Rock = 'rock',
  Poison = 'poison',
}
