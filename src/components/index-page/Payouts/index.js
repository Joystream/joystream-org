import React, { useState } from 'react';
import cn from 'classnames';
import Plx from 'react-plx';
import { Trans, useI18next } from 'gatsby-plugin-react-i18next';

import { parseDateToRelativeTime, getDateHoursAgo } from '../../../utils/pages/landing/parseDateToRelativeTime';

// import { ArrowButton } from '../../ArrowButton';

import PayoutsBackgroundImage from '../../../assets/images/landing/payouts-background.webp';
import PayoutsForeground from '../../../assets/images/landing/payouts-foreground.webp';
import { ReactComponent as InfoIcon } from '../../../assets/svg/landing/info.svg';
import { ReactComponent as ClockIcon } from '../../../assets/svg/landing/clock.svg';
import { ReactComponent as PlusIcon } from '../../../assets/svg/plus.svg';
import PlaceholderIcon from '../../../assets/svg/non-FM-leaderboard-placeholder.svg';
// import { ReactComponent as YoutubeLogo } from '../../../assets/svg/landing/youtube-logo.svg';
// import { ReactComponent as ConnectionIcon } from '../../../assets/svg/landing/connection-icon.svg';
// import { ReactComponent as JoystreamLogo } from '../../../assets/svg/logo-mark.svg';

import './style.scss';

const parallaxDataBackground = [
  {
    start: 'self',
    duration: 1400,
    easing: 'easeInOut',
    properties: [
      {
        startValue: 100,
        endValue: -50,
        property: 'translateY',
        unit: 'px',
      },
    ],
  },
];

const parallaxDataForeground = [
  {
    start: 'self',
    startOffset: -100,
    duration: 1500,
    easing: 'easeInOut',
    properties: [
      {
        startValue: 500,
        endValue: 250,
        property: 'translateY',
        unit: 'px',
      },
    ],
  },
];

const CarouselItem = ({ img, joyAmount, channelName, time, setIsCarouselRunning }) => (
  <div
    className="IndexPage__payouts-carousel__item"
    onMouseEnter={() => setIsCarouselRunning(true)}
    onMouseLeave={() => setIsCarouselRunning(false)}
  >
    <div className="IndexPage__payouts-carousel__item__image">
      <img
        src={img}
        onError={e => {
          e.currentTarget.src = PlaceholderIcon;
        }}
        alt=""
      />
    </div>
    <div className="IndexPage__payouts-carousel__item__price">
      <PlusIcon className="IndexPage__payouts-carousel__item__price__icon" />
      <div className="IndexPage__payouts-carousel__item__price__text">
        <Trans i18nKey="landing.payouts.carousel.item.price" components={{ span: <span />, joyAmount }} />
      </div>
    </div>
    <div className="IndexPage__payouts-carousel__item__channel">
      <Trans i18nKey="landing.payouts.carousel.item.channel" components={{ span: <span />, channelName }} />
    </div>
    <div className="IndexPage__payouts-carousel__item__time">
      <ClockIcon className="IndexPage__payouts-carousel__item__time__icon" /> {time}
    </div>
  </div>
);

const Carousel = ({ itemsData, t }) => {
  const [isCarouselRunning, setIsCarouselRunning] = useState(false);

  const items = itemsData.map(({ img, joyAmount, channelName, time }) => (
    <CarouselItem
      key={`${joyAmount}-${channelName}-${time}`}
      img={img}
      joyAmount={joyAmount}
      channelName={channelName}
      time={time}
      setIsCarouselRunning={setIsCarouselRunning}
      t={t}
    />
  ));

  return (
    <div className="IndexPage__payouts-carousel__items-wrapper">
      <div
        className={cn('IndexPage__payouts-carousel__items', {
          'IndexPage__payouts-carousel__items--paused': isCarouselRunning,
        })}
      >
        {items}
      </div>
      <div
        className={cn('IndexPage__payouts-carousel__items', {
          'IndexPage__payouts-carousel__items--paused': isCarouselRunning,
        })}
        aria-hidden="true"
      >
        {items}
      </div>
    </div>
  );
};

