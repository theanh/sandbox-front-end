import { routerStateReducer } from 'redux-react-router';
import { combineReducers } from 'redux';

// custom reducers
import app from './app';
import user from './user';

// initial app state
import initialState from './initialState';

export default {
	router: routerStateReducer,
	app,
	user
}
