import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

const ImageContainer = styled.div`
  width: 100%;
  height: 220px;
  overflow: hidden;

  & > img {
    max-width: 100%;
    object-fit: cover;
    min-height: 100%;
  }
`;

const Image = ({ src, alt }) => (
  <ImageContainer>
    <img src={src} alt={alt} />
  </ImageContainer>
);

Image.propTypes = {
  src: string,
  alt: string,
};

export default Image;
