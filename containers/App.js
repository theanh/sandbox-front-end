import React, { Component } from 'react';
import { connect } from 'react-redux';

import Landing from './Landing';
import Header from './Header';
import Menu from './Menu';
import Signup from './Signup';

import { auth, signup } from '../actions';

const shallowCompare = require('react-addons-shallow-compare');

class App extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const { location, children, loggedIn, user, dispatch } = this.props;
    const { pathname } = location;
    const value = pathname.substring(1);

    if (!loggedIn) {
      if (value === 'signup') {
        return (
          <Signup onSignup={(email, companyName) => dispatch(signup(email, companyName))} />
        );
      }
      return (
        <Landing onLogin={(email, password) => dispatch(auth(email, password))} />
      );
    }
    return (
      <section className="vbox">
        <section>
          <section className="hbox stretch">
            <Menu
              user={user}
              currentPage={value}
            />
            <section id="content">
              <Header user={user} route={this.props.routes[1]} />
              {children}
            </section>
          </section>
        </section>
      </section>
    );
  }
}

/**
 * @param {object} state current state
 * @return {object} object of props
 */
function mapStateToProps(state) {
  return {
    loggedIn: state.app.loggedIn,
    token: state.app.token,
    user: state.user
  };
}

export default connect(mapStateToProps)(App);
