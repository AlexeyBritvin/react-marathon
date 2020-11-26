import getUrlWithParams from './get-url-with-params';

describe('getUrlWithParams', () => {
  test('should return getPokemons entrypoint with empty params', () => {
    const url = getUrlWithParams('getPokemons', {});

    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemons',
      query: {},
    });
  });

  test('should return getPokemons entrypoint with name param', () => {
    const url = getUrlWithParams('getPokemons', { name: 'pikachu' });

    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemons',
      query: {
        name: 'pikachu',
      },
    });
  });

  test('should return getPokemon entrypoint with id', () => {
    const url = getUrlWithParams('getPokemon', { id: 25 });

    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemon/25',
      query: {},
    });
  });
});
