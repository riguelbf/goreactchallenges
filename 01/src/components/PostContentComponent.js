import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const PostContent = props => (
  <Fragment>
    <div className="content">{props.description}</div>
  </Fragment>
);

PostContent.propTypes = {
  description: PropTypes.string.isRequired,
};

export default PostContent;
