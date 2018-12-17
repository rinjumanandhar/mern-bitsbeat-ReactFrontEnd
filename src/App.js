import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import MainRoute from './Dashboard/Route';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      searchResult: [],
      contactList: []
    }
  }
  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-offset-3 col-sm-6">
          <span className="title">Contacts</span>
          <SearchBar />
          <ul cl className="list-group" id ="contact-list">
            <li className="list-group-item">
            <ContactCard />
            </li>
          </ul>
        </div>
          <MainRoute />
       </div>
    );
  }
}
export default App;
