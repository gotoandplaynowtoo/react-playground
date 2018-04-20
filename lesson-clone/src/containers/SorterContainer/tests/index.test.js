import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import SorterContainer from 'containers/SorterContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SorterContainer/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const tree = renderer.create(<SorterContainer/>).toJSON();
  expect(tree).toMatchSnapshot();
});