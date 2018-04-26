import styled from 'styled-components';
import PropTypes from 'prop-types';

const Ul = styled.ul`
  list-style: none;
  padding: 4px;
`;

Ul.propTypes = {
  children: PropTypes.node
};

export default Ul;