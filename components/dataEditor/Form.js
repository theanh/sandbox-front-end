import React, { Component } from 'react';
import ElementTypes from './ElementTypes';

export default class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      row: this.props.rowdata
    };
  }

  handleCancel(e) {
    e.preventDefault();
    this.props.onCancel();
  }

  handleSave(e) {
    e.preventDefault();
    this.props.onSave(this.state.row);
  }

  changeHandler(key, value) {
    const oldData = this.state.row;
    oldData[key] = value;
    this.state.row = oldData;
  }

  render() {
    const { rowschema, rowdata } = this.props;

    const elements = Object.keys(rowschema.fields).reverse().map(key => {
      const FormElement = ElementTypes[rowschema.fields[key].type].reactClass;
      return (
        <div>
          <FormElement
            label={key}
            keyField={key}
            field_type={rowschema.fields[key].type}
            help=""
            field_value={rowdata[key]}
            placeholder=""
            reference={rowschema.fields[key].reference}
            onPicker={element => this.props.onPicker(element)}
            reference_id={rowschema.fields[key].reference_id}
            onUpdate={(fieldKey, fieldValue) => this.changeHandler(fieldKey, fieldValue)}
          />
          <div className="line line-dashed line-lg pull-in" />
        </div>);
    });

    return (
      <section className="panel panel-default m-t-md">
        <div className="panel-body">
          <form className="form-horizontal">
            {elements}
            <div className="form-group">
              <div className="col-sm-4 col-sm-offset-2">
                <button type="submit" className="btn btn-default m-r-sm" onClick={e => this.handleCancel(e)}>Cancel</button>
                <button type="submit" className="btn btn-primary" onClick={e => this.handleSave(e)}>Save changes</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }
}
