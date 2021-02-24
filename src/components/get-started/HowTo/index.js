import React from 'react';

import './style.scss';

const GetStartedHowTo = () => (
  <div className="GetStarted__howto-wrapper">
    <div className="GetStarted__howto">
      <h2 className="GetStarted__howto__title">How to start</h2>
      <div className="GetStarted__howto__number-steps-wrapper">
        <div className="GetStarted__howto__number-steps">
          <div className="GetStarted__howto__number-step GetStarted__howto__number-step--active">1</div>
          <div className="GetStarted__howto__number-step-separator GetStarted__howto__number-step-separator--active"></div>
          <div className="GetStarted__howto__number-step">2</div>
          <div className="GetStarted__howto__number-step-separator"></div>
          <div className="GetStarted__howto__number-step">3</div>
          <div className="GetStarted__howto__number-step-separator"></div>
          <div className="GetStarted__howto__number-step">4</div>
        </div>
        <div className="GetStarted__howto__text-steps">
          <div className="GetStarted__howto__text-step">Join our Discord</div>
          <div className="GetStarted__howto__text-step">Receive free testnet tokens</div>
          <div className="GetStarted__howto__text-step">Create membership on-chain</div>
          <div className="GetStarted__howto__text-step">Pick one of the opportunities below</div>
        </div>
      </div>
    </div>
  </div>
);

export default GetStartedHowTo;
