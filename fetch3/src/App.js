import React, { Component } from 'react';
import FilterableList from 'containers/FilterableList';
import Container from 'components/Container';

class App extends Component {
  render() {
    return (
      <Container>
        <FilterableList/>
      </Container>
    );
  }
}

export default App;
