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

class StateApp extends Component {
  state = {
    list
  };

  render = () => {
    return (
      <div style={{
        padding: 6,
        margin: '6px 0',
        border: '1px solid #222'
      }}>
        STATE_APP
        {this.state.list.map(item =>
          <div key={item.objectID}>{item.title}</div>
        )}
      </div>
    );
  };
}

export default StateApp;