import { useEffect, useState } from 'react';
import getTheme from '../api/Theme';

export const useTheme = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [themeData, setThemeData] = useState([]);

  useEffect(() => {
    async function fetchTheme() {
      await setIsLoading(true);
      await getTheme().then((data: any) => setThemeData(data));
      await setIsLoading(false);
    }
    fetchTheme();
  }, []);

  return { isLoading, themeData };
};
