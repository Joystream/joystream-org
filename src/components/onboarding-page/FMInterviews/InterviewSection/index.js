import React, { useState, useRef, useEffect } from 'react';
import cn from 'classnames';
import Play from '../../../../assets/svg/btn-play.svg';
import Loader from 'react-loader-spinner';
import './style.scss';

const InterviewSection = ({ title, subtitle, videoUrl, thumbnail }) => {
  const [videoIsHovered, setVideoIsHovered] = useState(false);
  const [imageIsLoading, setImageIsLoading] = useState(false);
  const videoThumbnailRef = useRef();

  useEffect(() => {
    let preloaderImg = document.createElement('img');
    preloaderImg.src = thumbnail;

    preloaderImg.addEventListener('load', event => {
      videoThumbnailRef.current.style.backgroundImage = `url(${thumbnail})`;
      setImageIsLoading(false);
      preloaderImg = null;
    });
  }, [thumbnail]);

  return (
    <div className="InterviewSection__hero-wrapper">
      <div className="InterviewSection__hero">
        <div className="InterviewSection__hero__content">
          <h1 className="InterviewSection__hero__title">{title}</h1>
          <h2 className="InterviewSection__hero__subtitle">{subtitle}</h2>
        </div>
        <div className="InterviewSection__hero__content">
          <div
            ref={videoThumbnailRef}
            role="presentation"
            className="InterviewSection__hero__video"
            onMouseEnter={() => setVideoIsHovered(true)}
            onMouseLeave={() => setVideoIsHovered(false)}
          >
            {imageIsLoading && (
              <Loader
                className="InterviewSection__hero__video__loader"
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
              className={cn('InterviewSection__hero__video__playbutton', {
                'InterviewSection__hero__video__playbutton--hovered': videoIsHovered,
              })}
              src={Play}
              alt="Play button"
            />
            {videoIsHovered && <div className="InterviewSection__hero__video__backdrop" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewSection;
