import React, { useState } from 'react';
import Plx from 'react-plx';
import cn from 'classnames';
import { Trans } from 'gatsby-plugin-react-i18next';

import { ArrowButton } from '../../ArrowButton';

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
        startValue: -350,
        endValue: -600,
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
        startValue: 25,
        endValue: -275,
        property: 'translateY',
        unit: 'px',
      },
    ],
  },
];

const CarouselItem = ({ nftTitle, channelName, joyAmount, time, setIsCarouselRunning }) => (
  <div
    className="IndexPage__video-nfts-carousel__item"
    onMouseEnter={() => setIsCarouselRunning(true)}
    onMouseLeave={() => setIsCarouselRunning(false)}
  >
    <div className="IndexPage__video-nfts-carousel__item__image"></div>
    <div className="IndexPage__video-nfts-carousel__item__content">
      <div className="IndexPage__video-nfts-carousel__item__content__title">
        <span>{nftTitle}</span> by <span>{channelName}</span>
      </div>
      <div className="IndexPage__video-nfts-carousel__item__content__price">
        <div className="IndexPage__video-nfts-carousel__item__content__price__title">Sold for:</div>
        <div className="IndexPage__video-nfts-carousel__item__content__price__amount">
          <span>{joyAmount}</span> JOY
        </div>
      </div>
      <div className="IndexPage__video-nfts-carousel__item__content__time">
        <ClockIcon className="IndexPage__video-nfts-carousel__item__content__time__icon" /> {time}
      </div>
    </div>
  </div>
);

const Carousel = ({ itemsData }) => {
  const [isCarouselRunning, setIsCarouselRunning] = useState(false);

  const items = itemsData.map(({ nftTitle, channelName, joyAmount, time }) => (
    <CarouselItem
      nftTitle={nftTitle}
      channelName={channelName}
      joyAmount={joyAmount}
      time={time}
      setIsCarouselRunning={setIsCarouselRunning}
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
  return (
    <div className="IndexPage__video-nfts-wrapper">
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
        <section className="IndexPage__video-nfts__content">
          <span className="IndexPage__video-nfts__content__section-title">{t('landing.videoNFTs.sectionTitle')}</span>
          <h2 className="IndexPage__video-nfts__content__title">{t('landing.videoNFTs.title')}</h2>
          <p className="IndexPage__video-nfts__content__subtitle">{t('landing.videoNFTs.subtitle')}</p>
        </section>
      </div>
      <div className="IndexPage__video-nfts-carousel">
        <div className="IndexPage__video-nfts-carousel__title-and-info">
          <h3 className="IndexPage__video-nfts-carousel__title-and-info__title">Recently sold NFT videos</h3>
          <div className="IndexPage__video-nfts-carousel__title-and-info__info">
            NFTs can be sold for JOY tokens{' '}
            <InfoIcon className="IndexPage__video-nfts-carousel__title-and-info__info__icon" />
            <div className="IndexPage__video-nfts-carousel__title-and-info__info__modal">
              JOY token is a native crypto asset of Joystream blockchain. It is used for platform governance, purchasing
              NFTs, trading creator tokens, and covering the blockchain processing fees.
            </div>
          </div>
        </div>
        <Carousel
          itemsData={[
            {
              nftTitle: 'Did An Alternate Reality Game Gone Wrong',
              channelName: 'SCHISM',
              joyAmount: '715',
              time: '15 days ago',
            },
            {
              nftTitle: 'Know your Councils #02 (CheOmsk)',
              channelName: 'Joystream movie',
              joyAmount: '228',
              time: '15 days ago',
            },
            { nftTitle: 'Phones controlling LN nodes', channelName: 'kriptos', joyAmount: '784', time: '15 days ago' },
            { nftTitle: 'The MAGA Coup Did Not Happen', channelName: 'SCHIZM', joyAmount: '1613', time: '15 days ago' },
            { nftTitle: 'Laura Live Workout', channelName: 'LAURA LIVE', joyAmount: '1081', time: '15 days ago' },
          ]}
        />
      </div>
      <div className="IndexPage__video-nfts-cta">
        <p className="IndexPage__video-nfts-cta__title">
          <Trans i18nKey="landing.videoNFTs.cta.title" components={{ br: <br /> }} />
        </p>
        <p className="IndexPage__video-nfts-cta__about">{t('landing.videoNFTs.cta.about')}</p>
        <p className="IndexPage__video-nfts-cta__podcast">{t('landing.videoNFTs.cta.podcast')}</p>
        <ArrowButton
          className="IndexPage__video-nfts-cta__button"
          text={t('landing.videoNFTs.cta.button')}
          textClassname="IndexPage__video-nfts-cta__button-text"
          link="https://play.joystream.org/studio/"
        />
      </div>
    </div>
  );
};

export default VideoNFTs;
