// import LoginPage from './../login/loginpage';
import SignUpPage from '../registration/signup';
import Authentication from './../authentication/authentication';
// import LoginPage from './../login/loginpage'
// import SignUpPage from './../registration/signupForm'
import Base from './../registration/Base'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import React, {Component} from 'react'
import RegistrationForm from '../registration/signupForm'
import LoginPage from '../login/loginpage'


// const routes = {
//     component: Base,
//     childRoutes: [
//         {
//             path: '/',
//             getComponent: (location, callback) => {
//                 if(Authentication.isUserAuthenticated()){
//                     callback(null, LoginPage);
//                 }
                
//             }
//         }
//     ]
// }


class RouteLink extends Component{
    render(){
        return(
          
                <Router>
                    <div>
                        <Switch>
                                <Route exact path="/register" component={RegistrationForm} />
                                <Route exact path="/login" component={LoginPage} />
                        </Switch>
                    </div>
                 </Router>
   
        )
    }
    
} 
export default RouteLink;