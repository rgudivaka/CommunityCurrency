import React, { Component } from 'react';
import RecDetailsChart from './RecDetailsChart'

export default class RecDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            dimensions: null,
            box_id: props.box_id,
            display: false
        }
        this.containerRef = React.createRef();
    }
    getData(){
        var d = Date.now() / 1000;
        
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

  componentDidMount() {
      console.log("here");
      var rect = this.containerRef.current.getBoundingClientRect();
    this.setState({
      dimensions: {
        width: rect.width,
        height: rect.height,
      },
      display: true
    });
  }
  render() {
    const { dimensions } = this.state;
    if (this.state.display)
        return (
        <div ref={this.containerRef} style={{width:"700px", height:"500px"}}>
            <RecDetailsChart dimensions={dimensions} data={this.getData()}/>
        </div>
        );
    else {
        return (
            <div ref={this.containerRef} style={{width:"700px", height:"500px"}}>
                
            </div>
        )
    }
  }
}