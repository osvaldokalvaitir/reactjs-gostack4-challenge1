import React, { Component } from 'react';
import { render } from 'react-dom';

import './style.scss';

class App extends Component {
  render() {
    return <div>Olá</div>;
  }
}

render(<App />, document.getElementById('app'));
