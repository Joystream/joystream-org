import React from 'react';
import Player from '../../components/Player';
import NextVideo from './NextVideo';

const Joystream = props => {
  const { videoId, faq } = props;
  return (
    <div>
      <Player id={videoId} />
      <RoleInfo {...props} />
      <Contribute />
      <NextVideo />
    </div>
  );
};

export default Joystream;
