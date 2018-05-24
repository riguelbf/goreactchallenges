import React, { Component } from 'react';
import { render } from 'react-dom';

import './styles/global';

import Main from './pages/main';

class App extends Component {
  render() {
    return <Main />;
  }
}

render(<App />, document.getElementById('root'));
