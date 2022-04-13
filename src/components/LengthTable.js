import '../index.css';
import React from 'react';

export default class LengthTable extends React.Component {


    render() {
        return(
            <table><tr><td>milimetr</td><td>{this.props.basicUnit}</td></tr>
                <tr><td>centymetr</td><td>{this.props.basicUnit/10}</td></tr>
                <tr><td>metr</td><td>{this.props.basicUnit/1000}</td></tr>
                <tr><td>kilometr</td><td>{this.props.basicUnit/1000000}</td></tr>
                <tr><td>stopa</td><td>{this.props.basicUnit/304.8}</td></tr>
                <tr><td>mila</td><td>{this.props.basicUnit/1609344}</td></tr></table>
        );
    }
}