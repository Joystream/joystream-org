import React, { useMemo } from 'react';

import SectionHeader from '../SectionHeader';
import ChartWidget from './ChartWidget';
import WidgetHeading from '../WidgetHeading';
import Metrics from './Metrics';

import useDashboardMedia from '../../../utils/useDashboardMedia/index.js';

import { chartMockData, metrics } from './data.js';

import './style.scss';

const Traction = () => {
  const { currentBreakpoints } = useDashboardMedia();
  const commentsAndReactionsChartHeight = useMemo(() => (currentBreakpoints === 'md' ? 314 : 250), [
    currentBreakpoints,
  ]);

  return (
    <section className="dashboard-traction">
      <div className="dashboard-traction__container">
        <SectionHeader sectionId="traction" sectionHeading="Traction" />
        <div className="dashboard-traction__grid">
          <ChartWidget
            heading="Content creators"
            valueOfIndicatorInThousands={1.2}
            growthRate={5}
            indicator="Signs up"
            chartData={chartMockData}
          />
          <ChartWidget
            heading="Videos uploaded"
            valueOfIndicatorInThousands={300}
            growthRate={2}
            indicator="Uploads"
            chartData={chartMockData}
          />
          <ChartWidget
            heading="Comments & reactions"
            valueOfIndicatorInThousands={1.9}
            growthRate={12}
            indicator="Comments & reactions"
            chartData={chartMockData}
            chartHeight={commentsAndReactionsChartHeight}
          />
          <div className="dashboard-traction__metrics">
            <WidgetHeading heading="Chain metrics" />
            <div className="dashboard-traction__metrics-wrapper">
              {metrics.map((m, i) => (
                <Metrics key={i} {...m} />
              ))}
            </div>
          </div>
          <ChartWidget
            heading="NFTs"
            valueOfIndicatorInThousands={260}
            growthRate={5}
            indicator="Traded volume"
            chartData={chartMockData}
          />
          <ChartWidget
            heading="Creator tokens"
            valueOfIndicatorInThousands={260}
            growthRate={5}
            indicator="Traded volume"
            chartData={chartMockData}
          />
        </div>
      </div>
    </section>
  );
};

export default Traction;
