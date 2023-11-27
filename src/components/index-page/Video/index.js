import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import Modal from 'react-modal';

import VideoThumbnail from '../../../assets/images/landing/video-future-thumbnail.webp';
import { ReactComponent as PlayIcon } from '../../../assets/svg/simple-play.svg';

import './style.scss';

const Video = ({ t }) => {
  const [shouldShowVideo, setShouldShowVideo] = useState(false);

  useEffect(() => {
    const body = document.body;

    if (!body) {
      return;
    }

    body.style.overflowY = shouldShowVideo ? 'hidden' : 'scroll';

    return () => {
      body.style.overflowY = 'scroll';
    };
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
          <Modal
            isOpen={shouldShowVideo}
            className="IndexPage__video__modal"
            overlayClassName="IndexPage__video__modal__overlay"
            contentLabel="modal"
            closeTimeoutMS={200}
            onRequestClose={() => setShouldShowVideo(false)}
          >
            <iframe
              title="Joystream Vision Video"
              src="https://player.vimeo.com/video/875953807?app_id=58479&autoplay=1"
              width="640"
              height="480"
              allow="autoplay"
              className="IndexPage__video__player__main"
            ></iframe>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Video;
