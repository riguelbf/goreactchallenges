import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import PostHeader from './PostHeaderComponent';
import PostContent from './PostContentComponent';

const Post = props => (
  <Fragment>
    <div className="post-list">
      {props.posts.map(post => (
        <div className="post" key={post.id}>
          <PostHeader urlImage={post.urlImage} userName={post.userName} postTime={post.postTime} />
          <div className="line" />
          <PostContent description={post.description} />
        </div>
      ))}
    </div>
  </Fragment>
);

Post.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Post;
