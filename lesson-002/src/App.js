import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from 'components/SearchBar';
import VideoList from 'components/VideoList';

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

class App extends Component {

  state = {
    videos: []
  };

  constructor(props) {
    super(props);
    YTSearch({
      key: API_KEY,
      term: 'surfboards'
    }, (videos) => {
      this.setState({
        videos
      });
    });    

  }

  render() {
    return (
      <div className='container'>
        <SearchBar/>
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
