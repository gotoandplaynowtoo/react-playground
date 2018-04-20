import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Button from 'components/Button';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const tree = renderer.create(<Button/>).toJSON();
  expect(tree).toMatchSnapshot();
});