import styled from 'styled-components';
import PropTypes from 'prop-types';

const Ul = styled.ul`
  list-style: none;
`;

Ul.propTypes = {
  children: PropTypes.node
};

export default Ul;