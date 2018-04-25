import React from 'react';

const BASE_URL = 'http://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_QUERY = 'query=';
const DEFAULT_QUERY = 'react.js'

class FetchApp2 extends React.Component {
  state = {
    searchTerm: DEFAULT_QUERY,
    list: []
  };

  // Methods
  fetchData = async (query = DEFAULT_QUERY) => {
    const queryString = `${BASE_URL}${PATH_SEARCH}?${PARAM_QUERY}${query}`;
    const result = await fetch(queryString);
    const data = await result.json();

    return data;
  };

  setList = (newList) => {
    this.setState({
      list: newList
    });
  };

  // Events
  onFormSubmit = (e) => {
    e.preventDefault();
    this.fetchData(this.state.searchTerm)
      .then(data => {
        this.setList(data.hits);
      })
      .catch(e => {
        alert('Oooops! something went wrong');
      });
  };

  onFormChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    this.setState({
      [key]: value
    });
  };

  // Lifecycle
  render = () => {
    const {
      list,
      searchTerm
    } = this.state;

    return (
      <div style={{
        border: '1px solid #222',
        padding: 6
      }}>
        <form onSubmit={this.onFormSubmit}>
          <input 
            type='text'
            value={searchTerm}
            name='searchTerm'
            onChange={this.onFormChange}
          />
        </form>
        <ul>
          {list.map(item => 
            <li key={item.objectID}>{item.title}</li>
          )}
        </ul>
      </div>
    );
  };

  componentDidMount = () => {
    this.fetchData()
      .then(data => {
        this.setList(data.hits);
      })
      .catch((e) => {
        alert('Oooops! something went wrong');
      });
  };

}

export default FetchApp2;