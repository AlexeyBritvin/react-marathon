const config = {
  protocol: 'http',
  baseUrl: 'http://zar.hosthot.ru/api/v1',
  host: 'zar.hosthot.ru',
  endPoint: {
    getPokemons: {
      method: 'GET',
      pathname: '/api/v1/pokemons',
    },
  },
};

export default config;
