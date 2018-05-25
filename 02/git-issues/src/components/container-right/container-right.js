import React from 'react';
import PropTypes from 'prop-types';

import IssuesList from './issuesList';
import Container from './container';
import Header from './header';
import FilterStatus from './filterStatus';

import Column from './../elements/column';
import Row from './../elements/row';

const ContainerRight = ({ repositorySelected, handleOnChangeFilterIssues, handleOpenIssue }) => (
  <Container>
    <Header>
      <Row>
        <img src={repositorySelected.avatar_url} alt={repositorySelected.name} />
        <Column>
          <strong>{repositorySelected.name}</strong>
          <small>{repositorySelected.login}</small>
        </Column>
        <FilterStatus onChange={e => handleOnChangeFilterIssues(e, repositorySelected.id)}>
          <option value="all">All</option>
          <option value="open">Open</option>
          <option value="closed">Closed</option>
        </FilterStatus>
      </Row>
    </Header>
    <IssuesList
      repositoryName={repositorySelected.fullName}
      issues={repositorySelected.issues}
      handleOpenIssue={handleOpenIssue}
    />
  </Container>
);

ContainerRight.defaultProps = {
  repositorySelected: {},
};

ContainerRight.propTypes = {
  handleOnChangeFilterIssues: PropTypes.func.isRequired,
  handleOpenIssue: PropTypes.func.isRequired,
  repositorySelected: PropTypes.shape({}),
};

export default ContainerRight;
