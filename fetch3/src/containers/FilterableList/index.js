import React, {Component} from 'react';
import SearchBar from 'components/SearchBar';
import List from 'components/List';
import Button from 'components/Button';
import axios from 'axios';

const DEFAULT_QUERY = 'javascript';
const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';
const PARAM_PAGE = 'page=';

class FilterableList extends Component {

  state = {
    result: null,
    results: null,
    searchTerm: DEFAULT_QUERY,
    searchKey: ''
  };

  // Handlers
  handleFormChange = (e)  => {
    this.setState({
      [e.target.name]: e.target.value
    });

  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { searchTerm, results } = this.state;
    
    if(results[searchTerm]) {
      this.setState({
        searchKey: searchTerm
      });
    } else {
      this.fetchData(searchTerm)
      .then(data => {
        this.cacheResult(data, searchTerm);
      });
    }

  };

  handleLoadMore = (e) => {
    const { 
      searchKey,
      results
    } = this.state;

    this.fetchData(searchKey, results[searchKey].page + 1 )
      .then(data => {
        this.cacheResult(data, searchKey);
      });
  };

  // Mutators
  setResult = (result) => {
    this.setState({
      result
    });
  }

  cacheResult = (newResult, key) => {

    const {
      results
    } = this.state;

    const oldHits = (results && results[key])
      ? results[key].hits
      : [];

    const updateHits = [
      ...oldHits,
      ...newResult.hits,
    ];

    this.setState({
      searchKey: key,
      results: {
        ...results,
        [key]: {
          hits: updateHits,
          page: newResult.page
        }
      }
    });

  };

  appendResult = (result) => {

    const oldHits = (this.state.result && this.state.result.hits)
      ? this.state.result.hits
      : [];
    const updatedHits = [
      ...oldHits,
      ...result.hits
    ];

    this.setState({ 
      result: {
        ...result, 
        hits: updatedHits
      }
    });
  } 

  // Fetching
  fetchData = async (searchTerm, page = 0) => {

    const queryString = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}`;
    let data = null;

    try {
      const response = await axios(queryString);
      const result = response.data;
      data = result;
    } catch(e) {
      console.log(e);
    } 
    return data;

  };

  // Lifecyle
  componentDidMount() {

    const {
      searchTerm
    } = this.state;

    this.fetchData(searchTerm)
      .then(data => {
        this.cacheResult(data, searchTerm);
      }) ;
  }

  render = () => {
    
    const { 
      results, 
      searchTerm, 
      searchKey 
    } = this.state;

    return (
      <div>
        <SearchBar 
          onSubmit={this.handleFormSubmit}
          onChange={this.handleFormChange} 
          defaultValue={searchTerm}
        />
        { results && results[searchKey] && <List data={results[searchKey].hits}/> }
        <Button onClick={this.handleLoadMore}>Load More</Button>
      </div>
    );

  };

}

export default FilterableList;