import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Ul from 'ConditionalRenderingApp/components/Ul';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Ul/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const tree = renderer.create(<Ul/>).toJSON();
  expect(tree).toMatchSnapshot();
});