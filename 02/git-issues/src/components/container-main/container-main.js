import React from 'react';

import PropTypes from 'prop-types';

const ContainerMain = props => <div>{props.children}</div>;

ContainerMain.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ContainerMain;
