import React, { Component } from 'react';
import { Link } from 'react-router';
import moment from 'moment';

const DATE_FORMAT = 'DD-MM-YYYY';
export default class Cell extends Component {
  render() {
    const { cellType, value, schemaName } = this.props;
    let buttonlabel = 'View Relations';
    let buttonColor = 'btn-default';
    const day = moment(value);

    switch (cellType) {
      case 'id' :
        return (<td><Link className="btn btn-rounded btn-sm btn-dark" to={`/data/${schemaName}/${value}`}>{value}</Link></td>);
      case 'Array' :

        if (value.length !== 0) {
          buttonColor = 'btn-primary';
          buttonlabel = `View Relations (${value.length})`;
        }
        return (
          <td>
            <a className={`btn btn-rounded btn-sm ${buttonColor}`}>{buttonlabel}</a>
          </td>);
      case 'Date' :
        return (<td>{day.format(DATE_FORMAT)}</td>);
      case 'Boolean' :
        return (<td>{value ? 'true' : 'false'}</td>);
      default: return (<td>{value}</td>);
    }
  }
}
