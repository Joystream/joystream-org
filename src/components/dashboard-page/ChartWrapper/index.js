import React from 'react';
import { node, number } from 'prop-types';

import './style.scss';

const propTypes = {
  children: node.isRequired,
  chartHeight: number.isRequired,
};

/*
 * This component addresses the slowness of ResponsiveContainer (recharts) when resizing the page.
 * Workaround for https://github.com/recharts/recharts/issues/1767
 */

const ChartWrapper = ({ children, chartHeight }) => {
  return (
    <div className="chart-wrapper" style={{ paddingBottom: `${chartHeight}px` }}>
      <div className="chart-wrapper__container">{children}</div>
    </div>
  );
};

ChartWrapper.propTypes = propTypes;

export default ChartWrapper;
