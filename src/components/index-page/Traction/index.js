import React from 'react';

import { ReactComponent as VideosMetric } from '../../../assets/svg/landing/video-metric.svg';
import { ReactComponent as CommentsAndReactionsMetric } from '../../../assets/svg/landing/comments-and-reactions-metric.svg';
import { ReactComponent as ChannelsMetric } from '../../../assets/svg/landing/channels-metric.svg';
import { ReactComponent as FollowersMetric } from '../../../assets/svg/landing/followers-metric.svg';
import { ReactComponent as ProfilesMetric } from '../../../assets/svg/landing/profiles-metric.svg';
import { ReactComponent as CreatorRewardsMetric } from '../../../assets/svg/landing/creator-rewards-metric.svg';
import { ReactComponent as InfoIcon } from '../../../assets/svg/info.svg';

import './style.scss';

const TractionCard = ({ change, value, infoText, modalText, icon, t }) => {
  return (
    <div className="IndexPage__traction__card-wrapper">
      <div className="IndexPage__traction__card">
        <div className="IndexPage__traction__card__visual">{icon}</div>
        <div className="IndexPage__traction__card__info">
          {infoText}
          <div className="IndexPage__traction__card__info__icon">
            <InfoIcon />
            <div className="IndexPage__traction__card__info__icon__modal">{modalText}</div>
          </div>
        </div>
        <div className="IndexPage__traction__card__value">{value}</div>
        {/* <div className="IndexPage__traction__card__change">
          +{change}% {t('landing.traction.lastWeek')}
        </div> */}
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
          <span className="IndexPage__traction__header__section-title">{t('landing.traction.sectionTitle')}</span>
          <h2 className="IndexPage__traction__header__title">{t('landing.traction.title')}</h2>
        </header>
        <div className="IndexPage__traction__cards">
          <TractionCard
            change={parseChangeValue(tractionData?.numberOfVideosChange)}
            value={parseMainValue(tractionData?.numberOfVideos)}
            infoText={t('landing.traction.videosUploaded.title')}
            icon={<VideosMetric />}
            modalText={t('landing.traction.videosUploaded.description')}
            t={t}
          />
          <TractionCard
            change={parseChangeValue(tractionData?.numberOfCommentsAndReactionsChange)}
            value={parseMainValue(tractionData?.numberOfCommentsAndReactions)}
            infoText={t('landing.traction.commentsAndReactions.title')}
            icon={<CommentsAndReactionsMetric />}
            modalText={t('landing.traction.commentsAndReactions.description')}
            t={t}
          />
          <TractionCard
            change={parseChangeValue(tractionData?.numberOfChannelsChange)}
            value={parseMainValue(tractionData?.numberOfChannels)}
            infoText={t('landing.traction.channels.title')}
            icon={<ChannelsMetric />}
            modalText={t('landing.traction.channels.description')}
            t={t}
          />
          <TractionCard
            change={parseChangeValue(tractionData?.numberOfFollowersChange)}
            value={parseMainValue(tractionData?.numberOfFollowers)}
            infoText={t('landing.traction.allFollowers.title')}
            icon={<FollowersMetric />}
            modalText={t('landing.traction.allFollowers.description')}
            t={t}
          />
          <TractionCard
            change={parseChangeValue(tractionData?.numberOfMembershipsChange)}
            value={parseMainValue(tractionData?.numberOfMemberships)}
            infoText={t('landing.traction.profiles.title')}
            icon={<ProfilesMetric />}
            modalText={t('landing.traction.profiles.description')}
            t={t}
          />
          <TractionCard
            change={parseChangeValue(tractionData?.totalPayoutsChange)}
            value={parseMainValue(tractionData?.totalPayouts, priceData.price)}
            infoText={t('landing.traction.creatorRewards.title')}
            icon={<CreatorRewardsMetric />}
            modalText={t('landing.traction.creatorRewards.description')}
            t={t}
          />
        </div>
      </div>
    </div>
  );
};

export default Traction;
