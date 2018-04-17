import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import CanvasContainer from 'containers/CanvasContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CanvasContainer/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const tree = renderer.create(<CanvasContainer/>).toJSON();
  expect(tree).toMatchSnapshot();
});