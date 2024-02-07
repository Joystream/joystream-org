import React, { useMemo } from 'react';
import { object } from 'prop-types';

import SectionHeader from '../SectionHeader';
import ChartWidget from './ChartWidget';
import WidgetHeading from '../WidgetHeading';
import Metrics from './Metrics';

import useDashboardMedia from '../../../utils/useDashboardMedia/index.js';

import { chartMockData, parseStats, parseNumToThsdWith1Dec, roundWeeklyRate, parseChartData } from './data.js';

import './style.scss';

const propTypes = {
  data: object,
};

const Traction = ({ data }) => {
  const { currentBreakpoints } = useDashboardMedia();
  const commentsAndReactionsChartHeight = useMemo(() => (currentBreakpoints === 'md' ? 314 : 250), [
    currentBreakpoints,
  ]);

  const parsedStats = parseStats(data);

  const parsedWeeklyChannelData = parseChartData(data?.weeklyChannelData);

  const parsedWeeklyVideoData = parseChartData(data?.weeklyVideoData);

  const parsedWeeklyCommentsAndReactionsData = parseChartData(data?.weeklyCommentsAndReactionsData);

  const parsedWeeklyVolumeOfSoldNFTs = parseChartData(data?.weeklyVolumeOfSoldNFTs);

  return (
    <section className="dashboard-traction">
      <div className="dashboard-traction__container">
        <SectionHeader sectionId="traction" sectionHeading="Traction" />
        <div className="dashboard-traction__grid">
          <ChartWidget
            heading="Content creators"
            valueOfIndicatorInThousands={parseNumToThsdWith1Dec(data?.totalNumberOfChannels)}
            growthRate={roundWeeklyRate(data?.totalNumberOfChannelsWeeklyChange)}
            indicator="Signs up"
            chartData={parsedWeeklyChannelData}
          />
          <ChartWidget
            heading="Videos uploaded"
            valueOfIndicatorInThousands={parseNumToThsdWith1Dec(data?.totalNumberOfVideos)}
            growthRate={roundWeeklyRate(data?.totalNumberOfVideosWeeklyChange)}
            indicator="Uploads"
            chartData={parsedWeeklyVideoData}
          />
          <ChartWidget
            heading="Comments & reactions"
            valueOfIndicatorInThousands={parseNumToThsdWith1Dec(data?.totalNumberOfCommentsAndReactions)}
            growthRate={roundWeeklyRate(data?.totalNumberOfCommentsAndReactionsWeeklyChange)}
            indicator="Comments & reactions"
            chartData={parsedWeeklyCommentsAndReactionsData}
            chartHeight={commentsAndReactionsChartHeight}
          />
          <div className="dashboard-traction__metrics">
            <WidgetHeading heading="Chain metrics" />
            <div className="dashboard-traction__metrics-wrapper">
              {parsedStats.map((m, i) => (
                <Metrics key={i} {...m} />
              ))}
            </div>
          </div>
          <ChartWidget
            heading="NFTs"
            valueOfIndicatorInThousands={parseNumToThsdWith1Dec(data?.totalVolumeOfSoldNFTs)}
            growthRate={roundWeeklyRate(data?.totalVolumeOfSoldNFTsWeeklyChange)}
            indicator="Traded volume"
            chartData={parsedWeeklyVolumeOfSoldNFTs}
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

Traction.propTypes = propTypes;

export default Traction;
