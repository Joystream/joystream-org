import React from 'react';
import Highcharts from 'highcharts/highstock';
import PieChart from 'highcharts-react-official';

const options = {
  chart: {
    type: 'pie',
    backgroundColor: 'transparent',
  },
  title: {
    text: '',
  },
  credits: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '{point.percentage:.1f} %',
        color: '#fff',
      },
      showInLegend: true,
      color: '#fff',
    },
  },
  series: [
    {
      name: '',
      color: '#006600',
      lineWidth: 1,
      marker: {
        enabled: false,
        symbol: 'circle',
        radius: 3,
        states: {
          hover: {
            enabled: true,
            lineWidth: 1,
          },
        },
      },
      data: [
        {
          y: 25,
          name: 'Creator payouts',
          color: '#6C6CFF',
        },
        {
          y: 21,
          name: 'Spending proposals',
          color: '#ACACFA',
        },
        {
          y: 19,
          name: 'Workers rewards',
          color: '#9B9CF9',
        },
        {
          y: 35,
          name: 'Validator rewards',
          color: '#7D7EF8',
        },
      ],
    },
  ],
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
};

const PiechartApp = () => {
  return (
    <div className="flex justify-center w-100 items-center">
      <PieChart highcharts={Highcharts} options={options} />
    </div>
  );
};

export default PiechartApp;
