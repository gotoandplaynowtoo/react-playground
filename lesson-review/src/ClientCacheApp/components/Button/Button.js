import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  background: #aaa;
  border: 1px solid #eee;
  padding: 4px 6px;
`;

Button.propTypes = {
  children: PropTypes.node
};

Button.defaultProps = {
  children: 'Button'
};

export default Button;