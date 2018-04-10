import {injectGlobal} from 'styled-components';

injectGlobal`

  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    font-size: 16px;
  }

`;