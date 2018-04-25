import React, { Component } from 'react';
import ListApp from './ListApp';
import StateApp from './StateApp';
import UnidirectionalApp from './UnidirectionalApp';
import FormApp from './FormApp';
import FormApp2 from './FormApp2';
import FilterListApp from './FilterListApp';
import FetchApp from './FetchApp';
import FetchApp2 from './FetchApp2';
import ErrorApp from './ErrorApp';
import ErrorBoundary from './ErrorBoundary';
import DebounceApp from './DebounceApp';

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
        <FetchApp2/>
        <DebounceApp/>
      </div>
    );
  }
}

export default App;
