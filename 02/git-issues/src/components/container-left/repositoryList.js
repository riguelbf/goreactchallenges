import React from 'react';
import PropTypes from 'prop-types';

import Column from '../elements/column';
import Row from '../elements/row';
import Ul from '../elements/ul';

import Icon from './icon';
import Logo from './logo';
import Button from './button';

const RepositoryList = ({ repositories, handleGetIssues, loadingIssue }) => (
  <Column>
    <Ul>
      {repositories.map(repository => (
        <li key={repository.id}>
          <Button type="button" onClick={e => handleGetIssues(e)}>
            <Row>
              <Logo src={repository.organization.avatar_url} alt={repository.name} />
              <Column>
                <strong>{repository.name}</strong>
                <small>{repository.owner.login}</small>
              </Column>
              <Icon className={loadingIssue ? 'fa fa-spinner fa-pulse' : 'fa fa-angle-right'} />
            </Row>
          </Button>
        </li>
      ))}
    </Ul>
  </Column>
);

RepositoryList.defaultProps = {
  repositories: [],
  loadingIssue: false,
};

RepositoryList.propTypes = {
  loadingIssue: PropTypes.bool,
  handleGetIssues: PropTypes.func.isRequired,
  repositories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    avatar_url: PropTypes.string,
    name: PropTypes.string,
    owner: PropTypes.shape({
      login: PropTypes.string,
    }),
  })),
};

export default RepositoryList;
