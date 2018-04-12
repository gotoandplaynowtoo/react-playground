import React from 'react';
import Button from 'components/Button';
import StyledInput from './StyledInput';
import Wrapper from './Wrapper';

const SearchBar = (props) => {
  const {onSubmit, onChange, value} = props;
  return (
    <Wrapper>
      <form onSubmit={onSubmit}>
        <StyledInput onChange={onChange} value={value}/>
        <Button type='submit'>Search</Button>
      </form>
    </Wrapper>
  );
}



export default SearchBar;