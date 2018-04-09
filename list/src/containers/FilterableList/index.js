import React, { Component } from 'react';
import List from 'components/List';
import ListItem from 'components/ListItem';
import Button from 'components/Button';
import SearchInput from 'components/SearchInput';

const books = [
  {id: 0, name: 'Javascript'},
  {id: 1, name: 'PHP'},
  {id: 2, name: 'Node.js'},
];

const filterList = searchTerm => 
  item => item.name.toLowerCase().includes(searchTerm.toLowerCase());

class FilterableList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books,
      searchTerm: ''
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  deleteItem(id) {
    const filteredBooks = this.state.books.filter(item => item.id !== id);
    this.setState({
      books: filteredBooks
    });
  }

  onInputChange(e) {
    this.setState({
      searchTerm: e.target.value
    });
  }

  render() {

    const {
      books,
      searchTerm
    } = this.state;

    return (
      <div>
        <SearchInput onChange={this.onInputChange}/>
        <List>
          {books.filter(filterList(searchTerm)).map(item => 
            <ListItem key={item.id}>
              {item.name}
              <Button onClick={() => this.deleteItem(item.id) }>Delete</Button>
            </ListItem>
          )}
        </List>
      </div>
    );
  }
}

export default FilterableList;