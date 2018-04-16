import styled from 'styled-components';

const maxWidth = '1140px';
const maxPercent = '100%';
const paddingLeft = '15px';
const paddingRight = '15px';

const Layout = styled.div`
  padding-left: ${paddingLeft};
  padding-right: ${paddingRight};
  margin-left: auto;
  margin-right: auto;
  max-width: ${ props => props.fluid === false 
    ? maxWidth
    : maxPercent 
  }
  width: ${ props => props.fluid === false 
    ? maxWidth
    : maxPercent
  }
`;

export default Layout;