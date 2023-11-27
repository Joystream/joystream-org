import React, { useState, useRef } from 'react';
import Plx from 'react-plx';
import cn from 'classnames';
import { Trans, useI18next } from 'gatsby-plugin-react-i18next';

import { parseDateToRelativeTime, getDateHoursAgo } from '../../../utils/pages/landing/parseDateToRelativeTime';
import useRemoveElementFocusOnKeydown from '../../../utils/useRemoveElementFocusOnKeydown';
import useImageFallback from '../../../utils/useImageFallback';

import VideoNFTsBackgroundImage from '../../../assets/images/landing/video-nfts-background.webp';
import VideoNFTsForegroundImage from '../../../assets/images/landing/video-nfts-foreground.webp';
import VideoNFTsPopupImage from '../../../assets/images/landing/video-nfts-popup.webp';
import { ReactComponent as InfoIcon } from '../../../assets/svg/info.svg';
import { ReactComponent as ClockIcon } from '../../../assets/svg/landing/clock.svg';

import './style.scss';

const parallaxDataForeground = [
  {
    start: 'self',
    startOffset: -350,
    duration: 2000,
    easing: 'easeIn',
    properties: [
      {
        startValue: 75,
        endValue: -225,
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
    duration: 1400,
    easing: 'easeIn',
    properties: [
      {
        startValue: 75,
        endValue: -225,
        property: 'translateY',
        unit: 'px',
      },
    ],
  },
];

const CarouselItem = ({
  nftTitle,
  channelName,
  joyAmount,
  priceData,
  videoUrl,
  imageUrls,
  time,
  setIsCarouselRunning,
  t,
}) => {
  const [imgSrc, onError] = useImageFallback(imageUrls);
  let usdAmount = `$${(priceData.price * joyAmount).toFixed(2)}`;

  if (priceData.error) {
    usdAmount = 'Error';
  }

  return (
    <a href={videoUrl} target="_blank" rel="noreferrer">
      <div
        className="IndexPage__video-nfts-carousel__item"
        onMouseEnter={() => setIsCarouselRunning(true)}
        onMouseLeave={() => setIsCarouselRunning(false)}
      >
        <div className="IndexPage__video-nfts-carousel__item__image">
          <img src={imgSrc} alt="" onError={e => onError(e)} />
        </div>
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
          <p className="IndexPage__video-nfts-carousel__item__content__price-usd">{usdAmount}</p>
          <div className="IndexPage__video-nfts-carousel__item__content__time">
            <ClockIcon className="IndexPage__video-nfts-carousel__item__content__time__icon" /> {time}
          </div>
        </div>
      </div>
    </a>
  );
};

const Carousel = ({ itemsData, priceData, t }) => {
  const [isCarouselRunning, setIsCarouselRunning] = useState(false);

  const items = itemsData.map(({ nftTitle, channelName, joyAmount, videoUrl, imageUrl, time }) => (
    <CarouselItem
      key={`${nftTitle}-${channelName}-${joyAmount}-${time}`}
      nftTitle={nftTitle}
      channelName={channelName}
      joyAmount={joyAmount}
      priceData={priceData}
      videoUrl={videoUrl}
      imageUrls={imageUrl}
      time={time}
      setIsCarouselRunning={setIsCarouselRunning}
      t={t}
    />
  ));

  return (
    <>
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
    </>
  );
};

const VideoNFTs = ({ t, nftData, priceData }) => {
  const { language } = useI18next();
  const videoNFTsCarouselInfoLabelRef = useRef();
  useRemoveElementFocusOnKeydown(videoNFTsCarouselInfoLabelRef, ['Escape']);

  return (
    <section className="IndexPage__video-nfts-wrapper" id="video-nfts">
      <div className="IndexPage__video-nfts">
        <header className="IndexPage__video-nfts__header">
          <span className="IndexPage__video-nfts__header__section-title">
            {t('landing.videoNFTs.header.sectionTitle')}
          </span>
          <h2 className="IndexPage__video-nfts__header__title">{t('landing.videoNFTs.header.title')} </h2>
        </header>
        <p className="IndexPage__video-nfts__subtitle">{t('landing.videoNFTs.header.subtitle')}</p>
      </div>
      <div className="IndexPage__video-nfts__content-section">
        <div className="IndexPage__video-nfts__content-section__illustration">
          <img
            src={VideoNFTsBackgroundImage}
            className="IndexPage__video-nfts__content-section__illustration__background"
            alt="row of nfts"
          />
          <div className="IndexPage__video-nfts__content-section__illustration__foreground-wrapper">
            <Plx parallaxData={parallaxDataForeground} animateWhenNotInViewport={true}>
              <img
                src={VideoNFTsForegroundImage}
                className="IndexPage__video-nfts__content-section__illustration__foreground"
                alt="one nft in the middle, highlighted"
              />
            </Plx>
          </div>
          <div className="IndexPage__video-nfts__content-section__illustration__popup-wrapper">
            <Plx parallaxData={parallaxDataPopup} animateWhenNotInViewport={true}>
              <img
                src={VideoNFTsPopupImage}
                className="IndexPage__video-nfts__content-section__illustration__popup"
                alt="nft settings popup"
              />
            </Plx>
          </div>
        </div>
        <div className="IndexPage__video-nfts__content-section__content">
          <header>
            <span className="IndexPage__video-nfts__content-section__content__section-title">
              {t('landing.videoNFTs.sectionTitle')}
            </span>
            <h2 className="IndexPage__video-nfts__content-section__content__title">{t('landing.videoNFTs.title')}</h2>
          </header>
          <p className="IndexPage__video-nfts__content-section__content__subtitle">{t('landing.videoNFTs.subtitle')}</p>
        </div>
      </div>
      <div className="IndexPage__video-nfts__carousel-title-and-info-wrapper">
        <div className="IndexPage__video-nfts__carousel-title-and-info">
          <h3 className="IndexPage__video-nfts__carousel-title-and-info__title">
            {t('landing.videoNFTs.carousel.title')}
          </h3>
          <div className="IndexPage__video-nfts__carousel-title-and-info__info">
            <div
              className="IndexPage__video-nfts__carousel-title-and-info__info__label"
              // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
              tabIndex={0}
              aria-describedby="IndexPage__video-nfts__carousel-title-and-info__info__modal"
              ref={videoNFTsCarouselInfoLabelRef}
            >
              {t('landing.videoNFTs.carousel.info.label')}
              <div className="IndexPage__video-nfts__carousel-title-and-info__info__icon">
                <InfoIcon />
              </div>
            </div>
            <div
              role="tooltip"
              id="IndexPage__video-nfts__carousel-title-and-info__info__modal"
              className="IndexPage__video-nfts__carousel-title-and-info__info__modal"
            >
              {t('landing.videoNFTs.carousel.info.text')}
            </div>
          </div>
        </div>
      </div>
      <section className="IndexPage__video-nfts-carousel">
        <div className="IndexPage__video-nfts-carousel__items-wrapper">
          {nftData && nftData.length > 0 ? (
            <Carousel
              itemsData={nftData?.map(({ lastSaleDate, ...rest }) => ({
                ...rest,
                time: parseDateToRelativeTime(lastSaleDate, language),
              }))}
              priceData={priceData}
              t={t}
            />
          ) : null}
        </div>
      </section>
    </section>
  );
};

export default VideoNFTs;
