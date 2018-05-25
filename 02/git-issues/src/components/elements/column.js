import styled from 'styled-components';

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  padding: 0 0 0 2px;
  background-color: transparent;
  width: ${props => (props.width ? props.width : 'auto')};
`;

export default Column;
