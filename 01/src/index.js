import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import HeaderComponent from './components/HeaderComponent';
import PostComponent from './components/PostComponent';

import './assets/style.scss';
import data from './data.json';

class App extends Component {
  state = {
    posts: data.posts,
  };

  render() {
    return (
      <Fragment>
        <HeaderComponent />
        <PostComponent posts={this.state.posts} />
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
