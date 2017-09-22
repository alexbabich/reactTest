import React, { Component } from 'react';

import Main from './Main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
          <Main login="mojombo"></Main>
      </div>

    );
  }
}

export default App;
