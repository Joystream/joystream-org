import React, { useState, useRef } from 'react';
import Plx from 'react-plx';
import cn from 'classnames';
import { Trans, useI18next } from 'gatsby-plugin-react-i18next';

import { parseDateToRelativeTime, getDateHoursAgo } from '../../../utils/pages/landing/parseDateToRelativeTime';
import useRemoveElementFocusOnKeydown from '../../../utils/useRemoveElementFocusOnKeydown';

import VideoNFTsBackgroundImage from '../../../assets/images/landing/video-nfts-background.webp';
import VideoNFTsForegroundImage from '../../../assets/images/landing/video-nfts-foreground.webp';
import VideoNFTsPopupImage from '../../../assets/images/landing/video-nfts-popup.webp';
import { ReactComponent as InfoIcon } from '../../../assets/svg/landing/info.svg';
import { ReactComponent as ClockIcon } from '../../../assets/svg/landing/clock.svg';

import './style.scss';

const parallaxDataForeground = [
  {
    start: 'self',
    startOffset: -350,
    duration: 1700,
    easing: 'easeIn',
    properties: [
      {
        startValue: -400,
        endValue: -650,
        property: 'translateY',
        unit: 'px',
      },
    ],
  },
];

const parallaxDataPopup = [
  {
    start: 'self',
    startOffset: -200,
    duration: 1500,
    easing: 'easeIn',
    properties: [
      {
        startValue: -300,
        endValue: -600,
        property: 'translateY',
        unit: 'px',
      },
    ],
  },
];

const CarouselItem = ({ nftTitle, channelName, joyAmount, time, setIsCarouselRunning, t }) => (
  <div
    className="IndexPage__video-nfts-carousel__item"
    onMouseEnter={() => setIsCarouselRunning(true)}
    onMouseLeave={() => setIsCarouselRunning(false)}
  >
    <div className="IndexPage__video-nfts-carousel__item__image"></div>
    <div className="IndexPage__video-nfts-carousel__item__content">
      <div className="IndexPage__video-nfts-carousel__item__content__title">
        <Trans
          i18nKey="landing.videoNFTs.carousel.item.title"
          components={{
            span: <span />,
            nftTitle,
            channelName,
          }}
        />
      </div>
      <div className="IndexPage__video-nfts-carousel__item__content__price">
        <div className="IndexPage__video-nfts-carousel__item__content__price__title">
          {t('landing.videoNFTs.carousel.item.price.label')}
        </div>
        <div className="IndexPage__video-nfts-carousel__item__content__price__amount">
          <Trans
            i18nKey="landing.videoNFTs.carousel.item.price.amount"
            components={{
              span: <span />,
              joyAmount,
            }}
          />
        </div>
      </div>
      <div className="IndexPage__video-nfts-carousel__item__content__time">
        <ClockIcon className="IndexPage__video-nfts-carousel__item__content__time__icon" /> {time}
      </div>
    </div>
  </div>
);

const Carousel = ({ itemsData, t }) => {
  const [isCarouselRunning, setIsCarouselRunning] = useState(false);

  const items = itemsData.map(({ nftTitle, channelName, joyAmount, time }) => (
    <CarouselItem
      key={`${nftTitle}-${channelName}-${joyAmount}-${time}`}
      nftTitle={nftTitle}
      channelName={channelName}
      joyAmount={joyAmount}
      time={time}
      setIsCarouselRunning={setIsCarouselRunning}
      t={t}
    />
  ));

  return (
    <div className="IndexPage__video-nfts-carousel__items-wrapper">
      <div
        className={cn('IndexPage__video-nfts-carousel__items', {
          'IndexPage__video-nfts-carousel__items--paused': isCarouselRunning,
        })}
      >
        {items}
      </div>
      <div
        className={cn('IndexPage__video-nfts-carousel__items', {
          'IndexPage__video-nfts-carousel__items--paused': isCarouselRunning,
        })}
        aria-hidden="true"
      >
        {items}
      </div>
    </div>
  );
};

