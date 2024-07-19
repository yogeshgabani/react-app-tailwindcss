import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";


// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
    
//       series: [44, 55, 13, 43, 22],
//       options: {
//         chart: {
//           width: 380,
//           type: 'pie',
//         },
//         fill: {
//           colors: ['#F44336', '#E91E63', '#9C27B0']
//         },
//         labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
//         responsive: [{
//           breakpoint: 480,
//           options: {
//             chart: {
//               width: 200
//             },
//             legend: {
//               position: 'bottom'
//             }
//           }
//         }]
//       },
    
    
//     };
//   }



//   render() {
//     return (
//       <div>
//         <div id="chart">
//           <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width={380} />
//         </div>
//         <div id="html-dist"></div>
//       </div>
//     );
//   }
// }

class Linechart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [{
          // name: "Desktops",
          data: [10, 41, 35, 51, 49, 62, 69, 91]
      }],
      options: {
        chart: {
          background: '#ffffff',
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          display: false,
          
        },
        stroke: {
          curve: 'straight',
          width: 1.5,
        },
        title: {
          // text: 'Product Trends by Month',
          // align: 'left'
        },
        
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          // categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
          enabled: false,
        }
      },
    
    
    };
  }



  render() {
    return (
      <div>
        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={80} />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default Linechart;
