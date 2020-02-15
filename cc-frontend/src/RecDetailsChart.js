import React, { Component } from 'react';
import '../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, ChartLabel} from 'react-vis';

class RecDetailsChart extends Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        console.log(props);
        this.state = { 
            width: props.dimensions.width,
            height: props.dimensions.height,
            data: props.data            
        };
        
        this.getData = this.getData.bind(this);
    }

    getData(){
        var d = Date.now().getUTCSeconds();
        var data = [
            {x: d, y: 0},
            {x: d + 3600, y: 30},
            {x: d + 3600 * 2, y: 30},
            {x: d + 3600 * 3, y: 40},
            {x: d + 3600 * 4, y: 50},
            {x: d + 3600 * 5, y: 70},
            {x: d + 3600 * 6, y: 80},
            {x: d + 3600 * 7, y: 0},
            {x: d + 3600 * 8, y: 20},
            {x: d + 3600 * 9, y: 30}
        ];
        return data;
    }
    render() {
        console.log(this.state);
        return (
        <div className="ReceptacleChart">
            <XYPlot height={this.state.height} width={this.state.width} margin={100}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis title="Datetime"  tickFormat={v => {
                    var d = new Date(v * 1000);
                    return d.toLocaleString('en-US', { timeZone: 'UTC' })
                }} tickLabelAngle={-45} height={100}/>
                <YAxis title="Volume %" orientation="left" position="end"/>
                <LineSeries data={this.state.data} />
            </XYPlot>
        </div>
        );
  }
}

export default RecDetailsChart;
