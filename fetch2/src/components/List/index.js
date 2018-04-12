import React from 'react';
import Li from 'components/Li';
import Ul from 'components/Ul';

const List = (props) => {
  const {data} = props;
  return (
    <Ul>
      {data.map(item => 
        <Li key={item.objectID}>{item.title}</Li>
      )}
    </Ul>
  );
};

export default List;