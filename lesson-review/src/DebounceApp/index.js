import React from 'react';
import _ from 'lodash';
import axios from 'axios';

const BASE_URL = 'http://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_QUERY = 'query=';

class DebounceApp extends React.Component {

  state = {
    search: '',
    list: []
  };

  doAPIRequest = _.debounce((query) => {
    const queryString = `${BASE_URL}${PATH_SEARCH}?${PARAM_QUERY}${query}`;
    if(!query.trim()) return;
    axios(queryString).then(result => {
      const hits = result.data.hits;
      this.setState({
        list: hits
      });
    });
  }, 1000);

  onChange = (e) => {
    this.setState({
      search: e.target.value
    });
    this.doAPIRequest(e.target.value);
  };

  onSubmit = (e) => {
    e.preventDefault();
  };

  render = () => {
    const {list} = this.state;

    return (
      <div style={{
        padding: 8,
        border: '1px solid #222',
        margin: '8px 0'
      }}>
        Debouncing Input
        <form onSubmit={this.onSubmit}>
          <input 
            type='text'
            value={this.state.search}
            onChange={this.onChange}
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
}

export default DebounceApp;