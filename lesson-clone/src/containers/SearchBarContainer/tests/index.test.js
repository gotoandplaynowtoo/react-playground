import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import SearchBarContainer from 'containers/SearchBarContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchBarContainer/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('render correctly', () => {
  const tree = renderer.create(<SearchBarContainer/>).toJSON();
  expect(tree).toMatchSnapshot();
});