import Url from 'url';
import getUrlWithParams, { Query } from './get-url-with-params';

const req = (endPoint: string, query: Query) => {
  const uri = Url.format(getUrlWithParams(endPoint, query));

  return fetch(uri).then((res) => res.json());
};

export default req;
