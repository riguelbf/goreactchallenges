import React from 'react';
import PropTypes from 'prop-types';

import IssuesList from './issuesList';
import Container from './container';
import Header from './header';
import FilterStatus from './filterStatus';

import Column from './../elements/column';
import Row from './../elements/row';

const ContainerRight = ({ handleOnChangeFilterIssues }) => (
  <Container>
    <Header>
      <Row>
        <img src="https://avatars2.githubusercontent.com/u/29647600?v=4" alt="" />
        <Column>
          <strong>react-navigation</strong>
          <small>reacts</small>
        </Column>
        <FilterStatus onChange={e => handleOnChangeFilterIssues(e)}>
          <option value="all">All</option>
          <option value="open">Open</option>
          <option value="closed">Closed</option>
        </FilterStatus>
      </Row>
    </Header>
    <IssuesList />
  </Container>
);

ContainerRight.propTypes = {
  handleOnChangeFilterIssues: PropTypes.func.isRequired,
};

export default ContainerRight;
