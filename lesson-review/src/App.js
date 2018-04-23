import React, { Component } from 'react';
import ListApp from './ListApp';
import StateApp from './StateApp';
import UnidirectionalApp from './UnidirectionalApp';
import FormApp from './FormApp';
import FormApp2 from './FormApp2';
import FilterListApp from './FilterListApp';

class App extends Component {
  render() {
    return (
      <div>
        <ListApp/>
        <StateApp/>
        <UnidirectionalApp/>
        <FormApp/>
        <FormApp2/>
        <FilterListApp/>
      </div>
    );
  }
}

export default App;
