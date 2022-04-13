import '../index.css';
import React from 'react';

export default class DataTable extends React.Component {


    render() {
        return(
            <table><tr><td>bit</td><td>{this.props.basicUnit}</td></tr>
            <tr><td>bajt</td><td>{this.props.basicUnit/8}</td></tr>
            <tr><td>kilobajt</td><td>{this.props.basicUnit/8192}</td></tr>
            <tr><td>megabajt</td><td>{this.props.basicUnit/8388608}</td></tr>
            <tr><td>gigabajt</td><td>{this.props.basicUnit/8589934592}</td></tr>
            <tr><td>terabajt</td><td>{this.props.basicUnit/8796093022208}</td></tr></table>
        );
    }
}