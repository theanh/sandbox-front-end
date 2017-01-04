import React, { Component } from 'react';
import DataRow from './Row';
import { Pager } from '../../components/ui/';

export default class DataTable extends Component {

  headers() {
    const { schema } = this.props;
    return Object.keys(schema.fields).reverse().map(key => <th key={key}>{key}</th>);
  }

  deleteRow(id) {
    this.props.onDelete(id);
  }

  renderrows() {
    const { rows, schema } = this.props;
    const headerkeys = Object.keys(schema.fields).reverse();

    return rows.map(row => (
      <DataRow
        key={row._id}
        schema={schema}
        keys={headerkeys}
        onDelete={id => this.deleteRow(id)}
        row={row}
      />
    ));
  }

  render() {
    return (
      <section>
        <header style={{ height: 32 }} className="panel-heading">
          <span className="text-muted m-l-sm pull-right">
            <div className="btn-group">
              <button className="btn btn-danger m-t-xs btn-xs dropdown-toggle  m-r-sm" data-toggle="dropdown">Delete <span className="caret" /></button>
              <ul className="dropdown-menu">
                <li><a href="deleteField">Delete Field</a></li>
                <li><a href="deleteAllData">Delete All Data</a></li>
                <li className="divider" />
                <li><a href="deleteDataset">Delete Dataset</a></li>
              </ul>
            </div>
            <a href="success" className="btn btn-success btn-xs m-t-xs"><i className="fa fa-plus" /> field</a>
          </span>
        </header>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                {this.headers()}
                <th width="20" />
              </tr>
            </thead>
            <tbody>
              {this.renderrows()}
            </tbody>
          </table>
        </div>
        <footer className="pull-right">
          <Pager currentPage={0} itemsPerPage={10} totalItems={this.props.totalRows} />
        </footer>
      </section>
    );
  }
}
