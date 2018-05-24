import React from 'react';
import { render } from 'react-dom';

import './styles/global';

import Main from './pages/main';

class App extends Main {
  render() {
    return <Main />;
  }
}

render(<App />, document.getElementById('root'));
