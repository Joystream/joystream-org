import React, { useRef, useState, useEffect } from 'react';
import Player from '@vimeo/player';
import ReactModal from 'react-modal';
import cn from 'classnames';
import { string, bool } from 'prop-types';

import DashboardHeroVideoOverlay from '../../../assets/images/dashboard/dashboard-hero-video-overlay.png';
import { ReactComponent as DashboardPlayVideoIcon } from '../../../assets/svg/dashboard/dashboard-play-video-icon.svg';

import './style.scss';

ReactModal.setAppElement('#___gatsby');

const propTypes = {
  introVideoSrc: string,
  embedded: bool,
};

const defaultProps = {
  introVideoSrc: 'https://player.vimeo.com/video/888678724?h=1e85bf9838',
};

const DashboardHero = ({ introVideoSrc, embedded }) => {
  const vimeoVideoIframeRef = useRef(null);

  const [videoPlayerOpen, setVideoPlayerOpen] = useState(false);
  const onVideoPlayerClose = () => setVideoPlayerOpen(false);
  const onVideoWrapperClick = () => setVideoPlayerOpen(true);
  const onVideoWrapperKeyDown = event => {
    if (event.key !== 'Enter') {
      return;
    }
    onVideoWrapperClick();
  };

  useEffect(() => {
    if (videoPlayerOpen && vimeoVideoIframeRef.current) {
      const player = new Player(vimeoVideoIframeRef.current);
      player.play();
      player.disableTextTrack();
    }
  }, [videoPlayerOpen]);

  return (
    <>
      <section id="introduction" className="dashboard-hero">
        <div className={cn('dashboard-hero__container', { embedded })}>
          <div className={cn('dashboard-hero__text-wrapper', { embedded })}>
            {embedded && <h3 className="dashboard-hero__embedded-section-title">DASHBOARD</h3>}
            <h1 className={cn('dashboard-hero__title', { embedded })}>
              Everything you ever wanted to know in one place
            </h1>
            <p className={cn('dashboard-hero__description', { embedded })}>
              A dynamic and comprehensive dashboard with an up to date view on Joystream.
            </p>
          </div>
          {!embedded && (
            <div
              className="dashboard-hero__video-wrapper"
              tabIndex={0}
              role="button"
              onClick={onVideoWrapperClick}
              onKeyDown={onVideoWrapperKeyDown}
            >
              <img
                src={DashboardHeroVideoOverlay}
                alt="dashboard-hero-video-overlay"
                className="dashboard-hero__video-overlay"
              />
              <button className="dashboard-hero__button-play-video">
                <DashboardPlayVideoIcon />
              </button>
            </div>
          )}
        </div>
      </section>
      <ReactModal
        className="dashboard-hero__video-player-modal"
        overlayClassName="dashboard-hero__video-player-modal-overlay"
        isOpen={videoPlayerOpen}
        onRequestClose={onVideoPlayerClose}
        shouldCloseOnEsc
        shouldCloseOnOverlayClick
        shouldReturnFocusAfterClose={false}
      >
        <iframe
          ref={vimeoVideoIframeRef}
          title="Gleev Intro Video"
          // TODO: Change videoSrc
          src={introVideoSrc}
          loading="eager"
          width="100%"
          height="100%"
        ></iframe>
      </ReactModal>
    </>
  );
};

DashboardHero.propTypes = propTypes;
DashboardHero.defaultProps = defaultProps;

export default DashboardHero;
