import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from 'components/List';

const data = [
  {
    objectID: 0,
    title: 'The quick brown',
    url: 'google.com',
    author: 'mark',
    points: 100
  }
];

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<List data={data}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const tree = renderer.create(<List data={data}/>);
  expect(tree).toMatchSnapshot();
});