import React, { useState, useRef, useEffect } from 'react';
import cn from 'classnames';
import Play from '../../../../assets/svg/btn-play.svg';
import VideoThumbnail from '../../../../assets/images/onboarding-preview.png';
import Loader from 'react-loader-spinner';
import { navigate } from 'gatsby';
import { ReactComponent as Arrow } from '../../../../assets/svg/arrow-down-small.svg';
import './style.scss';

const NextVideoPreview = ({ t, nextVideoUrl, nextVideoTitle, nextVideoButtonTitle }) => {
  const [videoIsHovered, setVideoIsHovered] = useState(false);
  const [imageIsLoading, setImageIsLoading] = useState(false);
  const videoThumbnailRef = useRef();

  useEffect(() => {
    let preloaderImg = document.createElement('img');
    preloaderImg.src = VideoThumbnail;

    preloaderImg.addEventListener('load', event => {
      if (videoThumbnailRef.current) {
        videoThumbnailRef.current.style.backgroundImage = `url(${VideoThumbnail})`;
      }
      setImageIsLoading(false);
      preloaderImg = null;
    });
  }, []);

  const goToNextPage = () => {
    navigate(nextVideoUrl);
  };

  return (
    <div className="NextVideoPreview__hero">
      <div className="NextVideoPreview__hero__content NextVideoPreview__hero__content--centered">
        <div
          ref={videoThumbnailRef}
          role="presentation"
          className="NextVideoPreview__hero__video"
          onMouseEnter={() => setVideoIsHovered(true)}
          onMouseLeave={() => setVideoIsHovered(false)}
          onClick={goToNextPage}
        >
          {imageIsLoading && (
            <Loader
              className="NextVideoPreview__hero__video__loader"
              type="Oval"
              color="#302ABF"
              height="100%"
              width="100%"
              timeout={0}
            />
          )}
          <img
            role="presentation"
            className={cn('NextVideoPreview__hero__video__playbutton', {
              'NextVideoPreview__hero__video__playbutton--hovered': videoIsHovered,
            })}
            src={Play}
            alt="Play button"
          />
        </div>
      </div>
      <div className="NextVideoPreview__hero__content">
        {nextVideoUrl && (
          <h2 className="NextVideoPreview__hero__subtitle">{t('onboarding.page1.videoSection.upNext')}</h2>
        )}
        <h1 className="NextVideoPreview__hero__title">{t(nextVideoTitle)}</h1>
        <div className="NextVideoPreview__hero__button" role="presentation" onClick={goToNextPage}>
          <p className="NextVideoPreview__hero__button-text">{nextVideoButtonTitle}</p>
          <Arrow className="NextVideoPreview__hero__button-arrow" />
        </div>
      </div>
    </div>
  );
};

export default NextVideoPreview;
