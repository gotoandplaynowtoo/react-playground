import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ListContainer from 'containers/ListContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ListContainer/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const tree = renderer.create(<ListContainer/>).toJSON();
  expect(tree).toMatchSnapshot();
});