import '../index.css';
import React from 'react';

export default class DataType extends React.Component {
    
    constructor(props) {
        super(props);
        this.selectType = this.selectType.bind(this);
    }

    selectType(e) {
        this.props.updateData(e.target.value, 1);
    }

    render() {
        return(
            <div id="inputFields">
                <select onChange={this.selectType}>
                    <option>dane</option>
                    <option>masa</option>
                    <option>czas</option>
                    <option>dystans</option>
                    <option>powierzchnia</option>
                    <option>objętość</option>
                </select>
            </div>
        );
    }
}