import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import Reducer from './registration/reducer';

const initialState = {};
const middleware = [ thunk ];
const store = createStore(
    Reducer,
    initialState,
    applyMiddleware(...middleware)
);

export default store;