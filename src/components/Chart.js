import React, { Component } from 'react';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, LineSeries} from 'react-vis';
import '../../node_modules/react-vis/dist/style.css';

class Chart extends Component {

    get setHumanDate () {
        const values = this.props.data.values.map((value) => {
          let date = new Date(value.x * 1000)
            let humanDate = date.getDate()
            return {x: +humanDate, y: value.y}
        })
        return this.props.data.values
        //return values
      }

    render(){
        return <div className="chart">        
            <h2>{this.props.data.name}</h2>
      <h4>{this.props.data.description}</h4>
      <XYPlot width={600} height={300}>
      <HorizontalGridLines style={{stroke: '#ссс'}} />
      <VerticalGridLines style={{stroke: '#ссс'}} />
      <XAxis
        // title="X Axis"
        style={{
          line: {stroke: '#ADDDE1'},
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
    </XYPlot>
        </div>
    }
}

export default Chart;