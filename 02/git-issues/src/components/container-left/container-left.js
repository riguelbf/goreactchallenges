import React, { Component } from 'react';

import request from '../../services/request';

import Container from './container';
import Row from '../elements/row';
import Button from '../elements/button';
import Input from '../elements/input';

import RepositoryList from './repositoryList';

class ContainerLeft extends Component {
  state = {
    repositoryError: false,
    repositoryName: '',
    repositories: [],
  };

  handleGetRepositories = async (e) => {
    e.preventDefault();

    try {
      const response = await request.get(`/repos/${this.state.repositoryName}`);

      this.setState({
        repositoryName: '',
        repositories: [...this.state.repositories, response.data],
        repositoryError: false,
      });
    } catch (error) {
      this.setState({ repositoryError: true });
    }
  };

  render() {
    return (
      <Container>
        <form onSubmit={this.handleGetRepositories}>
          <Row>
            <Input
              placeholder="New repository"
              onChange={e => this.setState({ repositoryName: e.target.value })}
              error={this.state.repositoryError}
            />
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
