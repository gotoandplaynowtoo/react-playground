import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Li from 'PaginatedApp/components/Li';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Li/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('matches to snapshot', () => {
  const tree = renderer.create(<Li/>).toJSON();
  expect(tree).toMatchSnapshot();
});