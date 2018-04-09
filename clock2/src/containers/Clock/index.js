import React, { Component } from 'react';
import Display from 'components/Display';

class Clock extends Component {

  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
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

  render() {
    return <Display>{this.state.time.toLocaleTimeString()}</Display>
  }

  tick() {
    this.setState({
      time: new Date()
    });
  }

}

export default Clock;