import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const chartConfigs = {
  type: 'column2d',
  width: 600,
  height: 400,
  dataFormat: 'json',
  dataSource: {
    "chart": {
      "caption": "Student Activity",
    //   "subCaption": "In MMbbl = One Million barrels",
      "xAxisName": "Country",
      "yAxisName": "Activity(%)",
      "numberSuffix": "%",
      "theme": "candy"
    },
    "data": [
      {
        "label": "Kumar",
        "value": "290"
      },
      {
        "label": "Saudi",
        "value": "260"
      },
      {
        "label": "Ganesh",
        "value": "180"
      },
      {
        "label": "Gopi",
        "value": "140"
      },
      {
        "label": "Mike",
        "value": "115"
      },
      {
        "label": "saravanan",
        "value": "100"
      },
      {
        "label": "Rajesh",
        "value": "30"
      },
      {
        "label": "Kannan",
        "value": "30"
      }
    ]
  }
};


export default class Chart extends Component {
  render () {
    return <ReactFC {...chartConfigs} />;
  }
}

ReactDOM.render(
  <Chart />,
  document.getElementById('root'),
);