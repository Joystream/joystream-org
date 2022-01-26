import React from 'react';

import './style.scss';

const Statistics = ({ t }) => {
  // TODO fetch counts from api
  const forumPosts = 2154;
  const proposals = 943;
  const videos = 3561;
  const channels = 485;
  const currentWorkers = 193;
  const jobOpenings = 320;

  return (
    <div className="Statistics__wrapper">
      <div className="Statistics__content">
        <div className="Statistics__item">
          <div className="Statistics__item__title">{t('onboarding.page2.statistics.forumPosts')}</div>
          <div className="Statistics__item__count">{forumPosts}</div>
        </div>
        <div className="Statistics__item">
          <div className="Statistics__item__title">{t('onboarding.page2.statistics.proposals')}</div>
          <div className="Statistics__item__count">{proposals}</div>
        </div>
        <div className="Statistics__item">
          <div className="Statistics__item__title">{t('onboarding.page2.statistics.videos')}</div>
          <div className="Statistics__item__count">{videos}</div>
        </div>
        <div className="Statistics__item">
          <div className="Statistics__item__title">{t('onboarding.page2.statistics.channels')}</div>
          <div className="Statistics__item__count">{channels}</div>
        </div>
        <div className="Statistics__item">
          <div className="Statistics__item__title">{t('onboarding.page2.statistics.currentWorkers')}</div>
          <div className="Statistics__item__count">{currentWorkers}</div>
        </div>
        <div className="Statistics__item">
          <div className="Statistics__item__title">{t('onboarding.page2.statistics.jobOpenings')}</div>
          <div className="Statistics__item__count">{jobOpenings}</div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
