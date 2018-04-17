import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Canvas from 'components/Canvas';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Canvas />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('it renders correctly', () => {
  const tree = renderer.create(<Canvas/>).toJSON();
  expect(tree).toMatchSnapshot();
});