import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';

import MainTheme from 'themes/main';
import GlobalStyle from 'styles';

import { Button, Container, Title } from 'components';
import { CardList } from 'containers';
import { MainContext } from 'contexts';

const App = () => {
  const { count, resetCounter } = useContext(MainContext);

  return (
    <MainTheme>
      <GlobalStyle />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Atomic exercise</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&family=Roboto:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Container>
        <Title>Atomic exercise</Title>
        <CardList title="Cards" />
        <Title level={2}>Counter: {count}</Title>
        <Button handleClick={resetCounter}>Reset count</Button>
      </Container>
    </MainTheme>
  );
};

export default App;
