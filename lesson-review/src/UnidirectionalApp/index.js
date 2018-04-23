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

class UnidirectionalApp extends Component {
  state = {
    list
  };

  onClickDismiss = (e) => {
    const id = e.target.value;
    this.setState((prevState) => {
      const {
        list
      } = prevState;

      const filteredList = list.filter(item => item.objectID.toString() !== id);

      return {
        list: filteredList
      }
    });
  };

  render = () => {
    return (
      <div style={{
        padding: 6,
        border: '1px solid #222',
        margin: '6px 0'
      }}>
        {this.state.list.map(item =>
          <div 
            key={item.objectID}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: '#eee'
            }}
          >
            <span>{item.title}</span>
            <button 
              type='button' 
              value={item.objectID}
              onClick={this.onClickDismiss}
            >
              Dismiss
            </button>
          </div>
        )}
      </div>
    );
  };
}

export default UnidirectionalApp;