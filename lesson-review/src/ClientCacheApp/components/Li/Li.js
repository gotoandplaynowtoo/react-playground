import styled from 'styled-components';
import PropTypes from 'prop-types';

const Li = styled.li`
  background: #aaa;
  margin: 4px 0;
  padding: 4px;
`;

Li.propTypes = {
  children: PropTypes.node
};

Li.defaultProps = {
  children: 'Li place holder'
};

export default Li;