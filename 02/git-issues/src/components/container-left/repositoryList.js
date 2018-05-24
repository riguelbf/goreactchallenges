import React from 'react';
import PropTypes from 'prop-types';

import Column from '../elements/column';
import Row from '../elements/row';
import Ul from '../elements/ul';

import Icon from './icon';
import Logo from './logo';

const RepositoryList = ({ repositories }) => (
  <Column>
    <Ul>
      {repositories.map(repository => (
        <li key={repository.id}>
          <Row>
            <Logo src={repository.organization.avatar_url} alt={repository.name} />
            <Column>
              <strong>{repository.name}</strong>
              <small>{repository.owner.login}</small>
            </Column>
            <Icon className="fa fa-angle-right" />
          </Row>
        </li>
      ))}
    </Ul>
  </Column>
);

RepositoryList.defaultProps = {
  repositories: [],
};

RepositoryList.propTypes = {
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
