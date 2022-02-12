import React, { useEffect, useState } from 'react';

import Video from '../Video';
import VideoProgressBar from './VideoProgressBar';
import Link from '../../Link';
import { ReactComponent as Arrow } from '../../../assets/svg/arrow-down-small.svg';
import { ReactComponent as LessonListMobile } from '../../../assets/svg/lesson-list-m-icon.svg';
import useContributors from '../../../utils/pages/onboarding/useContributors';
import './style.scss';

const VideoSection = ({ t, title, subtitle, index, nextVideoUrl, showLessonList, onShowGetStarted }) => {
  const nextVideoButtonTitle = t('onboarding.footer.button.nextVideo.text');
  const getStartedButtonTitle = t('onboarding.button.getStarted.text');
  const lessonListButtonTitle = t('onboarding.page1.videoSection.button.lessonList.text');
  const { getContributorPageUrl } = useContributors();

  const [contributorPageUrl, setContributorPageUrl] = useState();

  useEffect(() => {
    setContributorPageUrl(getContributorPageUrl());
  }, [getContributorPageUrl]);

  return (
    <div className="VideoSection__wrapper">
      <div className="VideoSection__hero">
        <div className="VideoSection__hero__content">
          <h1 className="VideoSection__hero__title">
            {title.split('<br/>').map((line, index) => {
              return (
                <span key={index}>
                  {line}
                  <br />
                </span>
              );
            })}
          </h1>
          <h2 className="VideoSection__hero__subtitle">{subtitle}</h2>
          <div className="VideoSection__hero__video__wrapper">
            <div className="VideoSection__hero__bg-pattern--1"></div>
            <div className="VideoSection__hero__video">
              <Video />
            </div>
            <div className="VideoSection__hero__bg-pattern--2"></div>
          </div>
          <div className="VideoSection__hero__actions">
            <div
              role="presentation"
              onClick={showLessonList}
              className="VideoSection__hero__button  VideoSection__hero__button--dark VideoSection__hero__button--lesson-list"
            >
              <p className="VideoSection__hero__button-text">{lessonListButtonTitle}</p>
              <Arrow className="VideoSection__hero__button-arrow" />
            </div>
            <div className="VideoSection__hero__progressBar">
              <VideoProgressBar t={t} index={index} />
            </div>
            <div
              role="presentation"
              onClick={showLessonList}
              className="VideoSection__hero__button  VideoSection__hero__button--dark VideoSection__hero__button--lesson-list--mobile"
            >
              <LessonListMobile className="VideoSection__hero__button-list" />
            </div>
            {nextVideoUrl ? (
              <Link key={nextVideoUrl ? nextVideoButtonTitle : getStartedButtonTitle} to={nextVideoUrl}>
                <div className="VideoSection__hero__button">
                  <p className="VideoSection__hero__button-text">
                    {nextVideoUrl ? nextVideoButtonTitle : getStartedButtonTitle}
                  </p>
                  <Arrow className="VideoSection__hero__button-arrow" />
                </div>
              </Link>
            ) : contributorPageUrl ? (
              <Link key={getStartedButtonTitle} to={contributorPageUrl}>
                <div className="VideoSection__hero__button" role="presentation" onClick={onShowGetStarted}>
                  <p className="VideoSection__hero__button-text">
                    {nextVideoUrl ? nextVideoButtonTitle : getStartedButtonTitle}
                  </p>
                  <Arrow className="VideoSection__hero__button-arrow" />
                </div>
              </Link>
            ) : (
              <div className="VideoSection__hero__button" role="presentation" onClick={onShowGetStarted}>
                <p className="VideoSection__hero__button-text">
                  {nextVideoUrl ? nextVideoButtonTitle : getStartedButtonTitle}
                </p>
                <Arrow className="VideoSection__hero__button-arrow" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
