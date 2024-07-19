import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";


class Earnings extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
            name: "Desktops",
            data: [650, 680 , 650, 700, , 610, 690, 710, 750]
        }],
        options: {
          chart: {
            height: 350,
            type: 'line',
            zoom: {
              enabled: false
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'straight',
            width: 1.5,
          },
          title: {
            // text: 'Product Trends by Month',
            align: 'left'
          },
          grid: {
            row: {
              colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
            },
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
          }
        },
      
      
      };
    }

  

    render() {
      return (
        <div>
          <div id="chart" >
            <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={500} />
          </div>
          <div id="html-dist"></div>
        </div>
      );
    }
  }


  export default Earnings;
