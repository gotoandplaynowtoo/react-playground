import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Title from 'components/ListItem/Title';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Title/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const tree = renderer.create(<Title/>).toJSON();
  expect(tree).toMatchSnapshot();
});