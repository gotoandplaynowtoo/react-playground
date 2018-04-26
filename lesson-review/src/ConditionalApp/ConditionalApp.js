import React from 'react';
import axios from 'axios';
import List from './components/List';

const BASE_URL = 'http://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_QUERY = 'query=';
const DEFAULT_QUERY = 'javascript';

const withLoadingIndicator = (Component) => {
  const EnhancedComponent = ({isLoading, ...props}) => {
    if(!isLoading) return <Component {...props}/>
    return <div><p style={{textAlign: 'center'}}>Loading...</p></div>;
  };
  return EnhancedComponent;
};

const withErrorIndicator = (Component) => {
  const EnhancedComponent = ({isError, ...props}) => {
    if(!isError) return <Component {...props}/>;
    return <div><p style={{textAlign: 'center'}}>Error loading data.</p></div>
  };
  return EnhancedComponent;
};

const ListWithLoadingIndicator = withLoadingIndicator(List);
const ListWithLoadingAndErrorIndicator = withErrorIndicator(ListWithLoadingIndicator)

class ConditionalApp extends React.Component {
  state = {
    data: [],
    isLoading: false,
    isError: false
  };

  fetchData = async (query = DEFAULT_QUERY) => {
    
    const queryString = `${BASE_URL}${PATH_SEARCH}?${PARAM_QUERY}${query}`;
    const response = await axios(queryString);
    const data = await response.data;

    return data;
  };

  componentDidMount = () => {
    this.setState({
      isLoading: true
    });

    this.fetchData()
      .then(data => {
        this.setState({
          data: data.hits,
          isLoading: false
        });
      })
      .catch(e => {
        this.setState({
          isError: true
        });
        console.log(e);
      });
  };

  render = () => {
    const {
      data,
      isLoading,
      isError
    } = this.state;

    return (
      <ListWithLoadingAndErrorIndicator 
        isLoading={isLoading}
        isError={isError}
        data={data}
      />
    );
  };

}

export default ConditionalApp;