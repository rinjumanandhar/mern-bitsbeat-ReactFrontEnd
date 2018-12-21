import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import {  Router, Route} from "react-router-dom";
// import Login from './registration/signup'
import { connect } from 'react-redux';
import history from './helpers/history';
import {alertActions} from './registration/action'
import LoginPage from './login/loginpage'
import RegistrationForm from './registration/signupForm'
import RouteLink from './routes/route'

class App extends Component {

  constructor(props){
    super(props);

    const {dispatch} = this.props;
    history.listen((location, action) => {
      dispatch(alertActions.clear());
    });
  }

  render() {

    const {alert} = this.props;

    return (
      <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        {/* {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        } */}
                        <Router history={history}>
                        {/* <Router> */}
                        <div>
                        {/* <RegistrationForm/> */}

                        <RouteLink />

                            {/* <div>
                                <Route path="/login" component={LoginPage} />
                                <Route path="/register" component={RegistrationForm} />
                            </div> */}
                            {/* <RouteLink /> */}
                            </div>
                        </Router>
                    </div>
                </div>
            </div>
     
    );
  }
}

// function mapStateToProps(state){
//   const {alert} = state;
//   return{
//     alert
//   };
// }

// const connectedApp = connect (mapStateToProps)(App);
export default App;
