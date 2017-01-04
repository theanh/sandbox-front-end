import React, { Component } from 'react';
import { Link } from 'react-router';

import Cell from './Cell';

export default class Row extends Component {

  deleteRow() {
    this.props.onDelete(this.props.row._id);
  }

  render() {
    const { schema, row } = this.props;

    return (
      <tr>
        {this.props.keys.map(key => <Cell
          schemaName={schema.name}
          cellType={schema.fields[key].type}
          value={row[key] || ''}
        />)
        }
        <td>
          <a href="deleteRow" onClick={e => this.deleteRow(e)}><i className="fa text-muted fa-trash-o" /></a>
          <Link to={`/data/${schema.name}/${row._id}`}><i className="fa text-muted fa-edit" /></Link>
        </td>
      </tr>
    );
  }
}
