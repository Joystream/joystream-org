import React from 'react';
import './style.scss';

const VideoProgressBar = ({ t, index }) => {
  return (
    <div className="VideoProgressBar__wrapper">
      <span className="VideoProgressBar__text">
        {index}/7{' '}
        <span className="VideoProgressBar__text--secondary">{t('onboarding.page1.videoSection.playingNow')}</span>
      </span>
      <div className="VideoProgressBar__progress__wrapper">
        <div className="VideoProgressBar__progress"></div>
        <div className={`VideoProgressBar__progress VideoProgressBar__progress--${index}`}></div>
      </div>
    </div>
  );
};

export default VideoProgressBar;
