import React from 'react';
import Input from 'components/Input';
import Button from 'components/Button';

const SearchBar = (props) => {
  return (
    <form>
      <Input placeholder='Search...'/>
      <Button>Search</Button>
    </form>
  );
};

export default SearchBar;