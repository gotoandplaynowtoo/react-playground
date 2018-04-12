import {injectGlobal} from 'styled-components';

injectGlobal`

  html {
    box-sizing: border-box;
  }
  
  *, 
  *:after,
  *:before {
    box-sizing: inherit;
  }

  body {
    font-family: sans-serif;
    font-size: 16px;
    padding: 0;
    margin: 0;
  }

`;