import React, { Component } from 'react';

const list = [
  {
    objectID: 0,
    title: 'Javascript'
  },
  {
    objectID: 1,
    title: 'Redux'
  },
  {
    objectID: 2,
    title: 'Flux'
  }  
];

const searchFilter = (searchTerm) =>
  (item) => item.title.toLowerCase().includes(searchTerm.toLowerCase());

class FilterListApp extends Component {
  state = {
    list,
    searchTerm: ''
  };

  onChangeForm = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
  };

  render = () => {
    const {
      list,
      searchTerm,
    } = this.state;

    return (
      <div>
        <p>{this.state.name}</p>
        <form onSubmit={this.onFormSubmit}>
          <input 
            type="text"
            name='searchTerm'
            value={searchTerm}
            onChange={this.onChangeForm}
          />
        </form>
        <ul>
          {list.filter(searchFilter(searchTerm)).map(item => 
            <li key={item.objectID}>{item.title}</li>
          )}
        </ul>
      </div>
    );
  };

}

export default FilterListApp;