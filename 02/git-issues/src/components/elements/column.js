import styled from 'styled-components';

const Column = styled.div`
  height: auto;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  padding: 5px;
  margin: 2px;
  background-color: transparent;
  width: ${props => (props.width ? props.width : 'auto')};
`;

export default Column;
