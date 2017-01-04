import React, { Component } from 'react';

export default class TextElement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fieldValue: this.props.fieldValue,
      fieldType: this.props.fieldType
    };
  }

  handleEdit(e) {
    this.setState({ fieldValue: e.target.value });
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
          <textarea className="form-control" rows="6" data-minwords="6" data-required="true" onChange={e => this.handleEdit(e)} placeholder={this.props.placeholder} value={this.state.field_value} />
          <span className="help-block m-b-none">{this.props.help}</span>
        </div>
      </div>
    );
  }

  render() {
    return this.renderEdit();
  }
}
