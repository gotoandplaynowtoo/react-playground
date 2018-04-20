import React from 'react';
import PropTypes from 'prop-types';
import ListItem from 'components/ListItem';

const List = (props) => {
  const { 
    data,
    onItemDismiss
  } = props;

  if(!data) return <div></div>;

  return (
    <div>
      {data.map(item => 
        <ListItem
          key={item.objectID}
          objectID={item.objectID}
          title={item.title}
          url={item.url}
          author={item.author}
          points={item.points}
          onClick={onItemDismiss}
        />
      )}
    </div>
  );
};

List.propTypes = {
  data: PropTypes.array
};

export default List;