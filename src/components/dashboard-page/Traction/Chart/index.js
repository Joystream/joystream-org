import React, { useMemo } from 'react';
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Text, Bar } from 'recharts';
import { bool, arrayOf, shape, string, number } from 'prop-types';

import useDashboardMedia from '../../../../utils/useDashboardMedia';

const propTypes = {
  withBarGapExtended: bool,
  data: arrayOf(
    shape({
      month: string.isRequired,
      0: number.isRequired,
      1: number.isRequired,
      2: number.isRequired,
      3: number.isRequired,
    })
  ),
  chartHeight: number,
};

const Chart = ({ withBarGapExtended, data, chartHeight }) => {
  const { currentBreakpoints } = useDashboardMedia();
  const barGap = useMemo(() => {
    switch (currentBreakpoints) {
      case 'xxs':
        return 1;
      case 'xs':
        return 1.6;
      case 'sm':
        return 3;
      case 'md':
        return 1.8;
      case 'lg':
      case 'xl':
        return withBarGapExtended ? 2.8 : 1.6;
      default:
        return 1;
    }
  }, [currentBreakpoints, withBarGapExtended]);

  return (
    <ResponsiveContainer height={chartHeight}>
      <BarChart className="dashboard-traction-chart" data={data} barGap={barGap} barCategoryGap={1}>
        <CartesianGrid vertical={false} stroke="#BBD9F621" />
        <XAxis
          dataKey="month"
          axisLine={{ stroke: '#BBD9F621' }}
          tick={tickProps => (
            <Text {...tickProps} className="custom-axis-tick">
              {tickProps.payload.value}
            </Text>
          )}
          tickLine={false}
          tickMargin={24}
        />
        <YAxis
          axisLine={{ stroke: '#BBD9F621' }}
          tick={tickProps => (
            <Text {...tickProps} className="custom-axis-tick">
              {tickProps.payload.value}
            </Text>
          )}
          tickLine={false}
          tickMargin={28}
        />
        {Array.from({ length: 4 }, (_, i) => {
          return <Bar dataKey={i} fill="#B4BBFF" radius={2} />;
        })}
      </BarChart>
    </ResponsiveContainer>
  );
};

Chart.propTypes = propTypes;
Chart.defaultProps = {
  chartHeight: 250,
};

export default Chart;
