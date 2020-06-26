import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const Style = createGlobalStyle`
  ${normalize}

  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap');

  body {
    margin:0; 
    background-color: #FEFEFE;
    min-width: 100vw;
    min-height: 100vh;
    font-family: 'Roboto Condensed', sans-serif;
  }
`;

export default Style;
