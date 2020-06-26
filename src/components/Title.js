import React from 'react';
import styled from 'styled-components';
import { number, node } from 'prop-types';

const StyledTitle = styled.span`
  margin: 0 0 10px;
  font-family: 'Roboto Condensed', sans-serif;
  color: ${({ theme, color }) => Object.values(theme.colors)[color]};
  font-size: ${({ level }) => `${Math.max(4 - level, 1) * 16}px`};
  text-transform: ${({ level }) => (level === 3 ? 'uppercase' : 'initial')};
`;

const TitleComponent = ({ children, level = 1, color = 0 }) => {
  const Title = StyledTitle.withComponent(`h${level}`);
  return (
    <Title level={level} color={color}>
      {children}
    </Title>
  );
};

TitleComponent.propTypes = {
  children: node,
  color: number,
  tag: number,
};

export default TitleComponent;
