import React from 'react';
import ExtendedLi from './ExtendedLi';

const ListItem = (props) => {
  return <ExtendedLi>{props.content}</ExtendedLi>
};

export default ListItem;