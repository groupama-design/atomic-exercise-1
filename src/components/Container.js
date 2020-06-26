import styled from 'styled-components';
import { node } from 'prop-types';

const Container = styled.div`
  max-width: 980px;
  margin: 0 auto;
  padding: 0 30px;
`;

Container.propTypes = {
  children: node.isRequired,
};

export default Container;
