import React from 'react';
import ReactHighcharts from 'react-highcharts/ReactHighstock.src';
import priceData from './tokendata.json';
import moment from 'moment';

const Hightchart = () => {
  const options = { style: 'currency', currency: 'USD' };
  const numberFormat = new Intl.NumberFormat('en-US', options);
  const configPrice = {
    yAxis: [
      {
        offset: 20,
        gridLineColor: '#7B8A95',
        labels: {
          formatter: function() {
            return numberFormat.format(this.value);
          },
          x: -15,
          style: {
            color: '#7B8A95',
            position: 'absolute',
          },
          align: 'left',
        },
      },
    ],
    tooltip: {
      shared: true,
      formatter: function() {
        return numberFormat.format(this.y, 0) + '</b><br/>' + moment(this.x).format('MMMM Do YYYY, h:mm');
      },
    },
    plotOptions: {
      series: {
        showInNavigator: true,
        gapSize: 6,
      },
    },
    rangeSelector: {
      selected: 1,
    },
    title: {
      text: '',
    },
    chart: {
      // height: 600,
      with: '100%',
      backgroundColor: 'transparent',
    },

    credits: {
      enabled: false,
    },

    legend: {
      enabled: true,
    },
    xAxis: {
      type: 'date',
      labels: {
        style: {
          color: '#7B8A95', // Set the color for X-axis labels
        },
      },
    },
    rangeSelector: {
      enabled: false,
    },
    series: [
      {
        name: 'Price',
        type: 'spline',

        data: priceData,
        tooltip: {
          valueDecimals: 2,
        },
      },
    ],
    legend: {
      enabled: false, // Disable the legend
    },
  };

  return (
    <div style={{ width: '100%' }}>
      <ReactHighcharts config={configPrice}></ReactHighcharts>
    </div>
  );
};

export default Hightchart;
