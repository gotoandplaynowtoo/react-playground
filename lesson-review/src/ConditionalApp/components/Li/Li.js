import PropTypes from 'prop-types';
import styled from 'styled-components';

const Li = styled.li`
  background: #aaa;
  padding: 6px;
`;

Li.propTypes = {
  children: PropTypes.node
};

export default Li;