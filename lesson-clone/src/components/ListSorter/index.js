import React from 'react';
import Button from 'components/ListSorter/Button';

const ListSorter = (props) => {

  const { 
    activeSort,
    onClick 
  } = props;

  return (
    <div>
      Sort by: 
      <Button value='title' focused={activeSort === 'title'} onClick={onClick}>Title</Button>
      <Button value='author' focused={activeSort === 'author'} onClick={onClick}>Author</Button>
      <Button value='points'  focused={activeSort === 'points'} onClick={onClick}>Points</Button>
    </div>
  );
};

export default ListSorter;