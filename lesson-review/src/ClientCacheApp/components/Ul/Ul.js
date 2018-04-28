import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Ul = styled.ul`
  padding: 4;
`;

Ul.propTypes = {
  children: PropTypes.node
};

Ul.defaultProps = {
  children: <li>Sample item</li>
};

export default Ul;