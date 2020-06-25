import React from 'react';
import { string } from 'prop-types';

const Title = ({ children }) => <h3>{{ children }}</h3>;

Title.propTypes = {
  children: string,
};

export default Title;
