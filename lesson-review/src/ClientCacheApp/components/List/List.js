import React from 'react';
import PropTypes from 'prop-types';
import Ul from '../Ul';
import Li from '../Li';

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

List.propTypes = {
  data: PropTypes.arrayOf(PropTypes.node)
};

List.defaultProps = {
  data: []
};

export default List;