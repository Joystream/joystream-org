import React from 'react';

import Video from '../Video';
import VideoProgressBar from './VideoProgressBar';
import Link from '../../Link';
import { ReactComponent as Arrow } from '../../../assets/svg/arrow-down-small.svg';
import './style.scss';

const VideoSection = ({ t, title, subtitle, index, videoUrl }) => {
  const nextVideoButtonTitle = t('onboarding.footer.button.nextVideo.text');
  const nextVideoPageUrl = '/next-video';
  const lessonListButtonTitle = t('onboarding.page1.videoSection.button.lessonList.text');
  const lessonListPageUrl = '/lessonList';
  return (
    <div className="VideoSection__wrapper">
      <div className="VideoSection__hero">
        <div className="VideoSection__hero__content">
          <h1 className="VideoSection__hero__title">{title}</h1>
          <h2 className="VideoSection__hero__subtitle">{subtitle}</h2>
          <div className="VideoSection__hero__video">
            <Video />
          </div>
          <div className="VideoSection__hero__actions">
            <Link key={lessonListButtonTitle} to={lessonListPageUrl}>
              <div className="VideoSection__hero__button  VideoSection__hero__button--dark">
                <p className="VideoSection__hero__button-text">{lessonListButtonTitle}</p>
                <Arrow className="VideoSection__hero__button-arrow" />
              </div>
            </Link>
            <div className="VideoSection__hero__progressBar">
              <VideoProgressBar t={t} index={index} />
              <Link key={nextVideoButtonTitle} to={nextVideoPageUrl}>
                <div className="VideoSection__hero__button">
                  <p className="VideoSection__hero__button-text">{nextVideoButtonTitle}</p>
                  <Arrow className="VideoSection__hero__button-arrow" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
