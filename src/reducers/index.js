import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import login from './login';
import planet from './planet';

const rootReducer = combineReducers({ login, planet , routing: routerReducer });

export default rootReducer;
