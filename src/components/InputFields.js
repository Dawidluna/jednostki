import '../index.css';
import React from 'react';
import DataType from './DataType';
import Unit from './Unit';
import InputValue from './InputValue';


export default class InputFields extends React.Component {

    constructor(props) {
        super(props);
        this.updateData = this.updateData.bind(this);
    }

    updateData(value, x) {
        this.props.updateState(value, x);
    }

  render() {
      return(
          <div id="inputs">
              <DataType updateData={this.updateData} />
              <Unit updateData={this.updateData} dataType={this.props.dataType} />
              <InputValue updateData={this.updateData} />
          </div>
      );
  }
}