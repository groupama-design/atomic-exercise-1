import React from 'react';
import { string } from 'prop-types';

const Text = ({ children }) => <p>{{ children }}</p>;

Text.propTypes = {
  children: string,
};

export default Text;
