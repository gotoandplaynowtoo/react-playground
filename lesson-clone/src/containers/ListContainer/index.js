import React, { Component } from 'react';
import List from 'components/List';

const data = [
  {
    objectID: 0,
    title: 'The quick brown',
    url: 'google.com',
    author: 'mark',
    points: 100
  }
];

class ListContainer extends Component {
  onItemDismiss = (e) => {

  };

  render = () => {
    return (
      <List
        data={data}
        onItemDismiss={this.onItemDismiss}
      />
    );
  };
}

export default ListContainer;