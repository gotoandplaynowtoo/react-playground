import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Details from 'components/ListItem/Details';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Details/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const tree = renderer.create(<Details/>).toJSON();
  expect(tree).toMatchSnapshot();
});