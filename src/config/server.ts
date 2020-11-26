import { Config } from './config.model';

const config: Config = {
  protocol: 'http',
  baseUrl: 'http://zar.hosthot.ru/api/v1',
  host: 'zar.hosthot.ru',
  endPoint: {
    getPokemons: {
      method: 'GET',
      pathname: '/api/v1/pokemons',
    },
    getPokemon: {
      method: 'GET',
      pathname: '/api/v1/pokemon/{id}',
    },
  },
};

export default config;
