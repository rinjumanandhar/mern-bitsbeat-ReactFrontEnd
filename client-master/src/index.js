import React from 'react';
//  { createStore }
  
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import Policy from './policy/reducers'
// import { store } from './helpers/store'

// const store = createStore(
//     Policy
// );

ReactDOM.render(
                // <Provider store = {store}>
                    <App />,
                // </Provider>, 
                document.getElementById('root'));


// ReactDOM.render((<Router history = {browserHistory} routes={Routes} />
                // <App />), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
