import React from 'react';
import './style.scss';

const VideoProgressBar = ({ t, index, maxIndex }) => {
  return (
    <div className="VideoProgressBar__wrapper">
      <span className="VideoProgressBar__text">
        {index}/{maxIndex}{' '}
        <span className="VideoProgressBar__text--secondary">{t('onboarding.page1.videoSection.playingNow')}</span>
      </span>
      <div className="VideoProgressBar__progress__wrapper">
        <div className={`VideoProgressBar__progress__max-${maxIndex}`}></div>
        <div
          className={`VideoProgressBar__progress__max-${maxIndex} 
          VideoProgressBar__progress__max-${maxIndex}--${index}`}
        ></div>
      </div>
    </div>
  );
};

export default VideoProgressBar;
