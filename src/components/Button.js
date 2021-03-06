import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

import { func, node } from 'prop-types';

const StyledButton = styled.button`
  display: flex;
  align-content: center;
  padding: 15px 13px 18px;

  color: white;
  background-color: ${({ theme }) => theme.colors.orange};

  border: none;
  border-radius: 2px;

  font-family: Roboto, sans-serif;
  font-size: 14px;
  line-height: 14px;
  text-transform: uppercase;
  transition: background 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => darken(0.05, theme.colors.orange)};
  }
`;

const Button = ({ children, handleClick }) => (
  <StyledButton onClick={handleClick}>{children}</StyledButton>
);

Button.propTypes = {
  children: node,
  handleClick: func,
};

export default Button;
