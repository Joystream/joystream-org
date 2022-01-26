import React, { useState, useRef, useEffect } from 'react';
import cn from 'classnames';
import Play from '../../../../assets/svg/atlas-demo-play.svg';
import VideoThumbnail from '../../../../assets/images/onboarding-preview.png';
import Link from '../../../Link';
import Loader from 'react-loader-spinner';
import { ReactComponent as Arrow } from '../../../../assets/svg/arrow-down-small.svg';
import './style.scss';

const FooterAction = ({ title, subtitle, buttonTitle, to, href }) => {
  const [videoIsHovered, setVideoIsHovered] = useState(false);
  const [imageIsLoading, setImageIsLoading] = useState(false);
  const videoThumbnailRef = useRef();

  useEffect(() => {
    let preloaderImg = document.createElement('img');
    preloaderImg.src = VideoThumbnail;

    preloaderImg.addEventListener('load', event => {
      videoThumbnailRef.current.style.backgroundImage = `url(${VideoThumbnail})`;
      setImageIsLoading(false);
      preloaderImg = null;
    });
  }, []);

  return (
    <div className="FooterAction__hero-wrapper">
      <div className="FooterAction__hero">
        <div className="FooterAction__hero__content">
          <h1 className="FooterAction__hero__title">{title}</h1>
          <h2 className="FooterAction__hero__subtitle">{subtitle}</h2>
          <Link key={buttonTitle} to={to} href={href}>
            <div className="FooterAction__hero__button">
              <p className="FooterAction__hero__button-text">{buttonTitle}</p>
              <Arrow className="FooterAction__hero__button-arrow" />
            </div>
          </Link>
        </div>
        <div className="FooterAction__hero__content">
          <Link key={buttonTitle} to={to} href={href}>
            <div
              ref={videoThumbnailRef}
              role="presentation"
              className="FooterAction__hero__video"
              onMouseEnter={() => setVideoIsHovered(true)}
              onMouseLeave={() => setVideoIsHovered(false)}
            >
              {imageIsLoading && (
                <Loader
                  className="FooterAction__hero__video__loader"
                  type="Oval"
                  color="#302ABF"
                  height="100%"
                  width="100%"
                  timeout={0}
                />
              )}
              <img
                role="presentation"
                onClick={() => {}}
                className={cn('FooterAction__hero__video__playbutton', {
                  'FooterAction__hero__video__playbutton--hovered': videoIsHovered,
                })}
                src={Play}
                alt="Play button"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterAction;
