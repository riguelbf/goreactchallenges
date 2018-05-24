import React from 'react';
import PropTypes from 'prop-types';

import Column from '../elements/column';
import Row from '../elements/row';
import Ul from '../elements/ul';

import Icon from './icon';
import Logo from './logo';

const RepositoryList = (props = []) => (
  <Column>
    <Ul>
      {props.repositories.map(repository => (
        <li key={repository.id}>
          <Row>
            <Logo src={repository.urlLogo} alt={repository.company} />
            <Column>
              <b>{repository.repositoryName}</b>
              <small>{repository.company}</small>
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
    id: PropTypes.string.isRequired,
    urlLogo: PropTypes.string.isRequired,
    repositoryName: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
  })),
};

export default RepositoryList;
