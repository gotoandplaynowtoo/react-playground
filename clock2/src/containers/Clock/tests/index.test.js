import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Clock from 'containers/Clock';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Clock/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const tree = renderer.create(<Clock/>).toJSON();
  expect(tree).toMatchSnapshot();
});