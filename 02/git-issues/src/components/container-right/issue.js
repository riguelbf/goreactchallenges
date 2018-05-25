import styled from 'styled-components';
import Row from '../elements/row';

const Issue = styled(Row)`
  margin: 2px 2px 2px 2px;
  padding: 15px;
  width: calc(100% / 3);
  height: 105px;
  background-color: #fff;

  & > div {
    margin-left: 5px;
  }

  strong {
    width: 95%;
    height: 25%;
    font-size: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export default Issue;
