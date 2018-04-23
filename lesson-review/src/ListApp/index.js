import React, { Component } from 'react';

const list = [
  {
    objectID: 0,
    title: 'Javascript'
  },
  {
    objectID: 1,
    title: 'Redux'
  },
  {
    objectID: 2,
    title: 'Flux'
  }  
];

class ListApp extends Component {
  render = () => {
    return (
      <div style={{
        margin: '6px 0',
        border: '1px solid #222',
        padding: 6
      }}>
        LIST_APP
        {list.map(item =>
          <div key={item.objectID}>{item.title}</div>
        )}
      </div>
    );
  };
}

export default ListApp;