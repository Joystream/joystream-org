import React, { useState, useEffect, useCallback } from 'react';
import Link from '../../Link';
import { ReactComponent as NavClose } from '../../../assets/svg/navbar-close.svg';
import { ReactComponent as IconPlaying } from '../../../assets/svg/icon-playing.svg';
import { ReactComponent as IconPlay } from '../../../assets/svg/icon-play.svg';
import { ReactComponent as IconPlayed } from '../../../assets/svg/icon-played.svg';
import { ReactComponent as IconPlayActive } from '../../../assets/svg/icon-play-active.svg';
import useLessonList from '../../../utils/pages/onboarding/useLessonList';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import cn from 'classnames';
import './style.scss';

const Lesson = ({ title, length, currentIndex, index, onClose }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isWatched, setIsWatched] = useState(false);
  const [isInProgress, setIsInProgress] = useState(false);
  const [videoPercentage, setVideoPercentage] = useState(0);
  const { lessonLinks, isVideoWatched, isVideoInProgress, getVideoProgress } = useLessonList();

  useEffect(() => {
    const lessonTitle = lessonLinks[index];
    setIsWatched(isVideoWatched(lessonTitle));
    setIsInProgress(isVideoInProgress(lessonTitle));
  }, [isVideoWatched, isVideoInProgress, index, lessonLinks]);

  useEffect(() => {
    const timer = setInterval(() => {
      setVideoPercentage(getVideoProgress());
    }, 1000);
    return () => clearInterval(timer);
  }, [getVideoProgress]);

  return (
    <Link to={lessonLinks[index] ?? ''} onClick={() => (currentIndex === index ? onClose() : {})}>
      <div
        role="presentation"
        className="Lesson__wrapper"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="Lesson__content">
          {isHovered ? (
            isInProgress ? (
              <>
                <IconPlaying className="Lesson__icon" />
                <CircularProgressbar
                  styles={{
                    path: {
                      stroke: '#4038FF',
                      strokeLinecap: 'butt',
                    },
                    trail: {
                      stroke: 'rgba(64, 56, 255, 0.2)',
                    },
                  }}
                  className="Lesson__progress"
                  value={videoPercentage}
                />
              </>
            ) : isWatched ? (
              <IconPlayed className="Lesson__icon" />
            ) : (
              <IconPlayActive className="Lesson__icon" />
            )
          ) : isInProgress ? (
            <>
              <IconPlaying className="Lesson__icon" />
              <CircularProgressbar
                styles={{
                  path: {
                    stroke: '#4038FF',
                    strokeLinecap: 'butt',
                  },
                  trail: {
                    stroke: 'rgba(64, 56, 255, 0.2)',
                  },
                }}
                className="Lesson__progress"
                value={videoPercentage}
              />
            </>
          ) : isWatched ? (
            <IconPlayed className="Lesson__icon" />
          ) : (
            <IconPlay className="Lesson__icon" />
          )}

          <div className="Lesson__content__text">
            <h3
              className={cn('Lesson__title', {
                'Lesson__title--active': isHovered,
              })}
            >
              {title}{' '}
            </h3>
            <h3
              className={cn('Lesson__length', {
                'Lesson__length--active': isHovered,
              })}
            >
              {length}
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

const LessonList = ({ t, lessonIndex, onLessonListClose, currentRole }) => {
  const [role, setRole] = useState(currentRole);

  const [useRolePath, setUseRolePath] = useState(!!currentRole);

  const { getLessonData } = useLessonList();

  useEffect(() => {
    setRole(localStorage.getItem('JoystreamRole'));
    document.body.style.overflowY = 'hidden';

    return () => {
      document.body.style.overflowY = 'scroll';
    };
  }, []);

  useEffect(() => {
    if (role) {
      setUseRolePath(true);
    }
  }, [role]);

  const escFunction = useCallback(
    event => {
      if (event.key === 'Escape') {
        onLessonListClose();
      }
    },
    [onLessonListClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);

    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
  }, [escFunction]);

  return (
    <div className="LessonList__wrapper">
      <div role="presentation" onClick={onLessonListClose} className="LessonList__backdrop"></div>
      <div className="LessonList__content">
        <div className="LessonList__button__wrapper">
          <button className="LessonList__button" onClick={onLessonListClose}>
            <NavClose className="LessonList__button__icon" />
          </button>
        </div>
        <h3 className="LessonList__title">{t('onboarding.button.lessonList.text')}</h3>
        {role && (
          <div className="LessonList__path-toggle">
            <div
              role="presentation"
              className={cn('LessonList__path-toggle__item', {
                'LessonList__path-toggle__item--active': useRolePath,
              })}
              onClick={() => setUseRolePath(true)}
            >
              <p className="LessonList__path-toggle__item__text">{role}</p>
            </div>
            <div
              role="presentation"
              className={cn('LessonList__path-toggle__item', {
                'LessonList__path-toggle__item--active': !useRolePath,
              })}
              onClick={() => setUseRolePath(false)}
            >
              <p className="LessonList__path-toggle__item__text">{t('onboarding.lessonList.toggle.allVideos')}</p>
            </div>
          </div>
        )}
        <div className="LessonList__lessons">
          {getLessonData(useRolePath, role).map((item, key) => (
            <Lesson
              onClose={onLessonListClose}
              key={key}
              title={t(item.title)}
              length={item.length}
              index={item.index}
              currentIndex={lessonIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LessonList;
