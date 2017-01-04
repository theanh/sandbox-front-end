import React, { Component } from 'react';

export default class StringElement extends Component {

  constructor(props) {
    super(props);

    this.state = {
      field_value: this.props.field_value,
      field_type: this.props.field_type
    };
  }

  handleEdit(e) {
    this.setState({
      field_value: e.target.value
    });
    this.props.onUpdate(this.props.keyField, e.target.value);
  }

  renderview() {
    return (
      <div className="form-group">
        <label className="col-sm-2 control-label">{this.props.label}</label>
        <div className="col-sm-10">
          <p className="form-control-static">{this.state.field_value}</p>
        </div>
      </div>
    );
  }

  renderEdit() {
    return (
      <div className="form-group">
        <label className="col-sm-2 control-label">{this.props.label}</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" onChange={e => this.handleEdit(e)} placeholder={this.props.placeholder} value={this.state.field_value} />
          <span className="help-block m-b-none">{this.props.help}</span>
        </div>
      </div>
    );
  }

  render() {
    return this.renderEdit();
  }
}
