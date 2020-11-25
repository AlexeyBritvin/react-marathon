import { useEffect, useState } from 'react';
import req from '../utils/request';
import { Query } from '../utils/get-url-with-params';
import { EndpointsUrl } from '../config/config.model';

interface UseDataRes<T> {
  data: T;
  isLoading: boolean;
  isError: boolean;
}

const useData = <T>(endPoint: EndpointsUrl, query: Query, deps: any[] = []): UseDataRes<T> => {
  const [data, setData] = useState<T>(null);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getData = async (): Promise<void> => {
      try {
        const response = await req<T>(endPoint, query);

        setData(response);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, deps);

  return {
    data,
    isLoading,
    isError,
  };
};

export default useData;
