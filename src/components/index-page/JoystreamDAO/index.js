import React, { useState } from 'react';
import Plx from 'react-plx';
import cn from 'classnames';
import { Trans } from 'gatsby-plugin-react-i18next';

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

const CarouselItem = ({ img, proposalTitle, status, date, link, setIsCarouselRunning, t }) => {
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
      <div className="IndexPage__joystream-dao-carousel__item__title">{proposalTitle}</div>
      <div className="IndexPage__joystream-dao-carousel__item__info">
        <div className="IndexPage__joystream-dao-carousel__item__info__status">
          <p className="IndexPage__joystream-dao-carousel__item__info__status__label">
            {t('landing.joystreamDAO.carousel.item.status.label')}
          </p>
          <div
            className={cn('IndexPage__joystream-dao-carousel__item__info__status__value', {
              'IndexPage__joystream-dao-carousel__item__info__status__value--rejected':
                status.toLowerCase() === REJECTED,
            })}
          >
            {t(`landing.joystreamDAO.carousel.item.status.value.${status.toLowerCase()}`)}
          </div>
        </div>
        <div className="IndexPage__joystream-dao-carousel__item__info__date">
          <p className="IndexPage__joystream-dao-carousel__item__info__date__label">
            {t('landing.joystreamDAO.carousel.item.dateLabel')}
          </p>
          <p className="IndexPage__joystream-dao-carousel__item__info__date__value">{date}</p>
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

  const items = itemsData.map(({ img, proposalTitle, status, date, link }) => (
    <CarouselItem
      key={`${proposalTitle}-${status}-${date}`}
      img={img}
      proposalTitle={proposalTitle}
      status={status}
      date={date}
      link={link}
      setIsCarouselRunning={setIsCarouselRunning}
      t={t}
    />
  ));

  return (
    <div className="IndexPage__joystream-dao-carousel__items-wrapper">
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
    </div>
  );
};

const JoystreamDAO = ({ t }) => {
  const img = "https://github.com/Joystream/founding-members/blob/main/avatars/primary-avatar/15.png?raw=true";
  return (
    <div className="IndexPage__joystream-dao-wrapper">
      <div className="IndexPage__joystream-dao">
        <div className="IndexPage__joystream-dao__content">
          <span className="IndexPage__joystream-dao__content__section-title">
            {t('landing.joystreamDAO.sectionTitle')}
          </span>
          <h2 className="IndexPage__joystream-dao__content__title">
            <Trans i18nKey="landing.joystreamDAO.title" components={{ br: <br /> }} />
          </h2>
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
      <div className="IndexPage__joystream-dao-carousel">
        <div className="IndexPage__joystream-dao-carousel__title-section">
          <h3 className="IndexPage__joystream-dao-carousel__title-section__text">
            {t('landing.joystreamDAO.carousel.title')}
          </h3>
        </div>
        <Carousel
          itemsData={[
            {
              img,
              proposalTitle: 'Rhodes Council #16 - Summary',
              status: 'Executed',
              date: '07/21/2022',
              link: 'https://www.google.com',
            },
            {
              img,
              proposalTitle: 'BWG T16 Summary',
              status: 'Rejected',
              date: '07/23/2022',
              link: 'https://www.google.com',
            },
            {
              img,
              proposalTitle: 'BWG T16 Summary (2nd Attempt)',
              status: 'Executed',
              date: '07/25/2022',
              link: 'https://www.google.com',
            },
            {
              img,
              proposalTitle: 'Extra Hours HR Lead Bonus',
              status: 'Executed',
              date: '07/25/2022',
              link: 'https://www.google.com',
            },
            {
              img,
              proposalTitle: 'Storage WG Report - 16 Term',
              status: 'Deciding',
              date: '07/25/2022',
              link: 'https://www.google.com',
            },
            {
              img: "https://github.com/Joystream/founding-members/blob/main/avatars/primary-avatar/nonexisting.png?raw=true",
              proposalTitle: 'Update Content Working Group Budget',
              status: 'Deciding',
              date: '07/25/2022',
              link: 'https://www.google.com',
            },
          ]}
          t={t}
        />
      </div>
    </div>
  );
};

export default JoystreamDAO;
