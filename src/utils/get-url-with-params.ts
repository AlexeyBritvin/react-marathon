import config from '../config/server';

const getUrlWithParams = (endPoint: string) => {
  return {
    protocol: config.protocol,
    host: config.host,
    pathname: config.endPoint[endPoint].pathname,
  };
};

export default getUrlWithParams;
