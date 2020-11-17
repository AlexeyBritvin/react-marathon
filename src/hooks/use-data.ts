import { useEffect, useState } from 'react';
import req from '../utils/request';
import { Query } from '../utils/get-url-with-params';

interface UseDataRes<T> {
  data: T;
  isLoading: boolean;
  isError: boolean;
}

const useData = <T>(endPoint: string, query: Query, deps: any[] = []): UseDataRes<T> => {
  const [data, setData] = useState<T>(null);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const response: T = await req(endPoint, query);

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
