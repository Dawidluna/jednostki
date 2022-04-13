import '../index.css';
import React from 'react';
import DataTable from './DataTable';
import MassTable from './MassTable';
import TimeTable from './TimeTable';
import LengthTable from './LengthTable';
import AreaTable from './AreaTable';
import VolumeTable from './VolumeTable';

export default class Results extends React.Component {
    render() {
        var table;
        var basicUnit = this.props.dataValue * this.props.unit;
        switch(this.props.dataType) {
            case "dane":
               table = <DataTable basicUnit={basicUnit} />;
                break;
            case "masa":
                table = <MassTable basicUnit={basicUnit} />;
                break;
            case "czas":
                table = <TimeTable basicUnit={basicUnit} />;
                break;
            case "dystans":
                table = <LengthTable basicUnit={basicUnit} />;
                break;
            case "powierzchnia":
                table = <AreaTable basicUnit={basicUnit} />;
                break;
            case "objętość":
                table = <VolumeTable basicUnit={basicUnit} />;
                break;
        }
        return(
            <div>
                {table}
            </div>
        );
    }
}