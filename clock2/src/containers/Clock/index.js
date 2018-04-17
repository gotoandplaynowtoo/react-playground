import React, { Component } from 'react';
import Display from 'components/Display';

class Clock extends Component {

  constructor(props) {
    super(props);
    this.state = {
      time: ''
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
    return <Display>{this.state.time}</Display>
  }

  tick() {
    this.setState({
      time: (new Date()).toLocaleTimeString()
    });
  }

}

export default Clock;