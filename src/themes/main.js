import React from 'react';
import { ThemeProvider } from 'styled-components';

export const main = {
  colors: {
    default: 'black',
    orange: '#FF7B00',
    green: '#00A174',
    red: 'red',
    blue: 'blue',
    pink: 'pink',
    yellow: 'yellow',
  },
};

const MainTheme = ({ children, theme }) => (
  <ThemeProvider theme={{ ...main, ...theme }}>{children}</ThemeProvider>
);

export default MainTheme;
