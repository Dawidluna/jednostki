import '../index.css';
import React from 'react';

export default class MassTable extends React.Component {


    render() {
        return(
            <table><tr><td>miligram</td><td>{this.props.basicUnit}</td></tr>
                <tr><td>gram</td><td>{this.props.basicUnit/1000}</td></tr>
                <tr><td>dekagram</td><td>{this.props.basicUnit/10000}</td></tr>
                <tr><td>kilogram</td><td>{this.props.basicUnit/1000000}</td></tr>
                <tr><td>tona</td><td>{this.props.basicUnit/1000000000}</td></tr>
                <tr><td>funt</td><td>{this.props.basicUnit/453592.33}</td></tr>
                <tr><td>uncja</td><td>{this.props.basicUnit/28349.523125}</td></tr></table>
        );
    }
}