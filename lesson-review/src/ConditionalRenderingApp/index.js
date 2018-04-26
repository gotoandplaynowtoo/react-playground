import React from 'react';
import List from './components/List';

const data = [
  {objectID: 0, title: 'Javascript'},
  {objectID: 1, title: 'Redux'},
  {objectID: 2, title: 'React'},
];

class ConditionalRenderingApp extends React.Component {
  render = () => {
    return (
      <div>
        <List data={data}/>
      </div>
    );
  };
}

export default ConditionalRenderingApp;