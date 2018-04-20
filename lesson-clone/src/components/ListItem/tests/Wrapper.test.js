import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Wrapper from 'components/ListItem/Wrapper';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Wrapper/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const tree = renderer.create(<Wrapper/>).toJSON();
  expect(tree).toMatchSnapshot();
});