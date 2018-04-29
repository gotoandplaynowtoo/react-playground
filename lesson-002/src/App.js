import React, { Component } from 'react';
import _ from 'lodash';
import 'style/style.css';
import YTSearch from 'youtube-api-search';
import SearchBar from 'components/SearchBar';
import VideoList from 'components/VideoList';
import VideoDetail from 'components/VideoDetail';

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

class App extends Component {

  state = {
    videos: [],
    selectedVideo: null
  };

  constructor(props) {
    super(props);

    this.videoSearch('surfboards');
  }

  videoSearch = (term) => {
    YTSearch({
      key: API_KEY,
      term: term
    }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });    
  };

  render() {

    const videoSearch = _.debounce((term) => {
      this.videoSearch(term);
    }, 300);

    return (
      <div className='container'>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;
