import React, { Component } from 'react';
import Clock from './components/Clock';

class App extends Component {

  state = { dateString: (new Date()).toLocaleTimeString() };

  constructor(props) {
    super(props);
    this.timerId = null;
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.tick(); 
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick = () => {
    this.setState({
      dateString: (new Date()).toLocaleTimeString()
    });
  }

  render() {
    return (
      <div style={
        {
          alignItems: 'center',
          display: 'flex',
          height: '100vh',
          justifyContent: 'center',
          width: '100vw'
        }
      }>
        <Clock dateString={this.state.dateString} />
      </div>
    );
  }
  
}

export default App;
