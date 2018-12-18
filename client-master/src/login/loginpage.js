import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router} from "react-router-dom";

class App extends Component {
  render() {
    return (

      <Router>
        <div className="App">
          <h1>Welcome To Login Page</h1>
        </div>
      </Router>
    );
  }
}

export default App;