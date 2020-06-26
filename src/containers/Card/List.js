import React, { useContext } from 'react';
import styled from 'styled-components';

import MainContext from 'contexts/MainContext';

import Entry from './Entry';
import { Loader, Title } from 'components';

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
`;

const List = () => {
  const { isLoading, data = [] } = useContext(MainContext);

  if (isLoading)
    return (
      <>
        <Title level={2}>Cards</Title>
        <Loader />
      </>
    );

  return (
    <>
      <Title level={2}>Cards</Title>
      <StyledList>
        {data.map((element, index) => {
          console.log(element);
          return <Entry {...element} key={index} />;
        })}
      </StyledList>
    </>
  );
};

export default List;
