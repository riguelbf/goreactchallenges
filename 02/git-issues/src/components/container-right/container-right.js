import React from 'react';

import IssuesList from './issuesList';
import Container from './container';
import Header from './header';

import Logo from '../container-left/logo';
import FilterStatus from './filterStatus';

import Column from './../elements/column';
import Row from './../elements/row';

const ContainerRight = () => (
  <Container>
    <Header>
      <Row>
        <img src="https://avatars2.githubusercontent.com/u/29647600?v=4" alt="" />
        <Column>
          <strong>react-navigation</strong>
          <small>reacts</small>
        </Column>
        <FilterStatus>
          <option>Op 1</option>
          <option>Op 2</option>
          <option>Op 3</option>
        </FilterStatus>
      </Row>
    </Header>
    <IssuesList />
  </Container>
);

export default ContainerRight;
