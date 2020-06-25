import React from 'react';
import { string } from 'prop-types';

const Button = ({ children, handleClick }) => (
  <button onClick={handleClick}>{{ children }}</button>
);

Button.propTypes = {
  children: string,
};

export default Button;
