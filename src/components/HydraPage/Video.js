import React from 'react';
import ReactPlayer from 'react-player';

export default function Video({ src, poster }) {
  return (
    <div className="VideoPlayer Video__Player__Poster">
      <ReactPlayer url={src} light width="100%" height="100%" />
    </div>
  );
}
