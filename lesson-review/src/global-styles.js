import { injectGlobal } from 'styled-components';

injectGlobal`
  html {
    box-sizing: border-box;
  }
  
  *, *:after, *:before {
    box-sizing: inherit;
  }
`;