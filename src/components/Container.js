import styled from 'styled-components';
import { node } from 'prop-types';

const Container = styled.div`
  width: 100vw;
  max-width: 980px;
  margin: 0 auto;
`;

Container.propTypes = {
  children: node.isRequired,
};

export default Container;
