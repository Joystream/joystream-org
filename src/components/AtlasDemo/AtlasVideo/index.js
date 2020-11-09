import React, { useState, useRef } from 'react';
import './style.scss';
import Play from '../../../assets/svg/play.svg';
import AtlasDemoVideo from '../../../assets/videos/AtlasDemo.mp4';
import cn from 'classnames';
import Button from '../../Button';
import AtlasThumbnail from '../../../assets/images/thumbnail-atlas.png';

/* eslint-disable */

const AtlasVideo = () => {
  const videoRef = useRef();

  const [videoIsHovered, setVideoIsHovered] = useState(false);
  const [videoIsPlaying, setVideoIsPlaying] = useState(false);
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
      <h2 className={cn('AtlasDemo__title', { 'AtlasDemo__title--focused': videoIsHovered })}>Atlas Relase</h2>
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
        {!videoIsPlaying && <div className="AtlasDemo__video__thumbnail"></div>}
        {videoHasEnded && (
          <div
            onClick={() => {
              setVideoHasEnded(false);
              setVideoIsFocused(false);
            }}
            className="AtlasDemo__video__overlay"
          ></div>
        )}
        <video
          preload="none"
          onClick={() => handlePlayVideo()}
          onEnded={() => {
            setVideoHasEnded(true);
            setVideoIsPlaying(false);
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
          }}
          ref={videoRef}
          poster={AtlasThumbnail}
        >
          <source src={AtlasDemoVideo} type="video/mp4" />
        </video>
        {(!videoIsFocused || (videoIsFocused && !videoIsPlaying)) && (
          <img
            onClick={() => handlePlayVideo()}
            className={cn('AtlasDemo__video__playbutton', {
              'AtlasDemo__video__playbutton--hovered': videoIsHovered,
            })}
            src={Play}
            alt="Play button"
          />
        )}
        {videoHasEnded && <Button className="AtlasDemo__video__atlasbutton">Go to Atlas</Button>}
      </div>
    </>
  );
};

export default AtlasVideo;
