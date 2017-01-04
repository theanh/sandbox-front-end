import React, { Component } from 'react';

export default class ReferenceElement extends Component {

  constructor(props) {
    super(props);

    this.state = {
      field_value: this.props.field_value,
      field_type: this.props.field_type
    };
  }

  handlePick() {
    this.props.onPicker(this.props);
  }

  handleEdit(e) {
    this.setState({
      field_value: e.target.value
    });
    this.props.onUpdate(this.props.keyField, e.target.value);
  }

  render() {
    const { label, help, fieldValue } = this.props;

    return (
      <div className="form-group">
        <label className="col-sm-2 control-label">{label}</label>
        <div className="col-sm-10 text-left">
          <a onClick={() => this.handlePick()} className="btn m-r-sm m-b-sm btn-rounded btn-sm btn-danger" href="handlePick">{`${(fieldValue || 'select')}`}</a>
          <span className="help-block m-b-none">{help}</span>
        </div>
      </div>
    );
  }
}
