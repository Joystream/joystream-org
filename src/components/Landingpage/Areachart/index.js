import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

const AreaChart = () => {
  const chartOptions = {
    chart: {
      type: 'area',
      backgroundColor: 'transparent',
      height: 250,
    },
    title: {
      text: '',
    },
    xAxis: {
      categories: [0, 5, 10, 15, 20, 25],
      min: 0,
    },
    legend: {
      enabled: true,
      itemStyle: {
        color: '#fff',
        fontSize: '14px',
        fontWeight: '400',
      },
      itemHoverStyle: {
        color: '#f0f',
      },
      symbol: 'square',
      symbolRadius: 2,
    },
    yAxis: {
      gridLineWidth: 1, // Adjust the width of the grid lines
      gridLineColor: '#7B8A95', // Set the color for the grid lines
      title: {
        text: '',
      },
      min: 0,
    },
    plotOptions: {
      series: {
        marker: {
          enabled: false, // Disable markers (points)
        },
        clip: false,
      },
    },
    // colors: ['#ACACFA', '#9B9CF9', '#8D8DF9', '#7D7EF8', '#6C6CFF'],
    colors: ['#6C6CFF', '#7D7EF8', '#8D8DF9', '#9B9CF9', '#ACACFA'],
    series: [
      {
        name: 'Community Founding members',
        data: [20, 30, 32, 50, 55, 60],
      },
      {
        name: 'Reserved 2',
        data: [20, 35, 37, 53, 58, 63],
      },
      {
        name: 'Reserved 1',
        data: [20, 40, 42, 56, 61, 66],
      },
      {
        name: 'Membership Airdrop',
        data: [20, 45, 47, 59, 64, 69],
      },
      {
        name: 'Investors',
        data: [20, 50, 52, 62, 66, 72],
      },
      {
        name: 'Jsgenesis Founding Members',
        data: [20, 55, 57, 65, 69, 77],
      },
    ],
  };

  return (
    <div style={{ width: '100%' }}>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
};

export default AreaChart;
