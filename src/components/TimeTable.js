import '../index.css';
import React from 'react';

export default class TimeTable extends React.Component {


    render() {
        return(
            <table><tr><td>sekunda</td><td>{this.props.basicUnit}</td></tr>
                <tr><td>minuta</td><td>{this.props.basicUnit/60}</td></tr>
                <tr><td>godzina</td><td>{this.props.basicUnit/3600}</td></tr>
                <tr><td>dzień</td><td>{this.props.basicUnit/86400}</td></tr>
                <tr><td>rok</td><td>{this.props.basicUnit/31557600}</td></tr></table>
        );
    }
}