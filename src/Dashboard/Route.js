import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Admin from './AdminRoute/Admin';
import User from './UserRoute/User';
import General from './GeneralRoute/General';

class MainRoute extends Component {
    render(){
        return(
    <Router>
        <Switch>
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/user" component={User} />
            <Route exact path="/general" component={General} />
        </Switch>
            
    </Router>
    )
    }
}

export default MainRoute;