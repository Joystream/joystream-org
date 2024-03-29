import React, { useMemo } from 'react';
import cn from 'classnames';
import { object, bool } from 'prop-types';

import SectionHeader from '../SectionHeader';
import ChartWidget from './ChartWidget';
import WidgetHeading from '../WidgetHeading';
import Metrics from './Metrics';
import Feature from '../../Feature';
import { TractionContentSkeleton } from './Skeletons';

import useDashboardMedia from '../../../utils/useDashboardMedia/index.js';

import {
  chartMockData,
  parseStats,
  parseNumToThsdWith1Dec,
  roundWeeklyRate,
  parseChartData,
  withFallbackValues,
} from './data.js';

import './style.scss';

const propTypes = {
  data: object,
  loading: bool,
};

const Traction = ({ data, loading }) => {
  const { currentBreakpoints } = useDashboardMedia();
  const commentsAndReactionsChartHeight = useMemo(() => (currentBreakpoints === 'md' ? 314 : 250), [
    currentBreakpoints,
  ]);

  const parsedStats = parseStats(data?.traction);

  const parsedWeeklyChannelData = parseChartData(data?.traction?.weeklyChannelData);

  const parsedWeeklyVideoData = parseChartData(data?.traction?.weeklyVideoData);

  const parsedWeeklyCommentsAndReactionsData = parseChartData(data?.traction?.weeklyCommentsAndReactionsData);

  const parsedWeeklyVolumeOfSoldNFTs = parseChartData(data?.traction?.weeklyVolumeOfSoldNFTs, data?.token?.price);

  const isFeatureEnabled = false;

  return (
    <section className="dashboard-traction">
      <div className="dashboard-traction__container">
        <SectionHeader sectionId="traction" sectionHeading="Traction" />

        {loading ? (
          <TractionContentSkeleton />
        ) : (
          <div className={cn('dashboard-traction__grid', { 'with-feature-enabled': isFeatureEnabled })}>
            <ChartWidget
              heading="Content creators"
              termDefinitionKey="contentCreators"
              valueOfIndicator={parseNumToThsdWith1Dec(data?.traction?.totalNumberOfChannels)}
              growthRate={roundWeeklyRate(data?.traction?.totalNumberOfChannelsWeeklyChange)}
              indicator="Signs up"
              chartData={withFallbackValues(parsedWeeklyChannelData)}
            />
            <ChartWidget
              heading="Videos uploaded"
              termDefinitionKey="videos"
              valueOfIndicator={parseNumToThsdWith1Dec(data?.traction?.totalNumberOfVideos)}
              growthRate={roundWeeklyRate(data?.traction?.totalNumberOfVideosWeeklyChange)}
              indicator="Uploads"
              chartData={withFallbackValues(parsedWeeklyVideoData)}
              withYAxisMarginReduced
            />
            <ChartWidget
              heading="Comments & reactions"
              termDefinitionKey="commentsAndReactions"
              valueOfIndicator={parseNumToThsdWith1Dec(data?.traction?.totalNumberOfCommentsAndReactions)}
              growthRate={roundWeeklyRate(data?.traction?.totalNumberOfCommentsAndReactionsWeeklyChange)}
              indicator="Comments & reactions"
              chartData={withFallbackValues(parsedWeeklyCommentsAndReactionsData)}
              chartHeight={commentsAndReactionsChartHeight}
            />
            <div className="dashboard-traction__metrics">
              <WidgetHeading heading="Chain metrics" termDefinitionKey="chainMetrics" />
              <div className="dashboard-traction__metrics-wrapper">
                {parsedStats.map((m, i) => (
                  <Metrics key={i} {...m} />
                ))}
              </div>
            </div>

            <Feature disabled={!isFeatureEnabled}>
              <ChartWidget
                heading="NFTs"
                termDefinitionKey="nfts"
                valueOfIndicator={parseNumToThsdWith1Dec(data?.traction?.totalVolumeOfSoldNFTs)}
                growthRate={roundWeeklyRate(data?.traction?.totalVolumeOfSoldNFTsWeeklyChange)}
                indicator="Traded volume"
                chartData={parsedWeeklyVolumeOfSoldNFTs}
              />
              <ChartWidget
                heading="Creator tokens"
                termDefinitionKey="crts"
                valueOfIndicator="260K"
                growthRate={5}
                indicator="Traded volume"
                chartData={chartMockData}
              />
            </Feature>
          </div>
        )}
      </div>
    </section>
  );
};

Traction.propTypes = propTypes;

export default Traction;
