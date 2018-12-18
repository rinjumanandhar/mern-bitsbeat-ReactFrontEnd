import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Admin from './AdminRoute/Admin';
import User from './UserRoute/User';
import General from './GeneralRoute/General';

class MainRoute extends Component {
    state = {
        user_role: "user"
    };
    render(){
        return(
    <Router>
        <Switch>
        {this.state.user_role=="admin" && 
            <Route exact path="/admin" component={Admin} />
        }
        {this.state.user_role=="user" &&
            <Route exact path="/user" component={User} />
    }
            <Route exact path="/general" component={General} />
        </Switch>
            
    </Router>
    )
    }
}

export default MainRoute;