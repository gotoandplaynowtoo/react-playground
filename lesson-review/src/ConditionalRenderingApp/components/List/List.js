import React from 'react';
import PropTypes from 'prop-types';
import Ul from './components/Ul';
import Li from './components/Li';

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

// List.propTypes = {
//   data: PropTypes.array.isRequired
// };

export default List;