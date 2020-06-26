import React from 'react';

import { Provider as MainProvider } from 'contexts/MainContext';

import MainTheme from 'themes/main';
import GlobalStyle from 'styles';

import { Container, Title } from 'components';
import { CardList } from 'containers';

const App = () => (
  <MainProvider>
    <MainTheme>
      <GlobalStyle />
      <Container>
        <Title>Atomic exercise</Title>
        <CardList title="Cards" />
        <Title level={2}>Counter</Title>
      </Container>
    </MainTheme>
  </MainProvider>
);

export default App;
