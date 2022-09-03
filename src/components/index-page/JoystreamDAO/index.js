import React, { useState } from 'react';
import Plx from 'react-plx';
import cn from 'classnames';
import { Trans } from 'gatsby-plugin-react-i18next';

import { ReactComponent as ArrowIcon } from '../../../assets/svg/arrow-down-small.svg';
import JoystreamDaoBackgroundImage from '../../../assets/images/landing/joystream-dao-background.webp';
import JoystreamDaoForegroundImage from '../../../assets/images/landing/joystream-dao-foreground.webp';

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

const CarouselItem = ({ proposalTitle, status, date, link, setIsCarouselRunning }) => {
  return (
    <div
      className="IndexPage__joystream-dao-carousel__item"
      onMouseEnter={() => setIsCarouselRunning(true)}
      onMouseLeave={() => setIsCarouselRunning(false)}
    >
      <div className="IndexPage__joystream-dao-carousel__item__image"></div>
      <div className="IndexPage__joystream-dao-carousel__item__title">{proposalTitle}</div>
      <div className="IndexPage__joystream-dao-carousel__item__info">
        <div className="IndexPage__joystream-dao-carousel__item__info__status">
          <p className="IndexPage__joystream-dao-carousel__item__info__status__label">Status</p>
          <div
            className={cn('IndexPage__joystream-dao-carousel__item__info__status__value', {
              'IndexPage__joystream-dao-carousel__item__info__status__value--rejected':
                status.toLowerCase() === REJECTED,
            })}
          >
            {status}
          </div>
        </div>
        <div className="IndexPage__joystream-dao-carousel__item__info__date">
          <p className="IndexPage__joystream-dao-carousel__item__info__date__label">Date</p>
          <p className="IndexPage__joystream-dao-carousel__item__info__date__value">{date}</p>
        </div>
      </div>
      <a className="IndexPage__joystream-dao-carousel__item__link" href={link} target="_blank">
        View discussion <ArrowIcon className="IndexPage__joystream-dao-carousel__item__link__icon" />
      </a>
    </div>
  );
};

const Carousel = ({ itemsData }) => {
  const [isCarouselRunning, setIsCarouselRunning] = useState(false);

  const items = itemsData.map(({ proposalTitle, status, date, link }) => (
    <CarouselItem
      key={`${proposalTitle}-${status}-${date}`}
      proposalTitle={proposalTitle}
      status={status}
      date={date}
      link={link}
      setIsCarouselRunning={setIsCarouselRunning}
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
          <h3 className="IndexPage__joystream-dao-carousel__title-section__text">Recent proposals</h3>
        </div>
        <Carousel
          itemsData={[
            {
              proposalTitle: 'Rhodes Council #16 - Summary',
              status: 'Executed',
              date: '07/21/2022',
              link: 'https://www.google.com',
            },
            {
              proposalTitle: 'BWG T16 Summary',
              status: 'Rejected',
              date: '07/23/2022',
              link: 'https://www.google.com',
            },
            {
              proposalTitle: 'BWG T16 Summary (2nd Attempt)',
              status: 'Executed',
              date: '07/25/2022',
              link: 'https://www.google.com',
            },
            {
              proposalTitle: 'Extra Hours HR Lead Bonus',
              status: 'Executed',
              date: '07/25/2022',
              link: 'https://www.google.com',
            },
            {
              proposalTitle: 'Storage WG Report - 16 Term',
              status: 'Deciding',
              date: '07/25/2022',
              link: 'https://www.google.com',
            },
            {
              proposalTitle: 'Update Content Group Budget',
              status: 'Deciding',
              date: '07/25/2022',
              link: 'https://www.google.com',
            },
          ]}
        />
      </div>
    </div>
  );
};

export default JoystreamDAO;
