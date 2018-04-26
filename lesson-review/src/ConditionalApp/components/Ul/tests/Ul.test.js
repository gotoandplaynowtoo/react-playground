import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Ul from 'ConditionalApp/components/Ul';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Ul/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('matches to snapshot', () => {
  const tree = renderer.create(<Ul/>).toJSON();
  expect(tree).toMatchSnapshot();
});