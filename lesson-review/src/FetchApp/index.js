import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = 'http://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_QUERY = 'query=';

class FetchApp extends Component {

  state = {
    list: []
  };

  fetchData = (query = 'javascript') => {
    const queryString = `${BASE_URL}${PATH_SEARCH}?${PARAM_QUERY}${query}`;
    return axios(queryString)
      .then(result => result.data);
  };

  render = () => {
    const {
      list
    } = this.state;

    return (
      <div style={{
        border: '1px solid #222',
        padding: 6
      }}>
        <ul>
          {list.map(item => 
            <li key={item.objectID}>{ item.title }</li>
          )}
        </ul>
      </div>
    );
  };

  componentDidMount = () => {
    this.fetchData()
      .then(data => this.setState({list: data.hits}));
  };
}

export default FetchApp;