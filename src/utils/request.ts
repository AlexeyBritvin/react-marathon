import Url from 'url';
import getUrlWithParams from './get-url-with-params';

const req = (endPoint: string) => {
  const uri = Url.format(getUrlWithParams(endPoint));

  return fetch(uri).then((res) => res.json());
};

export default req;
