import React, {Component} from 'react';
import List from 'components/List';
import SearchBar from 'components/SearchBar';
import Button from 'components/Button';

const BASE_URL = 'https://hn.algolia.com/api/v1';
const SEARCH_PATH = '/search';
const PARAM_QUERY = 'query=';
const PARAM_PAGE = 'page=';

class FilterableResult extends Component {

  constructor(props) {

    super(props);

    this.state = {
      data: null,
      searchTerm: 'redux'
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClickMore = this.handleClickMore.bind(this);

  }

  setData(result) {

    const {page} = result;
    const oldHits = (page !== 0)
      ? this.state.data.hits
      : [];

    const updatedHits = [
      ...oldHits,
      ...result.hits
    ];
      
    this.setState({
      data: {
        ...result,
        hits: updatedHits
      }
    });

  }

  async fetchData(searchTerm, page = 0) {
    const queryString = `${BASE_URL}${SEARCH_PATH}?${PARAM_QUERY}${searchTerm}&${PARAM_PAGE}${page}`;
    
    try {
      const result = await fetch(queryString);
      const json = await result.json();
      this.setData(json);
    } catch(e) {
      console.error(e);
    }

  }

  handleInputChange(e) {
    const {value} = e.target;
    this.setState({
      searchTerm: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.fetchData(this.state.searchTerm);
  }

  handleClickMore(e) {
    this.fetchData(this.state.searchTerm, this.state.data.page + 1);
  }

  componentDidMount() {
    this.fetchData(this.state.searchTerm);
  }

  render() {
    const { data, searchTerm } = this.state;
    return (
      <div>
        <SearchBar 
          onSubmit={this.handleSubmit}
          onChange={this.handleInputChange} 
          value={searchTerm}
        />
        {data 
          ? <List data={data.hits} /> 
          : <p>Loading...</p>
        }
        <Button type='button' onClick={this.handleClickMore}>More Result</Button>
      </div>
    );
  }

}

export default FilterableResult;