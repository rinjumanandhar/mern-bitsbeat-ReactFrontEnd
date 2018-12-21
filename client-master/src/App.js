import React, { Component } from 'react';
import './App.css';
import RegistrationForm from './registration/signupForm';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route} from "react-router-dom";

class App extends Component {
  render() {
    return (

      <Router>
        <div className="App">
          <h1>Registration Form</h1>
          <RegistrationForm />
        <Route path={'/signup'} component={RegistrationForm}/>
        </div>
      </Router>
    );
  }
}

export default App;
