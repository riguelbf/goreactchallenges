import React from 'react';
import styled from 'styled-components';

import Column from '../elements/column';
import Row from '../elements/row';

import Ul from '../elements/ul';

const Logo = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 3px;
  margin: 0 3px;
  border: 1px solid #000;
`;

const Icon = styled.i`
  color: #c3baba;
  font-size: 40px;
  vertical-align: -webkit-baseline-middle;
`;

const RepositoryList = ([...repositories] = []) => (
  <Column>
    <Ul>
      {repositories.map(repository => (
        <li>
          <Row>
            <Logo src={repository.urlLogo} alt={repository.company} />
            <Column width="235px">
              <bold>{repository.repositoryName}</bold>
              <small>{repository.company}</small>
            </Column>
            <Icon className="fa fa-angle-right" />
          </Row>
        </li>
      ))}
    </Ul>
  </Column>
);

export default RepositoryList;
