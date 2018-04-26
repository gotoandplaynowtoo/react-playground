import React from 'react';
import axios from 'axios';
import List from './components/List';
import Button from './components/Button';

const BASE_URL = 'https://hn.algolia.com/api/v1'
const PATH_SEARCH = '/search';
const PARAM_QUERY = 'query=';
const PARAM_PAGE = 'page=';
const DEFAULT_QUERY = 'javascript';

const withLoadingIndicator = (WrappedComponent) => {
  const Enhanced = ({isLoading, ...props}) => {
    if(isLoading) return <p>Loading...</p>
    return <WrappedComponent {...props}/>
  };

  return Enhanced;
};

const ButtonWithLoadingIndicator = withLoadingIndicator(Button);

class PaginatedApp extends React.Component {
  state = {
    query: 'javascript',
    data: null,
    nextPage: 1,
    isLoading: false
  };

  fetchData = async (query = DEFAULT_QUERY, page = 0) => {
    const queryString = `${BASE_URL}${PATH_SEARCH}?${PARAM_QUERY}${query}&${PARAM_PAGE}${page}`;
    const response = await axios(queryString);
    const data = response.data;

    return data;
  };

  onClickLoadMore = (e) => {
    this.setState({
      isLoading: true
    });
    this.fetchData(this.state.query, this.state.nextPage)
      .then(responseData => {
        this.setState((prevState, props) => {
          const {
            data,
            nextPage
          } = prevState;

          const updatedHits = [
            ...data.hits,
            ...responseData.hits
          ];

          return {
            data: {
              ...responseData,
              hits: updatedHits
            },
            nextPage: nextPage + 1,
            isLoading: false
          }
        });
      });
  };

  componentDidMount = () => {
    this.fetchData()
      .then(data => {
        this.setState({data: data});
      });
  };

  render = () => {
    const {
      data,
      isLoading
    } = this.state;

    if(!data) return null;

    return (
      <div>
        <List data={data.hits}/>
        <ButtonWithLoadingIndicator
          isLoading={isLoading}
          onClick={this.onClickLoadMore}
        >
          Load More
        </ButtonWithLoadingIndicator>
      </div>
    );
  };
}

export default PaginatedApp;