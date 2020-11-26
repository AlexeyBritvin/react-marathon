import { UrlObject } from 'url';
import config from '../config/server';

export interface Query {
  [key: string]: any;
}

const getUrlWithParams = (endPoint: string, query: Query): UrlObject => {
  const queryCopy = { ...query };
  const url = {
    protocol: config.protocol,
    host: config.host,
    pathname: config.endPoint[endPoint].pathname,
    query: {},
  };

  const pathname = Object.keys(query).reduce((acc, val) => {
    if (acc.indexOf(`{${val}}`) !== -1) {
      const result = acc.replace(`{${val}}`, query[val]);
      delete queryCopy[val];

      return result;
    }

    return acc;
  }, url.pathname);

  return { ...url, query: { ...queryCopy }, pathname };
};

export default getUrlWithParams;
