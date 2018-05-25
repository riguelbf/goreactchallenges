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

const IssuesList = ({ issues, handleOpenIssue }) => (
  <IssuesListContainer>
    {issues.map(issue => (
      <Issue key={issue.id}>
        <Avatar src={issue.user.avatar_url} />
        <Column>
          <strong>{issue.title}</strong>
          <small>{issue.user.login}</small>
          <Button onClick={() => handleOpenIssue(issue.html_url)}>
            <i className="fa fa-edit" />
            Abrir issue
          </Button>
        </Column>
      </Issue>
    ))}
  </IssuesListContainer>
);

IssuesList.defaultProps = {
  issues: [],
};

IssuesList.propTypes = {
  issues: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    login: PropTypes.string,
    html_url: PropTypes.string,
  })),
  handleOpenIssue: PropTypes.func.isRequired,
};

export default IssuesList;
