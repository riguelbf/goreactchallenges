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
    issues: [],
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

  handleGetIssues = async (e) => {
    e.preventDefault();
    try {
      this.setState({ loadingIssue: true });
      const response = await request.get(`/repos/${this.state.repositoryName}/issues?state=${this.state.filterIssueType}`);
      console.log(response.data);
      this.setState({
        issues: [...this.state.issues, response.data],
      });
    } catch (error) {
      console.log('erro ');
    } finally {
      this.setState({ loadingIssue: false });
    }
  };

  handleOnChangeFilterIssues = (e) => {
    const selectedIssueType = e.target.value;
    this.setState({ filterIssueType: selectedIssueType });
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
        <ContainerRight handleOnChangeFilterIssues={this.handleOnChangeFilterIssues} />
      </Row>
    );
  }
}

export default Main;
