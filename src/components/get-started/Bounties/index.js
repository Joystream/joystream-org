import React from 'react';
import GetStartedBountiesImage from '../../../assets/svg/get-started-bounties.svg';
import GetStartedRoles from '../../../assets/svg/get-started-roles.svg';
import { ReactComponent as StorageProviderRole } from '../../../assets/svg/active-storage-providers.svg';
import { ReactComponent as LinkImage } from '../../../assets/svg/link.svg';
import List from '../../../components/CardCarousel';
import BountiesCarousel from './Carousel';

import './style.scss';

const BountiesRoleCard = () => {
  return (
    <div className="GetStarted__bounties__role-card">
      <div className="GetStarted__bounties__role-card__main">
        <StorageProviderRole className="GetStarted__bounties__role-card__image" />
        <div className="GetStarted__bounties__role-card__content">
          <h4 className="GetStarted__bounties__role-card__role-name">Storage Provider</h4>
          <div className="GetStarted__bounties__role-card__info-wrapper">
            <div className="GetStarted__bounties__role-card__info">
              <h4 className="GetStarted__bounties__role-card__subtitle">Reward(per actor per week)</h4>
              <p className="GetStarted__bounties__role-card__data">$320</p>
            </div>
            <div className="GetStarted__bounties__role-card__info">
              <h4 className="GetStarted__bounties__role-card__subtitle">Participants</h4>
              <p className="GetStarted__bounties__role-card__data">6/12</p>
            </div>
          </div>
          <div className="GetStarted__bounties__role-card__overview">
            <h4 className="GetStarted__bounties__role-card__subtitle">Overview</h4>
            <p className="GetStarted__bounties__role-card__text">
              {' '}
              The Joystream platform state lives on a blockchain consensus system. This consensus system is a variant of
              classical BFT consensus combined with Proof-of-Stake to determine voting...
            </p>
          </div>
        </div>
      </div>
      <a href="#0">
        <div className="GetStarted__bounties__role-card__link">
          <p className="GetStarted__bounties__role-card__link-text">Check details on Github</p>
          <LinkImage className="GetStarted__bounties__role-card__link-image" />
        </div>
      </a>
    </div>
  );
};

const GetStartedBounties = () => (
  <div className="GetStarted__bounties">
    <h2 id="opportunities" className="GetStarted__bounties__title">
      See available opportunities
    </h2>
    <div className="GetStarted__bounties__explanation">
      <div className="GetStarted__bounties__explanation__content">
        <h3 className="GetStarted__bounties__explanation__title">Bounties</h3>
        <p className="GetStarted__bounties__explanation__text">
          Bounties are long running tasks which anyone can attempt to tackle in a exchange for some reward. They are
          created either by Jsgenesis, or by the Council.{' '}
        </p>
      </div>
      <img src={GetStartedBountiesImage} alt="money pouch" />
    </div>

    <BountiesCarousel />

    <div className="GetStarted__bounties__explanation GetStarted__bounties__explanation--reverse">
      <img src={GetStartedRoles} alt="money pouch" />
      <div className="GetStarted__bounties__explanation__content">
        <h3 className="GetStarted__bounties__explanation__title">Roles</h3>
        <p className="GetStarted__bounties__explanation__text">
          Our current testnet also allows you to participate in some of the platform roles which will be available on
          mainnet. Participation in these roles is rewarded in tJOY (our testnet token) which is backed by fiat reserves
          at Jsgenesis and redeemable for bitcoin cash.
        </p>
      </div>
    </div>
    <div className="GetStarted__bounties__roles-carousel">
      <h3 className="GetStarted__bounties__roles-carousel__title">
        Active roles on the current testnet <span>(7)</span>
      </h3>
      <List>
        <BountiesRoleCard />
        <BountiesRoleCard />
        <BountiesRoleCard />
        <BountiesRoleCard />
        <BountiesRoleCard />
        <BountiesRoleCard />
        <BountiesRoleCard />
      </List>
    </div>
  </div>
);

export default GetStartedBounties;
