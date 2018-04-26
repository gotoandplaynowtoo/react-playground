import styled from 'styled-components';
import PropTypes from 'prop-types';

const Li = styled.li`
  background: #eee;
  margin: 4px 0;
  padding: 6px;
`;

Li.propTypes = {
  children: PropTypes.node
};

export default Li;