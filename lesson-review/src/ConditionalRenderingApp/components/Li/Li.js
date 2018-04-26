import styled from 'styled-components';
import PropTypes from 'prop-types';

const Li = styled.li`
  background: #aaa;
`;

Li.propTypes = {
  children: PropTypes.node
};

export default Li;