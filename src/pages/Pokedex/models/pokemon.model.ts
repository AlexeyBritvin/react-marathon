/* eslint-disable camelcase */
import { Stats } from './stats.model';

export interface Pokemon {
  id: number;
  name_clean: string;
  abilities: string[];
  stats: Stats;
  types: PokemonType[];
  img: string;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
}

export type PokemonType = 'grass' | 'fire' | 'water' | 'rock' | 'poison';
