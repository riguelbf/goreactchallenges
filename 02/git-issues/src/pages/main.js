import React from 'react';

import Row from './../components/elements/row';
import ContainerLeft from './../components/container-left/container-left';
import ContainerRight from './../components/container-right/container-right';

const Main = props => (
  <Row>
    <ContainerLeft />
    <ContainerRight />
  </Row>
);

export default Main;
