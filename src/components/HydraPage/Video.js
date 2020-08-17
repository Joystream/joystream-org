import React from 'react';
import ReactPlayer from 'react-player';
import { ReactComponent as PlayIcon } from '../../assets/svg/play.svg';

export default function Video({ src, poster }) {
  return (
    <div className="VideoPlayer Video__Player__Poster">
      <ReactPlayer url={src} light width="100%" height="100%" />
      <div className="VideoPlayer__Release__Text">
        <span>Release the Hydra</span>
        <PlayIcon />
      </div>
    </div>
  );
}
