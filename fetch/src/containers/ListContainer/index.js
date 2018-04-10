import React, {Component} from 'react';
import ListItem from 'components/ListItem';
import List from 'components/List';

const BASE_URL = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';
const DEFAULT_QUERY = 'redux';

class ListContainer extends Component{

  constructor(props) {

    super(props);
    this.state = {
      list: null
    };
    
    this.setList = this.setList.bind(this);
  }

  setList(data) {
    this.setState({
      list: data.hits
    });
  }

  async fetchData() {

    const query = `${BASE_URL}${PATH_SEARCH}?${PARAM_SEARCH}?${DEFAULT_QUERY}`;

    try {
        const data = await fetch(query);
        const jsonData = await data.json();      
        this.setList(jsonData);
    } catch(e) {
      console.log(e);
    }

  }

  componentDidMount() {
    this.fetchData();
  }

  render() {

    const {list} = this.state;

    if(!list) return <p>Loading...</p>;

    return (
      <List>
        {list.map(item => 
          <ListItem key={item.objectID}>{item.title}</ListItem>
        )}
      </List>
    );

  }

}

export default ListContainer;