import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

const options = { labels: ["complete : 125 Projects", "panding : 125 Projects", "not start : 125 Projects", "Yet to Start : 125 Projects"] };

class Donut2 extends React.Component {
        constructor(props) {
          super(props);

          this.state = {
          
            series: [10, 30, 40, 20],
            options: {
              chart: {
                type: 'donut',
              },
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            },
          
          
          };
        }

      

        render() {
          return (
            <div>
              <div id="chart">
                <ReactApexChart options={options} series={this.state.series} type="donut" />
              </div>
              <div id="html-dist"></div>
            </div>
          );
        }
      
  }

  export default Donut2;