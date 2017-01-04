import React, { Component } from 'react';

import Input from '../ui/Input';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
      endpoint: ''
    };
  }

  handleEmailChange(e) {
    this.setState({
      email: e.target.value
    });
  }

  handlePassChange(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleLogin() {
    this.props.onLogin(this.state.email, this.state.password);
  }

  render() {
    return (
      <section className="wrapper-md animated fadeInUp">
        <form role="form">
          <select name="account" className="form-control m-b"><option>select an endpoint</option> <option>localhost</option></select>
          <div className="form-group"><Input autocomplete={'off'} format="email" icon="fa fa-user" required errorMessage="Please verify your email" placeholder="email" value={this.state.email} onFieldChange={e => this.handleEmailChange(e)} /></div>
          <div className="form-group"><Input autocomplete={'off'} format="password" icon="fa fa-lock" required errorMessage="Password is required" placeholder="password" value={this.state.password} onFieldChange={e => this.handlePassChange(e)} /></div>
          <p className="help-block">{this.props.errorMessage ? this.props.errorMessage.message : ''}</p>
          <div className="form-group">
            <button type="button" onClick={e => this.handleLogin(e)} className="btn btn-info btn-block w-pad">Login</button>
          </div>
          <div className="form-group">
            <p>{this.state.error}</p>
          </div>
          <div className="text-center">
            <a href="onForgot" onClick={() => this.props.onForgot()} className="w-login">Forgot your password?</a>
          </div>
        </form>
      </section>
    );
  }
}
