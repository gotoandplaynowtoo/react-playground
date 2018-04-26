import PropTypes from 'prop-types';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  padding: 6px;
`;

Ul.propTypes = {
  children: PropTypes.node
};

export default Ul;