import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const Style = createGlobalStyle`
  ${normalize}

  body {
    margin:0; 
    padding-top: 30px;
    background-color: #FEFEFE;
    min-width: 100vw;
    min-height: 100vh;
    font-family: 'Roboto', sans-serif;
  }
`;

export default Style;