const Payouts = ({ t }) => {
  const { language } = useI18next();

  const img = "https://github.com/Joystream/founding-members/blob/main/avatars/primary-avatar/15.png?raw=true";
  return (
    <div className="IndexPage__payouts-wrapper">
      <div className="IndexPage__payouts">
        <section className="IndexPage__payouts__content">
          <span className="IndexPage__payouts__content__section-title">{t('landing.payouts.sectionTitle')}</span>
          <h2 className="IndexPage__payouts__content__title">{t('landing.payouts.title')}</h2>
          <p className="IndexPage__payouts__content__subtitle">{t('landing.payouts.subtitle')}</p>
        </section>
        <div className="IndexPage__payouts__illustration">
          <Plx parallaxData={parallaxDataBackground} animateWhenNotInViewport={true}>
            <img
              src={PayoutsBackgroundImage}
              className="IndexPage__payouts__illustration__background"
              alt="my payments tab in atlas studio"
            />
          </Plx>
          <Plx parallaxData={parallaxDataForeground} animateWhenNotInViewport={true}>
            <img
              src={PayoutsForeground}
              className="IndexPage__payouts__illustration__foreground"
              alt="claim payout popup, in front of the my payments tab"
            />
          </Plx>
        </div>
      </div>
      <div className="IndexPage__payouts-carousel">
        <div className="IndexPage__payouts-carousel__title-and-info">
          <h3 className="IndexPage__payouts-carousel__title-and-info__title">{t('landing.payouts.carousel.title')}</h3>
          <div className="IndexPage__payouts-carousel__title-and-info__info">
            {t('landing.payouts.carousel.info.label')}
            <InfoIcon className="IndexPage__payouts-carousel__title-and-info__info__icon" />
            <div className="IndexPage__payouts-carousel__title-and-info__info__modal">
              {t('landing.payouts.carousel.info.text')}
            </div>
          </div>
        </div>
        <Carousel
          itemsData={[
            { img, joyAmount: '1365', channelName: 'Top Project', time: parseDateToRelativeTime(getDateHoursAgo(2), language) },
            { img, joyAmount: '245', channelName: 'Света Василенко', time: parseDateToRelativeTime(getDateHoursAgo(5), language) },
            { img, joyAmount: '668', channelName: 'kriptos', time: parseDateToRelativeTime(getDateHoursAgo(5), language) },
            { img, joyAmount: '1139', channelName: 'Andrey_Miror', time: parseDateToRelativeTime(getDateHoursAgo(5), language) },
            { img, joyAmount: '987', channelName: 'Mary', time: parseDateToRelativeTime(getDateHoursAgo(24), language) },
            { img: "https://github.com/Joystream/founding-members/blob/main/avatars/primary-avatar/nonexisting.png?raw=true", joyAmount: '119', channelName: 'kate', time: parseDateToRelativeTime(getDateHoursAgo(48), language) },
          ]}
          t={t}
        />
      </div>
      {/* <div className="IndexPage__payouts-cta">
        <div className="IndexPage__payouts-cta__content">
          <div className="IndexPage__payouts-cta__content__logos">
            <YoutubeLogo className="IndexPage__payouts-cta__content__logos__youtube" />
            <ConnectionIcon className="IndexPage__payouts-cta__content__logos__connection-icon" />
            <JoystreamLogo className="IndexPage__payouts-cta__content__logos__joystream" />
          </div>
          <p className="IndexPage__payouts-cta__content__title">
            Have a YouTube channel already? <br />
            Reupload your videos to receive a guaranteed payout in the YouTube Partner Program.
          </p>
        </div>
        <ArrowButton
          link="#"
          className="IndexPage__payouts-cta__link"
          text="Learn more"
          textClassname="IndexPage__payouts-cta__link-text"
        />
      </div> */}
    </div>
  );
};

export default Payouts;
