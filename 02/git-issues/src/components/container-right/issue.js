import styled from 'styled-components';
import Row from '../elements/row';

const Issue = styled(Row)`
  margin: 2px 2px 2px 2px;
  padding: 15px;
  width: 33%;
  height: 12.5%;
  background-color: #fff;

  & > div {
    margin-left: 5px;
  }

  strong {
    max-width: 60%;
    height: 25%;
    font-size: 15px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export default Issue;
