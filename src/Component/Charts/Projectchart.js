import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";


class Projectchart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          name: 'Number of Porject',
          type: 'column',
          data: [75, 80, 65, 100, 48, 100, 80, 75, 95, 35, 75, 100]
        }, {
          name: 'Revenue',
          type: 'line',
          data: [44, 65, 55, 75, 45, 55, 40, 60, 75, 45, 50, 42]
        },
        {
            name: 'Active Projects',
            type: 'line',
            data: [44, 25, 55, 30, 25, 35, 20, 45, 35, 20, 35, 20]
          }],
        options: {
          chart: {
            height: 350,
            type: 'line',
          },
          stroke: {
            width: [0, 4]
          },
          title: {
            // text: 'Traffic Sources'
          },
          dataLabels: {
            enabled: true,
            enabledOnSeries: [1]
          },
          labels:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        yaxis: {
            min: 0,
            max: 100,
            tickAmount: 25
        }
      
      
      };
    }

  

    render() {
      return (
        <div>
          <div id="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
          </div>
          <div id="html-dist"></div>
        </div>
      );
    }
  }


  export default Projectchart;