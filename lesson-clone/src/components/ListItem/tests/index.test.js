import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ListItem from 'components/ListItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ListItem/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('it renders correctly', () => {
  const tree = renderer.create(<ListItem/>).toJSON();
  expect(tree).toMatchSnapshot();
});