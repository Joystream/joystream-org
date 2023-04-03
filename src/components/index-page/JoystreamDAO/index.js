import React, { useState } from 'react';
import Plx from 'react-plx';
import cn from 'classnames';
import { Trans } from 'gatsby-plugin-react-i18next';
import Countdown from 'react-countdown-now';
import convertToCamelCase from '../../../utils/convertToCamelCase';

import JoystreamDaoBackgroundImage from '../../../assets/images/landing/joystream-dao-background.webp';
import JoystreamDaoForegroundImage from '../../../assets/images/landing/joystream-dao-foreground.webp';

import { ReactComponent as ArrowIcon } from '../../../assets/svg/arrow-down-small.svg';
import PlaceholderIcon from '../../../assets/svg/non-FM-leaderboard-placeholder.svg';

import './style.scss';

const joystreamDaoForeground = [
  {
    start: 'self',
    startOffset: -200,
    duration: 1400,
    easing: 'easeIn',
    properties: [
      {
        startValue: 510,
        endValue: 400,
        property: 'translateY',
        unit: 'px',
      },
    ],
  },
];

const REJECTED = 'rejected';
const FAILED = 'executionFailed';
const SLASHED = 'slashed';
const DECIDING = 'deciding';
const GRACING = 'gracing';

const CarouselItemDate = ({ date, showCountdown, t }) => {
  if (showCountdown) {
    return (
      <Countdown
        date={new Date(date)}
        intervalDelay={0}
        precision={3}
        renderer={({ days, hours, minutes }) => {
          return t('landing.joystreamDAO.carousel.item.timeLeftValue', { days, hours, minutes });
        }}
      />
    );
  }

  return <>{date}</>;
};

const CarouselItem = ({ img, title, status, date, link, setIsCarouselRunning, t }) => {
  const isDeciding = status === DECIDING || status === GRACING;
  const isFailed = status === REJECTED || status === FAILED || status === SLASHED;

  return (
    <div
      className="IndexPage__joystream-dao-carousel__item"
      onMouseEnter={() => setIsCarouselRunning(true)}
      onMouseLeave={() => setIsCarouselRunning(false)}
    >
      <div className="IndexPage__joystream-dao-carousel__item__image">
        <img
          src={img}
          onError={e => {
            e.currentTarget.src = PlaceholderIcon;
          }}
          alt=""
        />
      </div>
      <div className="IndexPage__joystream-dao-carousel__item__title">{title}</div>
      <div className="IndexPage__joystream-dao-carousel__item__info">
        <div className="IndexPage__joystream-dao-carousel__item__info__status">
          <p className="IndexPage__joystream-dao-carousel__item__info__status__label">
            {t('landing.joystreamDAO.carousel.item.status.label')}
          </p>
          <div
            className={cn('IndexPage__joystream-dao-carousel__item__info__status__value', {
              'IndexPage__joystream-dao-carousel__item__info__status__value--rejected': isFailed,
            })}
          >
            {t(`landing.joystreamDAO.carousel.item.status.value.${status}`)}
          </div>
        </div>
        <div className="IndexPage__joystream-dao-carousel__item__info__date">
          <p className="IndexPage__joystream-dao-carousel__item__info__date__label">
            {isDeciding
              ? t('landing.joystreamDAO.carousel.item.timeLeft')
              : t('landing.joystreamDAO.carousel.item.dateLabel')}
          </p>
          <p className="IndexPage__joystream-dao-carousel__item__info__date__value">
            <CarouselItemDate date={date} showCountdown={isDeciding} t={t} />
          </p>
        </div>
      </div>
      <a className="IndexPage__joystream-dao-carousel__item__link" href={link} target="_blank">
        {t('landing.joystreamDAO.carousel.item.viewDiscussion')}{' '}
        <ArrowIcon className="IndexPage__joystream-dao-carousel__item__link__icon" />
      </a>
    </div>
  );
};

const Carousel = ({ itemsData, t }) => {
  const [isCarouselRunning, setIsCarouselRunning] = useState(false);

  const items = itemsData.map(({ img, title, status, date, link }) => (
    <CarouselItem
      key={`${title}-${status}-${date}`}
      img={img}
      title={title}
      status={status}
      date={date}
      link={link}
      setIsCarouselRunning={setIsCarouselRunning}
      t={t}
    />
  ));

  return (
    <>
      <div
        className={cn('IndexPage__joystream-dao-carousel__items', {
          'IndexPage__joystream-dao-carousel__items--paused': isCarouselRunning,
        })}
      >
        {items}
      </div>
      <div
        className={cn('IndexPage__joystream-dao-carousel__items', {
          'IndexPage__joystream-dao-carousel__items--paused': isCarouselRunning,
        })}
        aria-hidden="true"
      >
        {items}
      </div>
    </>
  );
};

const getDateHoursInTheFuture = hours => {
  let date = new Date();

  date.setHours(date.getHours() + hours);

  return date.toLocaleString('en-US', { timeZone: 'Europe/Oslo' });
};

const addSpacesToPascalCase = string => string.replace(/([A-Z])/g, ' $1').trim();

const JoystreamDAO = ({ t, proposalsData }) => {
  const img = 'https://github.com/Joystream/founding-members/blob/main/avatars/primary-avatar/15.png?raw=true';
  return (
    <section className="IndexPage__joystream-dao-wrapper">
      <div className="IndexPage__joystream-dao">
        <div className="IndexPage__joystream-dao__content">
          <header>
            <span className="IndexPage__joystream-dao__content__section-title">
              {t('landing.joystreamDAO.sectionTitle')}
            </span>
            <h2 className="IndexPage__joystream-dao__content__title">
              <Trans i18nKey="landing.joystreamDAO.title" components={{ br: <br /> }} />
            </h2>
          </header>
          <p className="IndexPage__joystream-dao__content__subtitle">{t('landing.joystreamDAO.subtitle')}</p>
          <a href="https://dao.joystream.org/" className="IndexPage__joystream-dao__content__link">
            {t('landing.joystreamDAO.link')}
            <ArrowIcon className="IndexPage__joystream-dao__content__link__arrow" />
          </a>
        </div>
        <div className="IndexPage__joystream-dao__illustration">
          <img
            src={JoystreamDaoBackgroundImage}
            className="IndexPage__joystream-dao__illustration__background"
            alt="joystream governance product, open on tab working groups, outlining the currently available groups"
          />
          <Plx parallaxData={joystreamDaoForeground} animateWhenNotInViewport={true}>
            <img
              src={JoystreamDaoForegroundImage}
              className="IndexPage__joystream-dao__illustration__foreground"
              alt="one of the working groups rows extracted in front of the others"
            />
          </Plx>
        </div>
      </div>
      <section className="IndexPage__joystream-dao-carousel">
        <div className="IndexPage__joystream-dao-carousel__title-section">
          <h3 className="IndexPage__joystream-dao-carousel__title-section__text">
            {t('landing.joystreamDAO.carousel.title')}
          </h3>
        </div>
        <div className="IndexPage__joystream-dao-carousel__items-wrapper">
          {proposalsData && proposalsData.length > 0 ? (
            <Carousel
              itemsData={proposalsData?.map(({ status, statusSetAtTime, ...rest }) => ({
                status: convertToCamelCase(addSpacesToPascalCase(status)),
                date: new Date(statusSetAtTime).toLocaleString().split(',')[0],
                ...rest,
              }))}
              t={t}
            />
          ) : null}
        </div>
      </section>
    </section>
  );
};

export default JoystreamDAO;
