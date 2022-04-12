import '../index.css';
import React from 'react';
import InputFields from './InputFields';
import Results from './Results';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataType: "dane",
            unit: 1,
            value: 0
        }
        this.updateState = this.updateState.bind(this);
    }

     updateState(value, x) {
        switch(x) {
            case 1:
                this.setState({dataType: value, unit: -1});
                break;
            case 2:
                this.setState({unit: value});
                break;
            case 3:
                this.setState({value: value});
                break;
        }
     }   

    render() {
        return(
            <div id="app">
                <InputFields updateState={this.updateState} dataType={this.state.dataType} />
                <Results dataType={this.state.dataType} unit={this.state.unit} dataValue={this.state.value} />
            </div>
        );
    }
}