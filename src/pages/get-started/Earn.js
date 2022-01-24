import React from 'react';

const Earn = props => {
  const { integrators } = props;
  return (
    <>
      <label>We are online now</label>
      Get started. Earn $tJOY and $JOY There are {integrators?.length || `no`} integrators online ready to help you On
      our discord channel, there are people who will answer your every question and help you help us. This is the best
      place to start your contribiutor joyrney, get knowledge about platform, and get familiar with our community! Tell
      us how what you do and we will help you get started and earn tokens
      <button>Ready to earn</button>
    </>
  );
};
export default Earn;
