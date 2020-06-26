import React from 'react';
import styled from 'styled-components';
import { string, number } from 'prop-types';

const StyledTitle = styled.span`
  margin: 0 0 10px;
  font-family: 'Roboto Condensed', sans-serif;
  color: ${({ theme, color }) => Object.values(theme.colors)[color]};
`;

const TitleComponent = ({ children, level = 1, color = 0 }) => {
  const Title = StyledTitle.withComponent(`h${level}`);
  return <Title color={color}>{children}</Title>;
};

TitleComponent.propTypes = {
  children: string,
  color: number,
  tag: number,
};

export default TitleComponent;
