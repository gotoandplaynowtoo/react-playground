// @flow
import React, { Component } from 'react';

type Props = {
  projectName?: string,
  version?: string
};

const add = (n1: number, n2: number):number => {
  return n1 + n2;
};

class App extends Component<Props> {
  render() {
    return (
      <div>
        <p>projectName = {this.props.projectName}</p>
        <p>version = {this.props.version}</p>
        <p>add(100, 200) = {add(100, 200)}</p>
      </div>
    );
  }
}

export default App;
