import '../index.css';
import React from 'react';

export default class Unit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {unit: this.props.unit};
        this.selectUnit = this.selectUnit.bind(this);
    }

    selectUnit(e) {
        this.setState({unit: e.target.value});
        this.props.updateData(e.target.value, 2);
    }

    render() {
        var select;
        switch(this.props.dataType) {
            case "dane":
                select = <select onChange={this.selectUnit} value={this.state.unit}><option value="1">bit</option>
                <option value="8">bajt</option>
                <option value="8192">kilobajt</option>
                <option value="8388608">megabajt</option>
                <option value="8589934592">gigabajt</option>
                <option value="8796093022208">terabajt</option></select>;
                break;
            case "masa":
                select = <select onChange={this.selectUnit} value={this.state.unit}><option value="1">miligram</option>
                <option value="1000">gram</option>
                <option value="10000">dekagram</option>
                <option value="1000000">kilogram</option>
                <option value="1000000000">tona</option>
                <option value="453592.33">funt</option>
                <option value="28349.523125">uncja</option></select>;
                break;
            case "czas":
                select = <select onChange={this.selectUnit} value={this.state.unit}><option value="1">sekunda</option>
                <option value="60">minuta</option>
                <option value="3600">godzina</option>
                <option value="86400">dzień</option>
                <option value="31557600">rok</option></select>;
                break;
            case "dystans":
                select = <select onChange={this.selectUnit} value={this.state.unit}><option value="1">milimetr</option>
                <option value="10">centymetr</option>
                <option value="1000">metr</option>
                <option value="1000000">kilometr</option>
                <option value="304.8">stopa</option>
                <option value="1609344">mila</option></select>;
                break;
            case "powierzchnia":
                select = <select onChange={this.selectUnit} value={this.state.unit}><option value="1">milimetr kwadratowy</option>
                <option value="100">centymetr kwadratowy</option>
                <option value="1000000">metr kwadratowy</option>
                <option value="1000000000000">kilometr kwadratowy</option>
                <option value="100000000">ar</option>
                <option value="10000000000">hektar</option></select>;
                break;
            case "objętość":
                select = <select onChange={this.selectUnit} value={this.state.unit}><option value="1">mililitr</option>
                <option value="1000">litr</option>
                <option value="1000000">metr sześcienny</option>
                <option value="1000000000000000">kilometr sześcienny</option>
                <option value="29.5735296">uncja</option></select>;
                break;
        }

        return(
            <div id="inputFields">
                {select}
            </div>
        );
    }
}