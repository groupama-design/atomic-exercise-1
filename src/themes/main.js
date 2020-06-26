import React from 'react';
import { ThemeProvider } from 'styled-components';

export const main = {
  font: {
    size: 16,
    family: 'Roboto',
    weight: 'normal',
  },
  colors: {
    default: 'black',
    orange: '#FF7B00',
    green: '#00A174',
  },
};

const MainTheme = ({ children, theme }) => (
  <ThemeProvider theme={{ ...main, ...theme }}>{children}</ThemeProvider>
);

export default MainTheme;
