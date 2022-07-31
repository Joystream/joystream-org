import React from 'react';

import { ArrowButton } from '../../ArrowButton';

import PayoutsBackgroundImage from '../../../assets/images/landing/payouts-background.png';
import { ReactComponent as YoutubeLogo } from '../../../assets/svg/landing/youtube-logo.svg'
import { ReactComponent as ConnectionIcon } from '../../../assets/svg/landing/connection-icon.svg'
import { ReactComponent as JoystreamLogo } from '../../../assets/svg/logo-mark.svg';

import './style.scss';

const Payouts = ({ t }) => {
  return (
    <div className="IndexPage__payouts-wrapper">
      <div className="IndexPage__payouts">
        <section className="IndexPage__payouts__content">
          <h3 className="IndexPage__payouts__content__section-title">PAYOUTS</h3>
          <h2 className="IndexPage__payouts__content__title">Receive payouts for uploading quality videos</h2>
          <p className="IndexPage__payouts__content__subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet rhoncus iaculis viverra nunc gravida a
            egestas. Urna pellentesque laoreet facilisis pharetra at arcu vitae.
          </p>
        </section>
        <div className="IndexPage__payouts__illustration">
          <img
            src={PayoutsBackgroundImage}
            class="IndexPage__payouts__illustration__background"
            alt="in the background, my payments tab in atlas studio is shown, in the foreground, a claim payout popup"
          />
        </div>
      </div>
      <div className="IndexPage__payouts-cta">
        <div className="IndexPage__payouts-cta__content">
          <div className="IndexPage__payouts-cta__content__logos">
            <YoutubeLogo className="IndexPage__payouts-cta__content__logos__youtube"/>
            <ConnectionIcon className="IndexPage__payouts-cta__content__logos__connection-icon"/>
            <JoystreamLogo className="IndexPage__payouts-cta__content__logos__joystream"/>
          </div>
          <p className="IndexPage__payouts-cta__content__title">
            Have a YouTube channel already? <br/>Reupload your videos to receive a guaranteed payout in the YouTube Partner
            Program.
          </p>
        </div>
        <ArrowButton link="#" className="IndexPage__payouts-cta__link" text="Learn more" textClassname="IndexPage__payouts-cta__link-text"/>
      </div>
    </div>
  );
};

export default Payouts;
