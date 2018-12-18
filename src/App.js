// import React, { Component } from 'react';
// import 'semantic-ui-css/semantic.min.css'
// import { Provider } from 'react-redux';
// import SigninForm from './SignIn/index';
// import general from './components/general';
// import admin from './components/admin';
// import user from './components/user';
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import createHistory from 'history/createBrowserHistory';
// import configureStore from './store';

// const initialState = {};
// const history = createHistory();
// const store = configureStore(initialState, history);

// class App extends Component {
//   render() {
//     return (
//       <Provider store = {store} >
//        <div className="App">
//        <Router>  
//       <div>
//            <Route path="/general" component = {general} />
//            <Route path="/admin" component = {admin} />
//            <Route path="/user" component = {user} />
//       </div>

//       </Router>
//         <SigninForm/>
//       </div>
//        </Provider>
       
//     );
//   }
// }
// if (process.env.NODE_ENV !== 'production' && module.hot) {
//   module.hot.accept('./SignIn/signinForm', App)
// }


// export default App;



import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Provider } from 'react-redux';
import SigninForm from './LogIn/index';
import general from './components/general';
import admin from './components/admin';
import user from './components/user';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainRoute from './Dashboard/Route';

// import {BrowserHistory } from 'react-history';
// import store from './store';
import configureStore from "./store";

const  reduxStore = configureStore(window.REDUX_INITIAL_DATA);
class App extends Component {
  render() {
    return (
      <Provider store = {reduxStore} >
       <div className="App">
       <Router>  
      <div>
      <MainRoute/>
      </div>

      </Router>
        <SigninForm/>
      </div>
      </Provider>
    );
  }
}

export default App;

