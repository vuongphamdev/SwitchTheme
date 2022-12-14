import { useEffect, useState } from 'react';
import getTheme from '../api/Theme';

export const useTheme = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [themeData, setThemeData] = useState([]);

  useEffect(() => {
    async function fetchTheme() {
      setIsLoading(true);
      const data = await getTheme();
      setThemeData(data);
      setIsLoading(false);
    }
    fetchTheme();
  }, []);

  return { isLoading, themeData };
};
