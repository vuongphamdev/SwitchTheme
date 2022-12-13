import { createGlobalStyle } from 'styled-components';
import { IThemeTypes } from '../../App';

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
    background-color: ${({ theme }: any) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: monospace;
    overflow-x: hidden;
  }
  
  // active theme
  .active{
      border: 3px solid ${({ theme }) => theme.colors.border};
      }
}
`;
