import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Layout from 'components/Layout';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Layout/>, div);
  ReactDOM.unmountComponentAtNode(div);
});