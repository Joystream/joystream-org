import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const LineChart = () => {
  const options = {
    chart: {
      type: 'line',
      backgroundColor: 'transparent',
    },
    legend: {
      enabled: true,
    },
    title: {
      text: '',
    },
    // xAxis: {
    //   categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Replace with your X-axis categories
    // },
    yAxis: {
      title: {
        text: '',
      },
      gridLineColor: '#7B8A95',
    },
    plotOptions: {
      series: {
        marker: {
          enabled: false, // Disable markers (points)
        },
        clip: false,
      },
    },
    series: [
      {
        name: 'Series 1',
        data: [3, 1, 5, 2, 3, 2, 4, 5, 5, 6, 2, 3, 4, 1, 8, 7, 2, 4, 8, 2, 5, 4, 5, 9], // Replace with your series data
      },
      // Add more series objects if you have multiple lines on the chart
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default LineChart;
