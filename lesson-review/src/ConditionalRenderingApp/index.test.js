import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ConditionalRenderingApp from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ConditionalRenderingApp/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const tree = renderer.create(<ConditionalRenderingApp/>).toJSON();
  expect(tree).toMatchSnapshot();
});