import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Input from 'components/Input';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Input/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('it renders correctly', () => {
  const tree = renderer.create(<Input/>).toJSON();
  expect(tree).toMatchSnapshot();
});