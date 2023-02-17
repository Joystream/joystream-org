import React from 'react';

import ArrowLink from '../../ArrowLink';

import { ReactComponent as PublishVideosIcon } from '../../../assets/svg/token/publish-videos.svg';
import { ReactComponent as VideoNFTsIcon } from '../../../assets/svg/token/video-nfts.svg';
import { ReactComponent as CreatorTokensIcon } from '../../../assets/svg/token/creator-tokens.svg';
import { ReactComponent as GatewayOperatorIcon } from '../../../assets/svg/token/gateway-operator.svg';
import { ReactComponent as WorkingGroupIcon } from '../../../assets/svg/token/working-group.svg';
import { ReactComponent as ValidateAndStakeIcon } from '../../../assets/svg/token/validate-and-stake.svg';
import { ReactComponent as EngageBountiesIcon } from '../../../assets/svg/token/engage-bounties.svg';

import './style.scss';

const ExplanationSection = ({ Icon, title, subtitle, href = null, to = null }) => (
  <div className="TokenPage__earn__explanation">
    <div className="TokenPage__earn__explanation__icon-section">
      <div className="TokenPage__earn__explanation__icon-section__icon-wrapper">
        <Icon className="TokenPage__earn__explanation__icon-section__icon" />
      </div>
    </div>
    <div className="TokenPage__earn__explanation__content">
      <p className="TokenPage__earn__explanation__content__title">{title}</p>
      <p className="TokenPage__earn__explanation__content__subtitle">{subtitle}</p>
      <ArrowLink text="Learn more" className="TokenPage__earn__explanation__content__link" href={href} to={to} small />
    </div>
  </div>
);

const Earn = () => {
  return (
    <section className="TokenPage__earn-wrapper">
      <div className="TokenPage__earn">
        <header className="TokenPage__earn__header">
          <span className="TokenPage__earn__header__section-title">EARN</span>
          <h2 className="TokenPage__earn__header__title">How can you earn JOY?</h2>
          <p className="TokenPage__earn__header__subtitle">
            There are many options to earn the JOY token. A wide variety of rewardable activities makes it easy for
            anyone to find a task they can enjoy. After all, it's the token's name.
          </p>
        </header>

        <div className="TokenPage__earn__explanations">
          <div className="TokenPage__earn__explanation-section">
            {/* TODO: Update the links here: */}
            <h3 className="TokenPage__earn__explanation-section__title">As a creator</h3>
            <ExplanationSection
              Icon={PublishVideosIcon}
              title="Publish videos"
              subtitle="Lorem ipsum dolor sit amet consectetur. Laoreet venenatis pharetra faucibus dignissim purus."
              to="/#creator-payouts"
            />
            <ExplanationSection
              Icon={VideoNFTsIcon}
              title="Sell your videos as NFTs"
              subtitle="Lorem ipsum dolor sit amet consectetur. Laoreet venenatis pharetra faucibus dignissim purus."
              to="/#video-nfts"
            />
            <ExplanationSection
              Icon={CreatorTokensIcon}
              title="Set up your creator token"
              subtitle="Lorem ipsum dolor sit amet consectetur. Laoreet venenatis pharetra faucibus dignissim purus."
              to="/#creator-tokens"
            />
            <ArrowLink
              text="Browse apps"
              className="TokenPage__earn__explanation-section__link"
              to="/#apps-built-on-joystream"
            />
          </div>
          <div className="TokenPage__earn__explanation-section">
            {/* TODO: Update handbook links: */}
            <h3 className="TokenPage__earn__explanation-section__title">As a DAO participant</h3>
            <ExplanationSection
              Icon={GatewayOperatorIcon}
              title="Become a Gateway Operator"
              subtitle="Lorem ipsum dolor sit amet consectetur. Laoreet venenatis pharetra faucibus dignissim purus."
              href="https://handbook.joystream.org/"
            />
            <ExplanationSection
              Icon={WorkingGroupIcon}
              title="Join a Working Group"
              subtitle="Lorem ipsum dolor sit amet consectetur. Laoreet venenatis pharetra faucibus dignissim purus."
              href="https://handbook.joystream.org/"
            />
            <ExplanationSection
              Icon={ValidateAndStakeIcon}
              title="Validate and Stake"
              subtitle="Lorem ipsum dolor sit amet consectetur. Laoreet venenatis pharetra faucibus dignissim purus."
              href="https://handbook.joystream.org/"
            />
            <ExplanationSection
              Icon={EngageBountiesIcon}
              title="Engage in bounties"
              subtitle="Lorem ipsum dolor sit amet consectetur. Laoreet venenatis pharetra faucibus dignissim purus."
              href="https://handbook.joystream.org/"
            />
            <ArrowLink
              text="Join DAO"
              className="TokenPage__earn__explanation-section__link TokenPage__earn__explanation-section__link--alt"
              href="https://pioneerapp.xyz/"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Earn;
