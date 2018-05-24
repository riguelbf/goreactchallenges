import React, { Component } from 'react';

import Row from './../components/elements/row';
import ContainerLeft from './../components/container-left/container-left';
import ContainerRight from './../components/container-right/container-right';

class Main extends Component {
  state = {};
  render() {
    return (
      <Row>
        <ContainerLeft />
        <ContainerRight />
      </Row>
    );
  }
}

export default Main;
