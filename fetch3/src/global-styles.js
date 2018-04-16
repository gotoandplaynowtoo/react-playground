import { injectGlobal } from 'styled-components';
import './assets/css/normalize.css';

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
  }
`;