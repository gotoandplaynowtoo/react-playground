import React, { Component } from 'react';

const list = [
  {objectID: 0, title: 'javascript'},
  {objectID: 1, title: 'html'},
  {objectID: 2, title: 'css'}
];

class ErrorApp extends Component {
  state = {
    list
  };

  onClickButton = (e) => {
    this.setState({
      list: null
    });
  };
  
  render = () => {
    const {list} = this.state;
    if(list === null) throw new Error('WTF');
    return (
      <div>
        <button onClick={this.onClickButton}>Trigger Error</button>
        <ul>
          {list.map(item => 
            <li key={item.objectID}>{item.title}</li>
          )}
        </ul>
      </div>
    );
  }

}



export default ErrorApp;