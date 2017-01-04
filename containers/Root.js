import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Link, browserHistory,IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import configureStore from '../store/configureStore';

import Landing from './Landing';

import App from './App';
import Signup from './Signup';
import Profile from './Profile';

import Dashboard from './Dashboard';

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store)
var shallowCompare = require('react-addons-shallow-compare');

export default class Root extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path='/' component={App}>
            <IndexRoute component={Dashboard} pageName="Dashboard" pageDescription="Admin Application Dashboard." />
            
            <Route path='/signup' component={Signup}  pageName="" pageDescription="" />
            <Route path='/profile' component={Profile}  pageName="Profile" pageDescription="Manage your profile" />
          </Route>
          <Route path='/landing' component={Landing} />
        </Router>
      </Provider>
    );
  }
}
