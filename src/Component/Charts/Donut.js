import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";


const options = { labels: ["complete", "panding", "not start"] };
const gridSize = 15;
const gridInnerSize = gridSize - 20;

class Donut extends React.Component {
  
  constructor(props) {
    super(props);

      this.state = {
      
        series: [35, 65,24],
        chart: {
            type: 'pie',
        },
        
        legend: {
            position: 'bottom'
        },
        dataLabels: {
            enabled: true,
            offsetX: 50,
            offsetY: 50
        },
        colors: ['#00e396', '#ff4560'],
        innerWidth: '90%',
        options: {
          chart: {
            type: 'donut',

          },
          responsive: [{
            breakpoint: 480,
            options: {
                plotOptions: {
                    pie: {
                      size: gridSize,
                      innerSize: gridInnerSize,
                        donut: {
                          labels: {
                            show: true,
                            show: Boolean,
                            name: {
                              title: 62,
                            },
                            value: {
                              title: "Completed",
                            }
                          },
                          },
                      customScale: 0.2,
                      size: 200,
                    }
                  },
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
          <div id="chart" className="bg-white h-[150px] max-[768px]:h-full flex items-center">
            <ReactApexChart options={options} series={this.state.series} type="donut" height={300}/>
          </div>
          <div id="html-dist"></div>
        </div>
      );
    }
  }

  export default Donut;
