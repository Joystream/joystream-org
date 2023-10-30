import React from 'react';

import { ReactComponent as VideosMetric } from '../../../assets/svg/landing/video-metric.svg';
import { ReactComponent as CommentsAndReactionsMetric } from '../../../assets/svg/landing/comments-and-reactions-metric.svg';
import { ReactComponent as ChannelsMetric } from '../../../assets/svg/landing/channels-metric.svg';
import { ReactComponent as FollowersMetric } from '../../../assets/svg/landing/followers-metric.svg';
import { ReactComponent as ProfilesMetric } from '../../../assets/svg/landing/profiles-metric.svg';
import { ReactComponent as CreatorRewardsMetric } from '../../../assets/svg/landing/creator-rewards-metric.svg';
import { ReactComponent as InfoIcon } from '../../../assets/svg/info.svg';

import './style.scss';

const TractionCard = ({ change, value, infoText, icon }) => {
  return (
    <div className="IndexPage__traction__card-wrapper">
      <div className="IndexPage__traction__card">
        <div className="IndexPage__traction__card__visual">{icon}</div>
        <div className="IndexPage__traction__card__change">+{change}% Last week</div>
        <div className="IndexPage__traction__card__value">{value}</div>
        <div className="IndexPage__traction__card__info">
          {infoText}
          <div className="IndexPage__traction__card__info__icon">
            <InfoIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

const Traction = ({ t }) => {
  return (
    <div className="IndexPage__traction-wrapper">
      <div className="IndexPage__traction">
        <header className="IndexPage__traction__header">
          <span className="IndexPage__traction__header__section-title">TRACTION</span>
          <h2 className="IndexPage__traction__header__title">Growth and Engagement</h2>
        </header>
        <div className="IndexPage__traction__cards">
          <TractionCard change="12" value="2 134 321" infoText="Videos uploaded" icon={<VideosMetric />} />
          <TractionCard
            change="5"
            value="3 545"
            infoText="Comments & Reactions"
            icon={<CommentsAndReactionsMetric />}
          />
          <TractionCard change="7" value="1 530" infoText="Channels" icon={<ChannelsMetric />} />
          <TractionCard change="5" value="5 432" infoText="All followers" icon={<FollowersMetric />} />
          <TractionCard change="2" value="954" infoText="Profiles" icon={<ProfilesMetric />} />
          <TractionCard change="9" value="$25 323" infoText="Creator Rewards" icon={<CreatorRewardsMetric />} />
        </div>
      </div>
    </div>
  );
};

export default Traction;
