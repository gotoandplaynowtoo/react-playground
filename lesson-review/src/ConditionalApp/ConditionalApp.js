import React from 'react';
import axios from 'axios';
import List from './components/List';

const BASE_URL = 'http://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_QUERY = 'query=';
const DEFAULT_QUERY = 'javascript';

class ConditionalApp extends React.Component {
  state = {
    data: []
  };

  fetchData = async (query = DEFAULT_QUERY) => {
    
    const queryString = `${BASE_URL}${PATH_SEARCH}?${PARAM_QUERY}${query}`;
    const response = await axios(queryString);
    const data = await response.data;

    return data;
  };

  componentDidMount = () => {
    this.fetchData()
      .then(data => console.log(data));
  };

  render = () => {
    const {
      data
    } = this.state;

    return (
      <List data={data}/>
    );
  };

}

export default ConditionalApp