import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerReducer } from 'react-router-redux'

import promiseMiddleware from '../middleware/promiseMiddleware';
import * as reducers from '../reducers/';

// create reducer from outlets, custom reducers and our router
const reducer = combineReducers({...reducers, routing:routerReducer});

// create the store with thunk and promise middleware
const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  promiseMiddleware
)(createStore);

export default function configureStore(initialState) {
	const store =  createStoreWithMiddleware(
                  reducer,
                  initialState,
                  window.devToolsExtension && window.devToolsExtension()
                );
	if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }
	return store;
}
