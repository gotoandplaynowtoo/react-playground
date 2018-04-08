import { injectGlobal } from 'styled-components';

injectGlobal `
    html {
        box-sizing: border-box;
    }
    *:after, *:before {
        box-sizing: inherit;
    }
    body {
        font-family: sans-serif;
        font-size: 16px;
        height: 100vh;
        padding: 0;
        margin: 0;
        width: 100vw;
        background: black;
    }
`;