const VideoNFTs = ({ t }) => {
  const { language } = useI18next();
  const videoNFTsCarouselInfoLabelRef = useRef();
  useRemoveElementFocusOnKeydown(videoNFTsCarouselInfoLabelRef, ['Escape']);

  return (
    <section className="IndexPage__video-nfts-wrapper">
      <div className="IndexPage__video-nfts">
        <div className="IndexPage__video-nfts__illustration">
          <img
            src={VideoNFTsBackgroundImage}
            className="IndexPage__video-nfts__illustration__background"
            alt="row of nfts"
          />
          <Plx parallaxData={parallaxDataForeground} animateWhenNotInViewport={true}>
            <img
              src={VideoNFTsForegroundImage}
              className="IndexPage__video-nfts__illustration__foreground"
              alt="one nft in the middle, highlighted"
            />
          </Plx>
          <Plx parallaxData={parallaxDataPopup} animateWhenNotInViewport={true}>
            <img
              src={VideoNFTsPopupImage}
              className="IndexPage__video-nfts__illustration__popup"
              alt="nft settings popup"
            />
          </Plx>
        </div>
        <div className="IndexPage__video-nfts__content">
          <header>
            <span className="IndexPage__video-nfts__content__section-title">{t('landing.videoNFTs.sectionTitle')}</span>
            <h2 className="IndexPage__video-nfts__content__title">{t('landing.videoNFTs.title')}</h2>
          </header>
          <p className="IndexPage__video-nfts__content__subtitle">{t('landing.videoNFTs.subtitle')}</p>
        </div>
      </div>
      {/* <section className="IndexPage__video-nfts-carousel">
        <div className="IndexPage__video-nfts-carousel__title-and-info">
          <h3 className="IndexPage__video-nfts-carousel__title-and-info__title">
            {t('landing.videoNFTs.carousel.title')}
          </h3>
          <div className="IndexPage__video-nfts-carousel__title-and-info__info">
            <div
              className="IndexPage__video-nfts-carousel__title-and-info__info__label"
              // TODO: Readd this line here eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
              tabIndex={0}
              aria-describedby="IndexPage__video-nfts-carousel__title-and-info__info__modal"
              ref={videoNFTsCarouselInfoLabelRef}
            >
              {t('landing.videoNFTs.carousel.info.label')}
              <InfoIcon className="IndexPage__video-nfts-carousel__title-and-info__info__icon" />
            </div>
            <div role="tooltip" id="IndexPage__video-nfts-carousel__title-and-info__info__modal" className="IndexPage__video-nfts-carousel__title-and-info__info__modal">
              {t('landing.videoNFTs.carousel.info.text')}
            </div>
          </div>
        </div>
        <Carousel
          itemsData={[
            {
              nftTitle: 'Did An Alternate Reality Game Gone Wrong',
              channelName: 'SCHISM',
              joyAmount: '715',
              time: parseDateToRelativeTime(getDateHoursAgo(24 * 15), language),
            },
            {
              nftTitle: 'Know your Councils #02 (CheOmsk)',
              channelName: 'Joystream movie',
              joyAmount: '228',
              time: parseDateToRelativeTime(getDateHoursAgo(24 * 15), language),
            },
            {
              nftTitle: 'Phones controlling LN nodes',
              channelName: 'kriptos',
              joyAmount: '784',
              time: parseDateToRelativeTime(getDateHoursAgo(24 * 15), language),
            },
            {
              nftTitle: 'The MAGA Coup Did Not Happen',
              channelName: 'SCHIZM',
              joyAmount: '1613',
              time: parseDateToRelativeTime(getDateHoursAgo(24 * 15), language),
            },
            {
              nftTitle: 'Laura Live Workout',
              channelName: 'LAURA LIVE',
              joyAmount: '1081',
              time: parseDateToRelativeTime(getDateHoursAgo(24 * 15), language),
            },
          ]}
          t={t}
        />
      </section> */}
    </section>
  );
};

export default VideoNFTs;
