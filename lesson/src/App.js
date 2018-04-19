import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './App.css';

const DEFAULT_QUERY = 'redux';
const DEFAULT_HPP = '100';

const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';
const PARAM_PAGE = 'page=';
const PARAM_HPP = 'hitsPerPage=';

class App extends Component {

  _isMounted = false;

  constructor(props) {
    super(props);

    this.state = {
      results: null,
      searchKey: '',
      searchTerm: DEFAULT_QUERY,
      error: null
    };

    this.needToSearchTopStories = this.needToSearchTopStories.bind(this);
    this.setSearchTopStories = this.setSearchTopStories.bind(this);
    this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  needToSearchTopStories(searchTerm) {
    return !this.state.results[searchTerm];
  }

  fetchSearchTopStories(searchTerm, page = 0) {
    axios(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`)
      .then(result => this._isMounted && this.setSearchTopStories(result.data))
      .catch(error => this._isMounted && this.setState({error}));
  }

  onSearchSubmit(e) {
    const {searchTerm} = this.state;
    this.setState({searchKey: searchTerm});
    if(this.needToSearchTopStories(searchTerm)) {
      this.fetchSearchTopStories(searchTerm);
    }
    e.preventDefault();
  }

  setSearchTopStories(result) {
    
    const {hits, page} = result;
    const {searchKey, results} = this.state;

    const oldHits = results && results[searchKey] 
      ? results[searchKey].hits
      : [];
      
    const updatedHits = [
      ...oldHits,
      ...hits
    ];
    
    this.setState({
      results: {
        ...results,
        [searchKey]: {hits: updatedHits, page}
      }
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;
    const { searchTerm } = this.state;
    this.setState({searchKey: searchTerm});
    this.fetchSearchTopStories(searchTerm);
  }

  onDismiss(id) {
    const {searchKey, results} = this.state;
    const {hits, page} = results[searchKey];

    const isNotId = item => item.objectID !== id;
    const updatedHits = hits.filter(isNotId);

    this.setState({ 
      results: {
        ...results,
        [searchKey]: {hits: updatedHits, page}
      }
    });
  }

  onSearchChange(event) {
    this.setState({
      searchTerm: event.target.value
    });
  }

  render() {

    const {
      searchTerm,
      results,
      searchKey,
      error
    } = this.state;

    const page = (
      results && 
      results[searchKey] &&
      results[searchKey].page
    ) || 0;

    const list = (
      results &&
      results[searchKey] &&
      results[searchKey].hits
    ) || [];

    return (
      <div className='page'>
        <div className='interactions'>
          <Search
            value={searchTerm} 
            onChange={this.onSearchChange}
            onSubmit={this.onSearchSubmit}
          >
            Search
          </Search>
        </div>
        { error 
            ? <div className='interactions'>
                <p>Something went wrong.</p>
              </div>
            : <Table
                list={list}
                onDismiss={this.onDismiss}
              />
        }
        <div className='interactions'>
          <Button onClick={() => this.fetchSearchTopStories(searchKey, page + 1)}>More</Button>
        </div>
      </div>
    );
  }
}

/*
const Search = ({
  value,
  onChange,
  onSubmit,
  children
}) => 
  <form onSubmit={onSubmit}>
    <input 
      type="text" 
      value={value}
      onChange={onChange}
    />
    <button type='submit'>{children}</button>
  </form>;
*/


/*
class Search extends Component {

  componentDidMount() {
    if(this.input) {
      this.input.focus();
    }
  }

  render() {
    const {
      value,
      onChange,
      onSubmit,
      children
    } = this.props;

    return (
      <form onSubmit={onSubmit}>
        <input 
          type="text" 
          value={value}
          onChange={onChange}
          ref={(node) => {this.input = node;}}
        />
        <button type='submit'>{children}</button>
      </form>      
    );
  }
}
*/

const Search = ({
  value,
  onChange,
  onSubmit,
  children
}) => {
  let input;
  return (
    <form onSubmit={onSubmit}>
      <input 
        type="text" 
        value={value}
        onChange={onChange}
        ref={(node) => {input = node}}
      />
      <button type='submit'>{children}</button>
    </form>
  );
};

Search.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func
};

const Table = ({
  list,
  onDismiss
}) => {

  const largeColumn = {width: '40%'};
  const midColumn = {width: '30%'};
  const smallColumn = {width: '10%'};

  return <div className='table'>
    {list.map(item => 
      <div key={item.objectID} className='table-row'>
        <span style={largeColumn}><a href={item.url}>{item.title}</a></span>
        <span style={midColumn}>{item.author}</span>
        <span style={smallColumn}>{item.num_comments}</span>
        <span style={smallColumn}>{item.points}</span>
        <span>
          <Button 
            onClick={ () => onDismiss(item.objectID) }
            className='button-inline'
          >
            Dismiss
          </Button>
        </span>
      </div>
    )}
  </div>;
  
}

Table.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    objectID: PropTypes.string.isRequired,
    author: PropTypes.string,
    url: PropTypes.string,
    num_comments: PropTypes.number,
    points: PropTypes.number
  })).isRequired,
  onDismiss: PropTypes.func.isRequired
};

const Button = ({
  onClick,
  className,
  children
}) => 
  <button 
    onClick={onClick}
    className={className}
    type="button"
  >
    {children}
  </button>;

Button.defaultProps = {
  className: ''
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default App;

export {
  Button,
  Search,
  Table
};