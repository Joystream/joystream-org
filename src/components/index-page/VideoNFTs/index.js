import React from 'react';
import Plx from 'react-plx';
import { Trans } from 'gatsby-plugin-react-i18next';

import VideoNFTsBackgroundImage from '../../../assets/images/landing/video-nfts-background.png';
import VideoNFTsForegroundImage from '../../../assets/images/landing/video-nfts-foreground.png';
import VideoNFTsPopupImage from '../../../assets/images/landing/video-nfts-popup.png';
import { ArrowButton } from '../../ArrowButton';

import './style.scss';

const parallaxDataForeground = [
  {
    start: 'self',
    startOffset: -300,
    duration: 1700,
    easing: 'easeIn',
    properties: [
      {
        startValue: -292,
        endValue: -470,
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
        startValue: 100,
        endValue: -250,
        property: 'translateY',
        unit: 'px',
      },
    ],
  },
];

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
          <span className="IndexPage__video-nfts__content__section-title">{t("landing.videoNFTs.sectionTitle")}</span>
          <h2 className="IndexPage__video-nfts__content__title">{t("landing.videoNFTs.title")}</h2>
          <p className="IndexPage__video-nfts__content__subtitle">{t("landing.videoNFTs.subtitle")}</p>
        </section>
      </div>
      <div className="IndexPage__video-nfts-cta">
        <p className="IndexPage__video-nfts-cta__title">
          <Trans i18nKey="landing.videoNFTs.cta.title" components={{ br: <br /> }} />
        </p>
        <p className="IndexPage__video-nfts-cta__about">{t("landing.videoNFTs.cta.about")}</p>
        <p className="IndexPage__video-nfts-cta__podcast">{t("landing.videoNFTs.cta.podcast")}</p>
        <ArrowButton
          className="IndexPage__video-nfts-cta__button"
          text={t("landing.videoNFTs.cta.button")}
          textClassname="IndexPage__video-nfts-cta__button-text"
          link="https://play.joystream.org/studio/"
        />
      </div>
    </div>
  );
};

export default VideoNFTs;
