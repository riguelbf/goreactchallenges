import React, { Component } from 'react';

import Container from './container';
import Row from '../elements/row';
import Button from '../elements/button';
import Input from '../elements/input';

import RepositoryList from './repositoryList';

class ContainerLeft extends Component {
  state = {};

  render() {
    return (
      <Container>
        <Row>
          <Input placeholder="New repository" />
          <Button width="30px">
            <i className="fa fa-plus" />
          </Button>
        </Row>
        <RepositoryList />
      </Container>
    );
  }
}

export default ContainerLeft;
