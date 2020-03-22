import React, { Component } from "react";

var CanvasJSReact = require("./canvasjs.react");
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

var dataPoints = [];
class LineGraph extends Component {
  render() {
    return (
      <div>
        <CanvasJSChart options={options} onRef={ref => (this.chart = ref)} />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }

  componentDidMount() {
    var chart = this.chart;
    fetch("https://canvasjs.com/data/gallery/react/nifty-stock-price.json")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        for (var i = 0; i < data.length; i++) {
          dataPoints.push({
            x: new Date(data[i].x),
            y: data[i].y
          });
        }
        chart.render();
      });
  }
}

module.exports = LineGraph;
