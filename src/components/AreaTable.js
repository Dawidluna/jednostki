import '../index.css';
import React from 'react';

export default class AreaTable extends React.Component {


    render() {
        return(
            <table><tr><td>milimetr kwadratowy</td><td>{this.props.basicUnit}</td></tr>
                <tr><td>centymetr kwadratowy</td><td>{this.props.basicUnit/100}</td></tr>
                <tr><td>metr kwadratowy</td><td>{this.props.basicUnit/1000000}</td></tr>
                <tr><td>kilometr kwadratowy</td><td>{this.props.basicUnit/1000000000000}</td></tr>
                <tr><td>ar</td><td>{this.props.basicUnit/100000000}</td></tr>
                <tr><td>hektar</td><td>{this.props.basicUnit/10000000000}</td></tr></table>
        );
    }
}