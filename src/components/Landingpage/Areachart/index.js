import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

const AreaChart = () => {
  const chartOptions = {
    chart: {
      type: 'area',
    },
    title: {
      text: 'Area Chart Example',
    },
    xAxis: {
      categories: [0, 5, 10, 15, 20, 25],
    },
    yAxis: {
      title: {
        text: 'Value',
      },
    },
    series: [
      {
        name: 'Series 1',
        data: [30, 40, 35, 50, 49, 60],
      },
      {
        name: 'Series 2',
        data: [20, 35, 30, 40, 60, 50],
      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
};

export default AreaChart;
