import React, { useState, useRef, useEffect } from 'react';
import cn from 'classnames';
import Play from '../../../../assets/svg/btn-play.svg';
import Link from '../../../Link';
import Loader from 'react-loader-spinner';
import { ReactComponent as Arrow } from '../../../../assets/svg/arrow-down-small.svg';
import './style.scss';
import { navigate } from 'gatsby';

const FooterAction = ({ title, subtitle, buttonTitle, role, url, thumbnail, lessonIndex, onShowGetStarted }) => {
  const [videoIsHovered, setVideoIsHovered] = useState(false);
  const [imageIsLoading, setImageIsLoading] = useState(false);
  const videoThumbnailRef = useRef();

  useEffect(() => {
    let preloaderImg = document.createElement('img');
    preloaderImg.src = thumbnail;

    preloaderImg.addEventListener('load', event => {
      if (videoThumbnailRef.current) {
        videoThumbnailRef.current.style.backgroundImage = `url(${thumbnail})`;
      }
      setImageIsLoading(false);
      preloaderImg = null;
    });
  }, [thumbnail]);

  return (
    <div className="FooterAction__hero-wrapper">
      <div className="FooterAction__hero">
        <div className="FooterAction__hero__content">
          <h1 className="FooterAction__hero__title">{title}</h1>
          <h2 className="FooterAction__hero__subtitle">{subtitle}</h2>
          {(role || (!role && lessonIndex !== 1)) && url ? (
            <Link key={buttonTitle} to={url}>
              <div className="FooterAction__hero__button">
                <p className="FooterAction__hero__button-text">{buttonTitle}</p>
                <Arrow className="FooterAction__hero__button-arrow" />
              </div>
            </Link>
          ) : (
            <div className="FooterAction__hero__button" role="presentation" onClick={onShowGetStarted}>
              <p className="FooterAction__hero__button-text">{buttonTitle}</p>
              <Arrow className="FooterAction__hero__button-arrow" />
            </div>
          )}
        </div>
        <div className="FooterAction__hero__content FooterAction__hero__content--centered">
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
              onClick={() => {
                if ((role || (!role && lessonIndex !== 1)) && url) {
                  navigate(url);
                } else {
                  onShowGetStarted();
                }
              }}
              className={cn('FooterAction__hero__video__playbutton', {
                'FooterAction__hero__video__playbutton--hovered': videoIsHovered,
              })}
              src={Play}
              alt="Play button"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterAction;
