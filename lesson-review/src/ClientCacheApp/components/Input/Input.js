import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = styled.input`
  padding: 4px 6px;
  border: 1px solid #eee;
`;

Input.propTypes = {
  children: PropTypes.node
};

export default Input;