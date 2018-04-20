import React, { Component } from 'react';
import SearchBarContainer from 'containers/SearchBarContainer';
import SorterContainer from 'containers/SorterContainer';
import ListContainer from 'containers/ListContainer';


class App extends Component {

  render() {
    return (
      <div>
        <SearchBarContainer/>
        <SorterContainer/>
        <ListContainer/>
      </div>
    );
  }
}

export default App;
