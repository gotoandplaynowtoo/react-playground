import React from 'react';
import ListItem from 'components/ListItem';
import ExtendedUl from './ExtendedUl';

const List = (props) => {

  const { data } = props;
  
  return (
    <ExtendedUl>
      {data.map(item => 
        <ListItem key={item.objectID} content={item.title} />
      )}
    </ExtendedUl>
  );
};

export default List;
