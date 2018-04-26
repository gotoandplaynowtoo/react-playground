import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Button from 'PaginatedApp/components/Button';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('matches to snapshot', () => {
  const tree = renderer.create(<Button/>).toJSON();
  expect(tree).toMatchSnapshot();
});