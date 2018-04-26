import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App 
  projectName='flow in react' 
  version={'1.0.0'}
/>, document.getElementById('root'));
registerServiceWorker();
