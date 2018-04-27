import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from 'components/SearchBar';

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
class App extends Component {
  render() {
    return (
      <div>
        <SearchBar/>
      </div>
    );
  }
}

export default App;
