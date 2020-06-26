import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

const StyledText = styled.div`
  margin-bottom: 15px;
  font-size: 14px;
`;

// From WYSIWYG, children here is might be raw HTML
const Text = ({ children }) => (
  <StyledText dangerouslySetInnerHTML={{ __html: children }}></StyledText>
);

Text.propTypes = {
  children: string,
};

export default Text;
