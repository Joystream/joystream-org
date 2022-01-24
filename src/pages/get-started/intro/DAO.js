import React from 'react';
import Player from '../../components/Player';
import FAQ from '../../components/FAQ';
import NextVideo from './NextVideo';

const DAO = props => {
  const { videoId, faq } = props;
  return (
    <div>
      <Player id={videoId} />
      <FAQ faq={faq} />
      <NextVideo />
    </div>
  );
};

export default DAO;
