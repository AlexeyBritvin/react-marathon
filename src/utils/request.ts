import Url from 'url';
import getUrlWithParams, { Query } from './get-url-with-params';

const req = <T>(endPoint: string, query: Query): Promise<T> => {
  const uri = Url.format(getUrlWithParams(endPoint, query));

  return fetch(uri).then((res) => res.json());
};

export default req;
