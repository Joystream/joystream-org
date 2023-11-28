import React, { useState, useEffect, useRef } from 'react';
import cn from 'classnames';
import Player from '@vimeo/player';

import VideoThumbnail from '../../../assets/images/landing/video-future-thumbnail.webp';
import { ReactComponent as PlayIcon } from '../../../assets/svg/simple-play.svg';

import './style.scss';

const Video = ({ t }) => {
  const vimeoVideoIframeRef = useRef(null);
  const [shouldShowVideo, setShouldShowVideo] = useState(false);

  useEffect(() => {
    if (shouldShowVideo) {
      const player = new Player(vimeoVideoIframeRef.current);
      player.play();
      player.disableTextTrack();
    }
  }, [shouldShowVideo]);

  return (
    <div className="IndexPage__video-wrapper">
      <div className="IndexPage__video">
        <h2 className="IndexPage__video__title">{t('landing.ourVision.title')}</h2>
        <p className="IndexPage__video__subtitle">{t('landing.ourVision.subtitle')}</p>
        <div className="IndexPage__video__player">
          <img
            className={cn('IndexPage__video__player__thumbnail', {
              'IndexPage__video__player__thumbnail--hidden': shouldShowVideo,
            })}
            src={VideoThumbnail}
            onClick={() => setShouldShowVideo(prev => !prev)}
            alt="Video thumbnail"
            role="presentation"
          />
          <div
            className={cn('IndexPage__video__player__play-button', {
              'IndexPage__video__player__play-button--hidden': shouldShowVideo,
            })}
            onClick={() => setShouldShowVideo(prev => !prev)}
            role="presentation"
          >
            <PlayIcon className="IndexPage__video__player__play-button__icon" />
          </div>
          <iframe
            ref={vimeoVideoIframeRef}
            title="Joystream Vision Video"
            src="https://player.vimeo.com/video/888678724?h=1e85bf9838&autoplay=1&autopause=0"
            allow="autoplay"
            className="IndexPage__video__player__main"
            loading="eager"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Video;
