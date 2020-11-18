import config from '../config/server';

export interface Query {
  [key: string]: string;
}

const getUrlWithParams = (endPoint: string, query: Query) => {
  return {
    protocol: config.protocol,
    host: config.host,
    pathname: config.endPoint[endPoint].pathname,
    query,
  };
};

export default getUrlWithParams;
