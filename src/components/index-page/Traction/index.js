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
            <div className="IndexPage__traction__card__info__icon__modal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam ultricies.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const parseChangeValue = value => {
  if (!value) return '0';

  return `${value}`;
};

const parseMainValue = (value, price = undefined) => {
  if (!value) return '0';

  if (price && price === 0) {
    return '0';
  }

  let options = {};
  if (price) {
    value = Math.round(value * price);
    options = { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 };
  }

  const intlNumber = new Intl.NumberFormat('en-US', options).formatToParts(value);
  return intlNumber.map(part => (part.value === ',' ? ' ' : part.value)).join('');
};

const Traction = ({ tractionData, priceData, t }) => {
  return (
    <div className="IndexPage__traction-wrapper">
      <div className="IndexPage__traction">
        <header className="IndexPage__traction__header">
          <span className="IndexPage__traction__header__section-title">TRACTION</span>
          <h2 className="IndexPage__traction__header__title">Growth and Engagement</h2>
        </header>
        <div className="IndexPage__traction__cards">
          <TractionCard
            change={parseChangeValue(tractionData?.numberOfVideosChange)}
            value={parseMainValue(tractionData?.numberOfVideos)}
            infoText="Videos uploaded"
            icon={<VideosMetric />}
          />
          <TractionCard
            change={parseChangeValue(tractionData?.numberOfCommentsAndReactionsChange)}
            value={parseMainValue(tractionData?.numberOfCommentsAndReactions)}
            infoText="Comments & Reactions"
            icon={<CommentsAndReactionsMetric />}
          />
          <TractionCard
            change={parseChangeValue(tractionData?.numberOfChannelsChange)}
            value={parseMainValue(tractionData?.numberOfChannels)}
            infoText="Channels"
            icon={<ChannelsMetric />}
          />
          <TractionCard
            change={parseChangeValue(tractionData?.numberOfFollowersChange)}
            value={parseMainValue(tractionData?.numberOfFollowers)}
            infoText="All followers"
            icon={<FollowersMetric />}
          />
          <TractionCard
            change={parseChangeValue(tractionData?.numberOfMembershipsChange)}
            value={parseMainValue(tractionData?.numberOfMemberships)}
            infoText="Profiles"
            icon={<ProfilesMetric />}
          />
          <TractionCard
            change={parseChangeValue(tractionData?.totalPayoutsChange)}
            value={parseMainValue(tractionData?.totalPayouts, priceData.price)}
            infoText="Creator Rewards"
            icon={<CreatorRewardsMetric />}
          />
        </div>
      </div>
    </div>
  );
};

export default Traction;
