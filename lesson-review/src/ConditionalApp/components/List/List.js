import React from 'react';
import PropTypes from 'prop-types';
import Li from 'ConditionalApp/components/Li';
import Ul from 'ConditionalApp/components/Ul';

const List = (props) => {
  const { 
    data
  } = props;

  return (
    <Ul>
      {data.map(item => 
        <Li key={item.objectID}>{item.title}</Li>
      )}
    </Ul>
  );
};

List.prototype = {
  data: PropTypes.array
};

List.defaultProps = {
  data: []
};

export default List;