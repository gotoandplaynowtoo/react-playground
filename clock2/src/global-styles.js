import { injectGlobal } from 'styled-components';

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
    background: black;
    font-family: sans-serif;
    margin: 0;
    padding: 0;
  }

`;