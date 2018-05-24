import styled from 'styled-components';

const Input = styled.input`
  width: -webkit-fill-available;
  height: 40px;
  padding: 0 20px;
  margin: 0 0 10px;
  background-color:#EEE
  border: ${props => (props.error ? '2px solid #F00' : 0)};
`;

export default Input;
