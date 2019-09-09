import React, { Component } from 'react';
import {XAxis, 
  YAxis, 
  HorizontalGridLines, 
  VerticalGridLines, 
  LineSeries,
  FlexibleWidthXYPlot
} from 'react-vis';
import '../../node_modules/react-vis/dist/style.css';

class Chart extends Component {

    get setHumanDate () {
        const values = this.props.data.values.map((value) => {
        const date = new Date(value.x * 1000)
        const humanDate = `${date.getDate()}`
        const price = Math.round(value.y)
        return {x: +humanDate, y: price}
        })
        //return this.props.data.values
        console.log(values);
        return values
      }

    render(){
        return <div className="chart">        
            <h2>{this.props.data.name}</h2>
      <h4>{this.props.data.description}</h4>
      <FlexibleWidthXYPlot 
        margin={{left: 60}}
        height={300} 
        xType="ordinal"
      >
      <HorizontalGridLines style={{stroke: '#363636'}} />
      <VerticalGridLines style={{stroke: '#363636'}} />
      <XAxis
        // title="X Axis"
        style={{
          line: {stroke: '#fff'},
          ticks: {stroke: '#ADDDE1'},
          text: {stroke: 'none', fill: '#6b6b76', fontWeight: 600}
        }}
      />
      <YAxis title = {this.props.data.unit} />
      <LineSeries
        className="first-series"
        data={this.setHumanDate}
        style={{
          strokeLinejoin: 'round',
          strokeWidth: 2,
        }}
      />
    </FlexibleWidthXYPlot>
        </div>
    }
}

export default Chart;