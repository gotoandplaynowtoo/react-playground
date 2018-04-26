import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  background: #eee;
  border: 1px solid #aaa;
  padding: 4px 6px;
`;

Button.propTypes = {
  children: PropTypes.node
};

export default Button;