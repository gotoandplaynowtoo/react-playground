import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from 'ConditionalApp/components/List';

const data = [
  {
    objectID: '01',
    title: 'Javascript'
  },
  {
    objectID: '02',
    title: 'React'
  }
];

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<List data={data}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('matches to snapshot', () => {
  const tree = renderer.create(<List data={data}/>).toJSON();
  expect(tree).toMatchSnapshot();
})