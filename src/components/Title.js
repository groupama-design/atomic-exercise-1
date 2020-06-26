import React from 'react';
import styled from 'styled-components';
import { string, number } from 'prop-types';

const StyledTitle = styled.span`
  font-family: 'Roboto Condensed', sans-serif;

  h1 {
    font-size: 12px;
  }
`;

const TitleComponent = ({ children, level = 1 }) => {
  const Title = StyledTitle.withComponent(`h${level}`);
  return <Title>{children}</Title>;
};

TitleComponent.propTypes = {
  children: string,
  tag: number,
};

export default TitleComponent;
