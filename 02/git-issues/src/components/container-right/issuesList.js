import React from 'react';
import PropTypes from 'prop-types';

import Button from './button';
import Issue from './issue';
import Avatar from './avatar';

import Column from './../elements/column';
import Row from './../elements/row';

const IssuesList = ({ issues } = []) => (
  <Row>
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
  </Row>
);

IssuesList.propTypes = {
  issues: PropTypes.array,
};

export default IssuesList;
