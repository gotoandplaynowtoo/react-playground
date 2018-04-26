import React from 'react';
import ReactDOM from 'react-dom';
import Li from 'ConditionalRenderingApp/components/Li';

it('it renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Li/>, div);
  ReactDOM.unmountComponentAtNode(div);
});