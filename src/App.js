import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import MainRoute from './Dashboard/Route';


class App extends Component {
  render() {
    return (
      <div className="App">
          <MainRoute />
       </div>
    );
  }
}
export default App;
