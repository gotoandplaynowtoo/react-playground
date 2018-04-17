import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Display from 'components/Display';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Display/>, div);
  ReactDOM.unmountComponentAtNode(div);
});