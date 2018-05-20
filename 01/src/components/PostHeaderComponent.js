import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const PostHeader = props => (
  <Fragment>
    <div className="post-header">
      <img className="avatar" src={props.urlImage} alt="User avatar" />
      <div className="post-header-right">
        <span className="username">{props.userName}</span>
        <span className="time">{props.postTime}</span>
      </div>
    </div>
  </Fragment>
);

PostHeader.defaultProps = {
  userName: 'User name',
  postTime: '00:00',
  urlImage: 'https://openclipart.org/download/247324/abstract-user-flat-1.svg',
};

PostHeader.propTypes = {
  userName: PropTypes.string,
  postTime: PropTypes.string,
  urlImage: PropTypes.string,
};

export default PostHeader;
