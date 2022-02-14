import React, { useState, useEffect } from 'react';

import Video from '../Video';
import VideoProgressBar from './VideoProgressBar';
import Link from '../../Link';
import { ReactComponent as Arrow } from '../../../assets/svg/arrow-down-small.svg';
import { ReactComponent as LessonListMobile } from '../../../assets/svg/lesson-list-m-icon.svg';
import useContributors from '../../../utils/pages/onboarding/useContributors';
import useLessonList from '../../../utils/pages/onboarding/useLessonList';
import './style.scss';

const VideoSection = ({
  t,
  title,
  subtitle,
  index,
  lesson,
  nextVideoUrl,
  showLessonList,
  onShowGetStarted,
  shouldReloadRole,
}) => {
  const nextVideoButtonTitle = t('onboarding.footer.button.nextVideo.text');
  const getStartedButtonTitle = t('onboarding.button.getStarted.text');
  const lessonListButtonTitle = t('onboarding.page1.videoSection.button.lessonList.text');
  const [role, setRole] = useState();
  const { getTotalVideos, getVideoIndex } = useLessonList();
  const [totalVideos, setTotalVideos] = useState(7);
  const [videoIndex, setVideoIndex] = useState(index);

  const { getContributorPageUrl } = useContributors();

  useEffect(() => {
    const role = localStorage.getItem('JoystreamRole');
    setRole(role);
    if (role) {
      setTotalVideos(getTotalVideos());
      setVideoIndex(getVideoIndex(index));
    }
  }, [shouldReloadRole, getTotalVideos, getVideoIndex, index]);

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
              <Video lesson={lesson} />
            </div>
            <div className="VideoSection__hero__bg-pattern--2"></div>
          </div>
          <div className="VideoSection__hero__actions">
            <div
              role="presentation"
              onClick={showLessonList}
              className="VideoSection__hero__button  VideoSection__hero__button--dark 
              VideoSection__hero__button--lesson-list"
            >
              <p className="VideoSection__hero__button-text">{lessonListButtonTitle}</p>
              <Arrow className="VideoSection__hero__button-arrow" />
            </div>
            <div className="VideoSection__hero__progressBar">
              <VideoProgressBar t={t} index={videoIndex} maxIndex={totalVideos} />
            </div>
            <div
              role="presentation"
              onClick={showLessonList}
              className="VideoSection__hero__button  VideoSection__hero__button--dark 
              VideoSection__hero__button--lesson-list--mobile"
            >
              <LessonListMobile className="VideoSection__hero__button-list" />
            </div>
            {nextVideoUrl ? (
              <Link key={nextVideoButtonTitle} to={nextVideoUrl}>
                <div className="VideoSection__hero__button">
                  <p className="VideoSection__hero__button-text">{nextVideoButtonTitle}</p>
                  <Arrow className="VideoSection__hero__button-arrow" />
                </div>
              </Link>
            ) : role ? (
              <Link key={getStartedButtonTitle} to={getContributorPageUrl(role)}>
                <div className="VideoSection__hero__button" role="presentation" onClick={onShowGetStarted}>
                  <p className="VideoSection__hero__button-text">
                    {nextVideoUrl ? nextVideoButtonTitle : getStartedButtonTitle}
                  </p>
                  <Arrow className="VideoSection__hero__button-arrow" />
                </div>
              </Link>
            ) : (
              <div className="VideoSection__hero__button" role="presentation" onClick={onShowGetStarted}>
                <p className="VideoSection__hero__button-text">{getStartedButtonTitle}</p>
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
