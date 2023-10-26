import React, { useState } from 'react';
import cn from 'classnames';

import VideoThumbnail from '../../../assets/images/landing/video-future-thumbnail.webp';
import { ReactComponent as PlayIcon } from '../../../assets/svg/simple-play.svg';

import './style.scss';

const Video = ({ t }) => {
  const [shouldShowVideo, setShouldShowVideo] = useState(false);

  return (
    <div className="IndexPage__video-wrapper">
      <div className="IndexPage__video">
        <h2 className="IndexPage__video__title">Our Vision</h2>
        <p className="IndexPage__video__subtitle">
          Everything you need to know about the project in less than 3 minutes!
        </p>
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
            title="Joystream Vision Video"
            src="https://player.vimeo.com/video/875953807?app_id=58479&autoplay=1"
            width="640"
            height="480"
            allow="autoplay"
            className="IndexPage__video__player__main"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Video;
