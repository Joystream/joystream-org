import React from 'react';
import cn from 'classnames';

import { ReactComponent as MintEventPlus } from '../../../assets/svg/token/mint-event-plus.svg';
import { ReactComponent as MintEventMinus } from '../../../assets/svg/token/mint-event-minus.svg';

import './style.scss';

const ChangeEvent = ({ isEventMint, title, subtitle }) => {
  const icon = isEventMint ? <MintEventPlus className="TokenPage__supply__content-section__change-event__icon" /> : <MintEventMinus className="TokenPage__supply__content-section__change-event__icon" />

  return (
    <div className="TokenPage__supply__content-section__change-event">
      <div className={cn("TokenPage__supply__content-section__change-event__icon-wrapper", {
        "TokenPage__supply__content-section__change-event__icon-wrapper--burned": !isEventMint
      })}>
        {icon}
      </div>
      <div className="TokenPage__supply__content-section__change-event__content">
        <h3 className="TokenPage__supply__content-section__change-event__content__title">
          {title}
        </h3>
        <p className="TokenPage__supply__content-section__change-event__content__subtitle">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

const Supply = () => {
  return (
    <div className="TokenPage__supply-wrapper">
      <div className="TokenPage__supply">
        <header className="TokenPage__supply__header">
          <span className="TokenPage__supply__header__section-title">SUPPLY</span>
          <h2 className="TokenPage__supply__header__title">How is the JOY supply changing?</h2>
          <p className="TokenPage__supply__header__subtitle">
            As with all other tokens, some events can increase (mint) and decrease (burn) the number of JOY tokens in
            the pool.
          </p>
        </header>

        <div className="TokenPage__supply__content-section">
          <div className="TokenPage__supply__content-section__explanations">
            <p className='TokenPage__supply__content-section__explanations__text'>JOY tokens are minted when...</p>
          </div>
          <div className="TokenPage__supply__content-section__change-events">
            <ChangeEvent isEventMint={true} title="Validators are rewarded for their work" subtitle="Lorem ipsum dolor sit amet consectetur. Laoreet venenatis pharetra faucibus dignissim purus." />
            <ChangeEvent isEventMint={true} title="Councilors, workers and leads are paid out" subtitle="Lorem ipsum dolor sit amet consectetur. Laoreet venenatis pharetra faucibus dignissim purus." />
            <ChangeEvent isEventMint={true} title="Creators are being rewarded for publishing high quality content" subtitle="Lorem ipsum dolor sit amet consectetur. Laoreet venenatis pharetra faucibus dignissim purus." />
            <ChangeEvent isEventMint={true} title="Joystream-based applications are being recognized and rewarded" subtitle="Lorem ipsum dolor sit amet consectetur. Laoreet venenatis pharetra faucibus dignissim purus." />
            <ChangeEvent isEventMint={true} title="Financing spending proposals and bounties" subtitle="Lorem ipsum dolor sit amet consectetur. Laoreet venenatis pharetra faucibus dignissim purus." />
          </div>
        </div>

        <div className="TokenPage__supply__content-section">
          <div className="TokenPage__supply__content-section__explanations">
            <p className='TokenPage__supply__content-section__explanations__text'>JOY tokens are burned when...</p>
          </div>
          <div className="TokenPage__supply__content-section__change-events">
            <ChangeEvent isEventMint={false} title="A creator token is sold" subtitle="Lorem ipsum dolor sit amet consectetur. Laoreet venenatis pharetra faucibus dignissim purus." />
            <ChangeEvent isEventMint={false} title="An NFT is sold" subtitle="Lorem ipsum dolor sit amet consectetur. Laoreet venenatis pharetra faucibus dignissim purus." />
            <ChangeEvent isEventMint={false} title="Application fee is charged" subtitle="Lorem ipsum dolor sit amet consectetur. Laoreet venenatis pharetra faucibus dignissim purus." />
            <ChangeEvent isEventMint={false} title="New content is published" subtitle="Lorem ipsum dolor sit amet consectetur. Laoreet venenatis pharetra faucibus dignissim purus." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Supply;
