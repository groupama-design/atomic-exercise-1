import React from 'react';
import { string } from 'prop-types';

// From WYSIWYG, children here is might be raw HTML
const Text = ({ children }) => (
  <div dangerouslySetInnerHTML={{ __html: children }}></div>
);

Text.propTypes = {
  children: string,
};

export default Text;
