import React, { Component } from 'react';

import ConditionalApp from './ConditionalApp';
import DebounceApp from './DebounceApp';
import ErrorApp from './ErrorApp';
import ErrorBoundary from './ErrorBoundary';
import FilterListApp from './FilterListApp';
import FetchApp from './FetchApp';
import FetchApp2 from './FetchApp2';
import FormApp from './FormApp';
import FormApp2 from './FormApp2';
import ListApp from './ListApp';
import StateApp from './StateApp';
import UnidirectionalApp from './UnidirectionalApp';

class App extends Component {
  render() {
    return (
      <div>
        <ConditionalApp/>
      </div>
    );
  }
}

export default App;
