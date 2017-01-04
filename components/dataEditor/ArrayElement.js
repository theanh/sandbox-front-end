import React, { Component } from 'react';

export default class ArrayElement extends Component {

  constructor(props) {
    super(props);

    this.state = {
      field_value: this.props.field_value || [],
      field_type: this.props.field_type
    };
  }

  handleEdit(e) {
    this.setState({
      field_value: `${e.target.value}`
    });
    this.props.onUpdate(this.props.keyField, e.target.value);
  }

  render() {
    return (
      <div className="form-group">
        <label className="col-sm-2 control-label" htmlFor="element">{this.props.label}</label>
        <div className="col-sm-10" id="element">
          {this.state.field_value.map(item => <a className="btn m-r-sm m-b-sm btn-rounded btn-sm btn-dark" href="item">{item}</a>)}
          <span className="help-block m-b-none">{this.props.help}</span>
        </div>
      </div>
    );
  }
}
