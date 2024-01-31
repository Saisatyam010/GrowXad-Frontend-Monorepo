import React, { useEffect, useRef } from 'react';
import './Dashboard.css'
import { Container, Row, Col } from 'react-bootstrap'
import ReactApexChart from 'react-apexcharts';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';


export const Dashboard = () => {
  return (
    <>

      <Container fluid className='py-4'>
        <Row>
          <Col md={6}>
            <div className='dp_dashboard_chart_container'>
              <h4>Statistics : Last 7 Days </h4>
              {/* <StatisticsChart/> */}
            </div>
          </Col>
          <Col md={6}>
            <Row>
              <Col md={6}>
                <div className='dp_dashboard_chart_container'>
                  <h4 className='text-center'>Impressions </h4>
                  <PieChart />
                </div>
              </Col>
              <Col md={6}>
                <div className='dp_dashboard_chart_container'>
                  <h4 className='text-center'>Spends, $ </h4>
                  <PieChart />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export const PieChart = () => {
  const options = {
    chart: {
      height: 150,
      type: 'radialBar',
      offsetY: -10,
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        dataLabels: {
          value: {
            offsetY: 0, // Adjust this value to position the label within the circle
            fontSize: '20px',
            color: undefined,
            show: true, // Show the value inside the circle
            formatter: function (val) {
              return val + '%';
            },
          },
        },
      },
    },

    fill: {
      colors: ['rgb(115, 103, 240)'],
      type: 'gradient',
      gradient: {
        shade: 'dark',
        shadeIntensity: 0.15,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 65, 91],
      },
    },
    stroke: {
      dashArray: 10,
    },
    labels: [' '],
  };

  const series = [67];

  return (

    <div id="chart">
      <ReactApexChart options={options} series={series} type="radialBar" height={200} />
    </div>

  );
};


// const StatisticsChart = () => {
//   const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top'
//       },
//       title: {
//         display: true,
//         text: 'Chart.js Line Chart',
//       },
//     },
//   };

//   const data = {
//     labels,
//     datasets: [
//       {
//         label: 'Dataset 1',
//         borderColor: 'rgb(255, 99, 132)',
//         backgroundColor: 'rgba(255, 99, 132, 0.5)',
//       },
//       {
//         label: 'Dataset 2',
//         borderColor: 'rgb(53, 162, 235)',
//         backgroundColor: 'rgba(53, 162, 235, 0.5)',
//       },
//     ],
//   };

//   return <Line options={options} data={data} />;
// };

