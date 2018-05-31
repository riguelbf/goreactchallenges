import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store/index';

import './assets/style.scss';

class App extends Component {
  static state = {};

  render() {
    return (
      <Provider store={store}>
        <h1>Challenge 3</h1>
      </Provider>
    );
  }
}

export default App;
