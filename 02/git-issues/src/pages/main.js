import React, { Component } from 'react';

import request from './../services/request';

import Row from './../components/elements/row';
import ContainerLeft from './../components/container-left/container-left';
import ContainerRight from './../components/container-right/container-right';

class Main extends Component {
  state = {
    loading: false,
    repositoryError: false,
    repositoryName: '',
    repositories: [],
    filterIssueType: 'all',
    loadingIssue: false,
    repositorySelected: {},
  };

  handleGetRepositories = async (e) => {
    e.preventDefault();

    try {
      this.setState({ loading: true });
      const response = await request.get(`/repos/${this.state.repositoryName}`);

      this.setState({
        // repositoryName: '',
        repositories: [...this.state.repositories, response.data],
        repositoryError: false,
      });
    } catch (error) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  handleOnChange = (e) => {
    this.setState({ repositoryName: e.target.value });
  };

  handleGetIssues = async (repositoryId) => {
    try {
      this.setState({ loadingIssue: true });

      const repository = this.state.repositories.find(r => r.id === repositoryId);
      const response = await request.get(`/repos/${repository.full_name}/issues?state=${this.state.filterIssueType}`);

      this.setState({
        repositorySelected: {
          id: repository.id,
          avatar_url: repository.organization.avatar_url,
          name: repository.name,
          login: repository.owner.login,
          issues: response.data,
        },
      });
    } catch (error) {
      throw new Error(error);
    } finally {
      this.setState({ loadingIssue: false });
    }
  };

  handleOnChangeFilterIssues = (e, repositoryId) => {
    const selectedIssueType = e.target.value;
    this.setState({ filterIssueType: selectedIssueType });
    this.handleGetIssues(repositoryId);
  };

  handleOpenIssue = (urlIssue) => {
    window.open(urlIssue, '_blank');
  };

  render() {
    return (
      <Row>
        <ContainerLeft
          submit={this.handleGetRepositories}
          error={this.state.repositoryError}
          repositories={this.state.repositories}
          loading={this.state.loading}
          handleOnChange={this.handleOnChange}
          handleGetIssues={this.handleGetIssues}
          loadingIssue={this.state.loadingIssue}
        />
        <ContainerRight
          repositorySelected={this.state.repositorySelected}
          handleOnChangeFilterIssues={this.handleOnChangeFilterIssues}
          handleOpenIssue={this.handleOpenIssue}
        />
      </Row>
    );
  }
}

export default Main;
