import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// Hot Module Replacement (HMR) - reloads application in the browser. The browser doesn't perform page refresh.
if(module.hot) {
    module.hot.accept();
}