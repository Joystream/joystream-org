import React, { useState, useEffect, useCallback } from 'react';
import Link from '../../Link';
import { ReactComponent as NavClose } from '../../../assets/svg/navbar-close.svg';
import { ReactComponent as IconPlaying } from '../../../assets/svg/icon-playing.svg';
import { ReactComponent as IconPlay } from '../../../assets/svg/icon-play.svg';
import { ReactComponent as IconPlayed } from '../../../assets/svg/icon-played.svg';
import { ReactComponent as IconPlayActive } from '../../../assets/svg/icon-play-active.svg';
import cn from 'classnames';
import './style.scss';

const Lesson = ({ title, length, currentIndex, index, onClose }) => {
  const [isHovered, setIsHovered] = useState(false);
  const lessonLinks = {
    1: '/start-here/what-is-joystream',
    2: '/start-here/joystream-as-dao',
    3: '/start-here/what-is-fm-program',
    4: '/start-here/what-is-council',
    5: '/start-here/what-are-working-groups',
    6: '/start-here/what-are-bounties',
    7: '/start-here/video-creator',
  };

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
            currentIndex > index ? (
              <IconPlayed className="Lesson__icon" />
            ) : (
              <IconPlayActive className="Lesson__icon" />
            )
          ) : currentIndex === index ? (
            <IconPlaying className="Lesson__icon" />
          ) : currentIndex > index ? (
            <IconPlayed className="Lesson__icon" />
          ) : (
            <IconPlay className="Lesson__icon" />
          )}

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
    </Link>
  );
};

const LessonList = ({ t, lessonIndex, onLessonListClose }) => {
  const data = [
    {
      title: 'onboarding.lessonList.lesson1.title',
      length: '06:25',
      index: 1,
    },
    {
      title: 'onboarding.lessonList.lesson2.title',
      length: '06:25',
      index: 2,
    },
    {
      title: 'onboarding.lessonList.lesson3.title',
      length: '06:25',
      index: 3,
    },
    {
      title: 'onboarding.lessonList.lesson4.title',
      length: '06:25',
      index: 4,
    },
    {
      title: 'onboarding.lessonList.lesson5.title',
      length: '06:25',
      index: 5,
    },
    {
      title: 'onboarding.lessonList.lesson6.title',
      length: '06:25',
      index: 6,
    },
    {
      title: 'onboarding.lessonList.lesson7.title',
      length: '06:25',
      index: 7,
    },
  ];

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
        <button className="LessonList__button" onClick={onLessonListClose}>
          <NavClose className="LessonList__button__icon" />
        </button>
        <h3 className="LessonList__title">{t('onboarding.button.lessonList.text')}</h3>
        <div className="LessonList__lessons">
          {data &&
            data.map((item, key) => (
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
