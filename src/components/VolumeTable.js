import '../index.css';
import React from 'react';

export default class VolumeTable extends React.Component {


    render() {
        return(
            <table><tr><td>mililitr</td><td>{this.props.basicUnit}</td></tr>
                <tr><td>litr</td><td>{this.props.basicUnit/1000}</td></tr>
                <tr><td>metr sześcienny</td><td>{this.props.basicUnit/1000000}</td></tr>
                <tr><td>kilometr sześcienny</td><td>{this.props.basicUnit/1000000000000000}</td></tr>
                <tr><td>uncja</td><td>{this.props.basicUnit/29.5735296}</td></tr></table>
        );
    }
}