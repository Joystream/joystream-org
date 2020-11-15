import React, { useState, useRef } from 'react';
import './style.scss';
import Play from '../../../assets/svg/atlas-demo-play.svg';
import AtlasDemoVideo from '../../../assets/videos/AtlasDemo.mp4';
import cn from 'classnames';
import Button from '../../Button';
import Loader from 'react-loader-spinner';
import { ReactComponent as Logo } from '../../../assets/svg/logo-white.svg';

const AtlasVideo = () => {
  const videoRef = useRef();

  const [videoIsHovered, setVideoIsHovered] = useState(false);
  const [videoIsPlaying, setVideoIsPlaying] = useState(false);
  const [videoIsLoading, setVideoIsLoading] = useState();
  const [videoIsFocused, setVideoIsFocused] = useState(false);
  const [videoHasEnded, setVideoHasEnded] = useState(false);

  const handlePlayVideo = () => {
    if (videoIsPlaying) {
      setVideoIsFocused(false);
      setVideoIsPlaying(false);
      videoRef.current.pause();
    } else {
      setVideoIsFocused(true);
      setVideoIsPlaying(true);
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  return (
    <>
      <h2 className={cn('AtlasDemo__title', { 'AtlasDemo__title--focused': videoIsHovered })}> Try It Out</h2>
      <div
        className={cn('AtlasDemo__video', { 'AtlasDemo__video--focused': videoIsFocused })}
        onMouseEnter={() => {
          setVideoIsHovered(true);
        }}
        onMouseLeave={() => {
          if (!videoIsFocused) {
            setVideoIsHovered(false);
            videoRef.current.pause();
          }
        }}
      >
        {videoHasEnded && (
          <div className="AtlasDemo__video__logo-wrapper">
            <div className="AtlasDemo__video__logo">
              <p>brought to you by</p>
              <Logo />
            </div>
          </div>
        )}
        {videoHasEnded && (
          <div
            role="presentation"
            className="AtlasDemo__video__overlay"
            onClick={() => {
              setVideoHasEnded(false);
              setVideoIsFocused(false);
            }}
          ></div>
        )}
        <div
          role="presentation"
          className={cn('AtlasDemo__video__thumbnail', {
            'AtlasDemo__video__thumbnail--hovered': videoIsHovered,
            'AtlasDemo__video__thumbnail--disappeared': videoIsPlaying,
          })}
          onClick={() => handlePlayVideo()}
        ></div>
        {videoIsFocused && videoIsLoading && (
          <Loader
            className="AtlasDemo__video__loader"
            type="Oval"
            color="#302ABF"
            height="100%"
            width="100%"
            timeout={0}
          />
        )}
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          preload="none"
          onClick={() => handlePlayVideo()}
          onEnded={() => {
            setVideoHasEnded(true);
            setVideoIsPlaying(false);
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
          }}
          onCanPlayThrough={() => setVideoIsLoading(false)}
          onWaiting={() => setVideoIsLoading(true)}
          ref={videoRef}
        >
          <source src={AtlasDemoVideo} type="video/mp4" />
        </video>
        <img
          role="presentation"
          onClick={() => handlePlayVideo()}
          className={cn('AtlasDemo__video__playbutton', {
            'AtlasDemo__video__playbutton--hovered': !videoHasEnded && !videoIsPlaying && videoIsHovered,
            'AtlasDemo__video__playbutton--playing': videoIsPlaying,
          })}
          src={Play}
          alt="Play button"
        />
        {videoHasEnded && <Button className="AtlasDemo__video__atlasbutton">Go to Atlas</Button>}
      </div>
    </>
  );
};

export default AtlasVideo;
