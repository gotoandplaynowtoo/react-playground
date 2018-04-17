import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Clock from 'components/Clock';

it('render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Clock/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('render correctly', () => {
  const tree = renderer.create(<Clock/>).toJSON();
  expect(tree).toMatchSnapshot();
});
