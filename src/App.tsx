import { useEffect, useLayoutEffect, useState } from 'react';
import {
  ThemeContainer,
  ThemeButton,
} from './components/styles/ThemeSwitching.styled';
import { GlobalStyles } from './components/styles/Global';
import { Header } from './components/styles/Header.styled';
import { Footer } from './components/styles/Footer';
import Quotes from './components/Quotes';

import { ThemeProvider } from 'styled-components';
import { useTheme } from './hooks/useTheme';
import { GridLoader } from 'react-spinners';

// Declare theme object type
export interface IThemeTypes {
  name: string;
  colors: {
    header: string;
    background: string;
    footer: string;
    text: string;
    quoteBgc: string;
    quoteTitle: string;
    quoteBody: string;
    quoteBorder: string;
    border: string;
  };
}

function App() {
  const [selectedTheme, setSelectedTheme] = useState<IThemeTypes>();
  const { isLoading, themeData } = useTheme();

  useEffect(() => {
    setSelectedTheme(themeData[Math.floor(Math.random() * themeData.length)]);
  }, [themeData]);

  // Change Theme function
  const HandleThemeChange = (theme: IThemeTypes): void => {
    setSelectedTheme(theme);
  };

  //if is loading then return Spinner
  if (!selectedTheme) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          height: '100vh',
        }}
      >
        <GridLoader color="#36d7b7" />
        <p style={{ color: '#36d7b7' }}>Loading...</p>
      </div>
    );
  }

  return (
    <ThemeProvider theme={selectedTheme}>
      <div className="App">
        <GlobalStyles />
        <Header>Game of Thrones Quotes</Header>
        <ThemeContainer>
          <span>Themes: </span>
          {themeData.map((theme: IThemeTypes) => (
            <ThemeButton
              key={theme.name}
              className={`${theme.name} ${
                selectedTheme.name === theme.name ? 'active' : ''
              }`}
              onClick={() => {
                HandleThemeChange(theme);
              }}
              style={{ backgroundColor: theme.colors.background }}
            ></ThemeButton>
          ))}
        </ThemeContainer>
        <Quotes />
        <Footer>
          <p>
            Made with love by <a href="http://bio.link/timonwa">Timonwa</a>
          </p>
        </Footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
