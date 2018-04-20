import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import Title from './Title';
import Details from './Details';
import Button from 'components/Button';

const ListItem = (props) => {
  const {
    objectID,
    title,
    url,
    author,
    points,
    onClick
  } = props;

  return (
    <Wrapper>
      <div>
        <Title><a href={ url }>{ title }</a></Title>
        <Details>
          <div>author: {author}</div>
          <div>|</div>
          <div>points: {points}</div>
        </Details>
      </div>
      <div>
        <Button value={objectID} onClick={onClick}>Dismiss</Button>
      </div>
    </Wrapper>
  );
};

ListItem.propTypes = {
  onClick: PropTypes.func
};

export default ListItem;