import styled from 'styled-components';

const getWidth = (colSpan) => {
  if(!colSpan) return;
  const width = (colSpan / 12) * 100;
  return `width:${width}%`;
};

const LayoutColumn = styled.div`

  padding-left: 15px;
  padding-right: 15px;

  ${ ({xs}) => (xs ? getWidth(xs) : 'width: 100%') }

  @media only screen and (min-width: 768px) {
    ${ ({sm}) => sm && getWidth(sm) }
  }

  @media only screen and (min-width: 992px) {
    ${ ({md}) => md && getWidth(md) }    
  }  

  @media only screen and (min-width: 1200px) {
    ${ ({lg}) => lg && getWidth(lg) }    
  }    

`;

export default LayoutColumn;