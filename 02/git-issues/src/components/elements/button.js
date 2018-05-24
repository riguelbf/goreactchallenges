import styled from 'styled-components';

const ButtonStyled = styled.button`
  width: ${props => (props.width ? props.width : '100%')};
  min-width: 50px;
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : '#59ea9a')};
  border-radius: 3px;
  height: 40px;
  margin: 0 0 10px 3px;
  color: #fff;
  &:hover {
    background-color: #c7c7c7;
    text-decoration: none;
  }
`;

export default ButtonStyled;
