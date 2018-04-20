import React from 'react'
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ListSorter from 'components/ListSorter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ListSorter/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const tree = renderer.create(<ListSorter/>).toJSON();
  expect(tree).toMatchSnapshot();
});