import React, { Component } from 'react';

import Container from './container';
import Row from '../elements/row';
import Button from '../elements/button';
import Input from '../elements/input';

import RepositoryList from './repositoryList';

class ContainerLeft extends Component {
  state = {
    repositories: [
      {
        id: 1,
        urlLogo: 'xxx',
        repositoryName: 'xxx',
        company: 'xxx',
      },
      {
        id: 2,
        urlLogo: 'xxx',
        repositoryName: 'xxx',
        company: 'xxx',
      },
      {
        id: 3,
        urlLogo: 'xxx',
        repositoryName: 'xxx',
        company: 'xxx',
      },
      {
        id: 4,
        urlLogo: 'xxx',
        repositoryName: 'xxx',
        company: 'xxx',
      },
    ],
  };

  render() {
    return (
      <Container>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log('test event');
          }}
        >
          <Row>
            <Input placeholder="New repository" />
            <Button width="30px">
              <i className="fa fa-plus" />
            </Button>
          </Row>
        </form>
        <RepositoryList repositories={this.state.repositories} />
      </Container>
    );
  }
}

export default ContainerLeft;
