import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Profile extends Component {
	render() {
		return (
			<li className="dropdown">
        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
          <span className="thumb-sm avatar pull-left">
            <img src={this.props.profile ? this.props.profile.avatar : ''}/>
          </span>
          <b className="caret"></b>
        </a>
        <ul className="dropdown-menu animated fadeInRight">
          <span className="arrow top"></span>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/account">Account</Link>
          </li>
        </ul>
      </li>
		);
	}
}
