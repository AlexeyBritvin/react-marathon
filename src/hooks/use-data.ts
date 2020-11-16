import { useEffect, useState } from 'react';
import req from '../utils/request';

interface UseDataRes<T> {
  data: T;
  isLoading: boolean;
  isError: boolean;
}

const useData = <T>(endPoint: string): UseDataRes<T> => {
  const [data, setData] = useState<T>(null);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const response: T = await req(endPoint);

        setData(response);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [endPoint]);

  return {
    data,
    isLoading,
    isError,
  };
};

export default useData;
