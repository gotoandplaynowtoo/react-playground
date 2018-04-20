import Button from 'components/Button';

const XButton = Button.extend`
  border: 1px solid ${ props => props.focused ? '#222' : '#aaa'};
`;

export default XButton;
