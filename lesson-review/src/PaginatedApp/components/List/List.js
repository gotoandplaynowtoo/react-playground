import React from 'react';
import PropTypes from 'prop-types';
import Li from 'PaginatedApp/components/Li';
import Ul from 'PaginatedApp/components/Ul';

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
  data: PropTypes.array
};

List.defaultProps = {
  data: []
};

export default List;
