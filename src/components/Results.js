import '../index.css';
import React from 'react';
import Unit from './Unit';

export default class Results extends React.Component {
    render() {
        var table;
        var basicUnit = this.props.dataValue * this.props.unit;
        if(this.props.unit==-1) basicUnit = "Wybierz jednostkę";
        switch(this.props.dataType) {
            case "dane":
                table = <table><tr><td>bit</td><td>{basicUnit}</td></tr>
                <tr><td>bajt</td><td>{basicUnit/8}</td></tr>
                <tr><td>kilobajt</td><td>{basicUnit/8192}</td></tr>
                <tr><td>megabajt</td><td>{basicUnit/8388608}</td></tr>
                <tr><td>gigabajt</td><td>{basicUnit/8589934592}</td></tr>
                <tr><td>terabajt</td><td>{basicUnit/8796093022208}</td></tr></table>;
                break;
            case "masa":
                table = <table><tr><td>miligram</td><td>{basicUnit}</td></tr>
                <tr><td>gram</td><td>{basicUnit/1000}</td></tr>
                <tr><td>dekagram</td><td>{basicUnit/10000}</td></tr>
                <tr><td>kilogram</td><td>{basicUnit/1000000}</td></tr>
                <tr><td>tona</td><td>{basicUnit/1000000000}</td></tr>
                <tr><td>funt</td><td>{basicUnit/453592.33}</td></tr>
                <tr><td>uncja</td><td>{basicUnit/28349.523125}</td></tr></table>;
                break;
            case "czas":
                table = <table><tr><td>sekunda</td><td>{basicUnit}</td></tr>
                <tr><td>minuta</td><td>{basicUnit/60}</td></tr>
                <tr><td>godzina</td><td>{basicUnit/3600}</td></tr>
                <tr><td>dzień</td><td>{basicUnit/86400}</td></tr>
                <tr><td>rok</td><td>{basicUnit/31557600}</td></tr></table>;
                break;
            case "dystans":
                table = <table><tr><td>milimetr</td><td>{basicUnit}</td></tr>
                <tr><td>centymetr</td><td>{basicUnit/10}</td></tr>
                <tr><td>metr</td><td>{basicUnit/1000}</td></tr>
                <tr><td>kilometr</td><td>{basicUnit/1000000}</td></tr>
                <tr><td>stopa</td><td>{basicUnit/304.8}</td></tr>
                <tr><td>mila</td><td>{basicUnit/1609344}</td></tr></table>;
                break;
            case "powierzchnia":
                table = <table><tr><td>milimetr kwadratowy</td><td>{basicUnit}</td></tr>
                <tr><td>centymetr kwadratowy</td><td>{basicUnit/100}</td></tr>
                <tr><td>metr kwadratowy</td><td>{basicUnit/1000000}</td></tr>
                <tr><td>kilometr kwadratowy</td><td>{basicUnit/1000000000000}</td></tr>
                <tr><td>ar</td><td>{basicUnit/100000000}</td></tr>
                <tr><td>hektar</td><td>{basicUnit/10000000000}</td></tr></table>;
                break;
            case "objętość":
                table = <table><tr><td>mililitr</td><td>{basicUnit}</td></tr>
                <tr><td>litr</td><td>{basicUnit/1000}</td></tr>
                <tr><td>metr sześcienny</td><td>{basicUnit/1000000}</td></tr>
                <tr><td>kilometr sześcienny</td><td>{basicUnit/1000000000000000}</td></tr>
                <tr><td>uncja</td><td>{basicUnit/29.5735296}</td></tr></table>;
                break;
        }
        return(
            <div>
                {table}
            </div>
        );
    }
}