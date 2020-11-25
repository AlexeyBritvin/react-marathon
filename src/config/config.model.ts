export interface Config {
  protocol: string;
  baseUrl: string;
  host: string;
  endPoint: Endpoint;
}

export type EndpointsUrl = 'getPokemons' | 'getPokemon';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export type Endpoint = {
  [key in EndpointsUrl]: {
    method: HttpMethod;
    pathname: string;
  };
};
