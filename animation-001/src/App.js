import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';

const Square = (props) => {
  const { x } = props;
  return (
    <div 
      style={{
        position: 'absolute',
        width: 50,
        height: 50,
        background: 'red',
        transform: `translate3d(${x}px, 0, 0)`
      }}
    />
  );
};

class App extends Component {
  state = {
    isOpen: false
  };

  componentDidMount() {
    this.setState({
      isOpen: true
    });
  }

  render() {
    const {isOpen} = this.state;
    return (
      <div>
        <Motion style={{x: isOpen ? spring(400) : 0 }}>
          {({x}) => {
              return (
                <div style={{position: 'relative'}}>
                  <Square x={x}/>
                </div>
              );
            } 
          }
        </Motion>
      </div>
    );
  }
}

export default App;
