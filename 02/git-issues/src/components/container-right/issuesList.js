import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Button from './button';
import Issue from './issue';
import Avatar from './avatar';

import Column from './../elements/column';
import Row from './../elements/row';

const IssuesListContainer = styled(Row)`
  flex-wrap: wrap;
`;

const IssuesList = ({ issues } = []) => (
  <IssuesListContainer>
    <Issue>
      <Avatar src="https://avatars2.githubusercontent.com/u/29647600?v=4" />
      <Column>
        <strong>react-navigation</strong>
        <small>reacts</small>
        <Button>
          <i className="fa fa-edit" />
          Abrir issue
        </Button>
      </Column>
    </Issue>
    <Issue>
      <Avatar src="https://avatars2.githubusercontent.com/u/29647600?v=4" />
      <Column>
        <strong>react-navigation</strong>
        <small>reacts</small>
        <Button>
          <i className="fa fa-edit" />
          Abrir issue
        </Button>
      </Column>
    </Issue>
    <Issue>
      <Avatar src="https://avatars2.githubusercontent.com/u/29647600?v=4" />
      <Column>
        <strong>react-navigation</strong>
        <small>reacts</small>
        <Button>
          <i className="fa fa-edit" />
          Abrir issue
        </Button>
      </Column>
    </Issue>
    <Issue>
      <Avatar src="https://avatars2.githubusercontent.com/u/29647600?v=4" />
      <Column>
        <strong>react-navigation</strong>
        <small>reacts</small>
        <Button>
          <i className="fa fa-edit" />
          Abrir issue
        </Button>
      </Column>
    </Issue>
    <Issue>
      <Avatar src="https://avatars2.githubusercontent.com/u/29647600?v=4" />
      <Column>
        <strong>react-navigation</strong>
        <small>reacts</small>
        <Button>
          <i className="fa fa-edit" />
          Abrir issue
        </Button>
      </Column>
    </Issue>
  </IssuesListContainer>
);

IssuesList.propTypes = {
  issues: PropTypes.array,
};

export default IssuesList;
