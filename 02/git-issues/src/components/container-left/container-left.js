import React from 'react';
import PropTypes from 'prop-types';

import Container from './container';
import Row from '../elements/row';
import Button from '../elements/button';
import Input from '../elements/input';

import RepositoryList from './repositoryList';

const ContainerLeft = props => (
  <Container>
    <form onSubmit={e => props.submit(e)}>
      <Row>
        <Input
          placeholder="New repository"
          onChange={e => props.handleOnChange(e)}
          error={props.repositoryError}
        />
        <Button width="30px">
          {props.loading ? <i className="fa fa-spinner fa-pulse" /> : <i className="fa fa-plus" />}
        </Button>
      </Row>
    </form>
    <RepositoryList
      repositories={props.repositories}
      handleGetIssues={props.handleGetIssues}
      loadingIssue={props.loadingIssue}
    />
  </Container>
);

ContainerLeft.defaultProps = {
  repositoryError: false,
  loading: false,
  repositories: [],
  loadingIssue: false,
};

ContainerLeft.propTypes = {
  handleGetIssues: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  repositoryError: PropTypes.bool,
  loading: PropTypes.bool,
  loadingIssue: PropTypes.bool,
  repositories: PropTypes.arrayOf(PropTypes.shape([])),
};

export default ContainerLeft;
