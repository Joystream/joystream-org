import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const BarChart = () => {
  // Sample data for the bar chart
  const categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const data = [100, 150, 360, 600, 400, 800];

  // Configuration for the bar chart
  const options = {
    chart: {
      type: 'column',
      backgroundColor: 'transparent',
      height: 250,
    },
    title: {
      text: '',
      align: 'left',
    },
    xAxis: {
      categories: categories,
      crosshair: true,
    },
    yAxis: {
      gridLineWidth: 1, // Adjust the width of the grid lines
      gridLineColor: '#7B8A95', // Set the color for the grid lines
      title: {
        text: '', // Optional: Set the title for the yAxis
      },
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
        color: '#B4BBFF',
        borderRadius: '2px',
      },
    },
    legend: {
      enabled: false,
    },
    series: [
      {
        name: '',
        data: data,
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default BarChart;
