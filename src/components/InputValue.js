import '../index.css';
import React from 'react';

export default class InputValue extends React.Component {

    constructor(props) {
        super(props);
        this.setValue = this.setValue.bind(this);
    }

    setValue(e) {
        this.props.updateData(e.target.value, 3);
    }

    render() {
        return(
            <div id="inputFields">
                <input type="number" onChange={this.setValue} />
            </div>
        );
    }
}