import React, { Component } from 'react';
import ListApp from './ListApp';
import StateApp from './StateApp';
import UnidirectionalApp from './UnidirectionalApp';
import FormApp from './FormApp';
import FormApp2 from './FormApp2';
import FilterListApp from './FilterListApp';
import FetchApp from './FetchApp';
import ErrorApp from './ErrorApp';
import ErrorBoundary from './ErrorBoundary';

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
        <FetchApp/>
        <ErrorBoundary>
          <ErrorApp/>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
