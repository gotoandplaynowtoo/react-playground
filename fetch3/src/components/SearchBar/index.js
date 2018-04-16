import React from 'react';
import Input from 'components/Input';
import Button from 'components/Button';
import Wrapper from './Wrapper';

const SearchBar = (props) => {

  const { 
    onSubmit,
    onChange, 
    defaultValue
  } = props

  return (
    <Wrapper>
      <form 
        onSubmit={onSubmit}
        onChange={onChange}
      >
        <Input name='searchTerm' defaultValue={defaultValue}/>
        <Button type='submit'>Search</Button>
      </form>
    </Wrapper>
  );
};

export default SearchBar;