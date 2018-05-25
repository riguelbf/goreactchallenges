import styled from 'styled-components';

import Column from '../elements/column';

const Container = styled(Column)`
  min-height: calc(100vh - 10px);
  width: 100%;
  left: 0;
  background-color: #eee;
`;

export default Container;
