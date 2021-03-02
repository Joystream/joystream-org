import React, { useState, useEffect } from 'react';
import useAxios from '../../../utils/useAxios';
import { Link } from 'gatsby';
import { ReactComponent as Arrow } from '../../../assets/svg/arrow-down-small.svg';

import { bountiesLink } from '../../../data/pages';
import './style.scss';

const RoleCard = ({ Icon, title }) => (
  <div className="IndexPage__howtostart__role-card">
    <Icon className="IndexPage__howtostart__role-card__icon" />
    <div>
      <h4 className="IndexPage__howtostart__role-card__title">{title}</h4>
      <p className="IndexPage__howtostart__role-card__stat">
        <span>12</span> currently run this role
      </p>
    </div>
  </div>
);

const BountyCard = ({ id, title, reward }) => (
  <div className="IndexPage__howtostart__bounty-card">
    <div className="IndexPage__howtostart__bounty-card__id">{id}</div>
    <div className="IndexPage__howtostart__bounty-card__content">
      <h4 className="IndexPage__howtostart__bounty-card__title">{title}</h4>
      <p className="IndexPage__howtostart__bounty-card__reward">${reward}</p>
    </div>
  </div>
);

const TextStep = ({ number, title, text }) => (
  <div className="IndexPage__howtostart__text-step">
    <p className="IndexPage__howtostart__text-step__number">{number}.</p>
    <h3 className="IndexPage__howtostart__text-step__title">{title}</h3>
    <p className="IndexPage__howtostart__text-step__text">{text}</p>
  </div>
);

const HowToStart = ({ roleCardData, bountiesData }) => {
  const [data, loading, error] = useAxios(bountiesLink);
  const [bounties, setBounties] = useState();

  useEffect(() => {
    if (data && !loading) {
      setBounties(data?.activeBounties);
    }
  }, [data, loading]);

  return (
    <div className="IndexPage__howtostart-wrapper">
      <div className="IndexPage__howtostart">
        <div className="IndexPage__howtostart__number-steps-wrapper">
          <h2 className="IndexPage__howtostart__title">How to start</h2>
          <div className="IndexPage__howtostart__number-steps">
            <div className="IndexPage__howtostart__number-step IndexPage__howtostart__number-step--active">1</div>
            <div className="IndexPage__howtostart__number-step-separator IndexPage__howtostart__number-step-separator--active"></div>
            <div className="IndexPage__howtostart__number-step">2</div>
            <div className="IndexPage__howtostart__number-step-separator"></div>
            <div className="IndexPage__howtostart__number-step">3</div>
            <div className="IndexPage__howtostart__number-step-separator"></div>
            <div className="IndexPage__howtostart__number-step">4</div>
          </div>
          <div className="IndexPage__howtostart__text-wrapper">
            <div className="IndexPage__howtostart__text">Join our Discord </div>
            <div className="IndexPage__howtostart__text">Receive free testnet tokens</div>
            <div className="IndexPage__howtostart__text">Create membership on-chain</div>
            <div className="IndexPage__howtostart__text">Pick one of the opportunities below</div>
          </div>
        </div>

        <h2 className="IndexPage__howtostart__title IndexPage__howtostart__title--mobile">How to start?</h2>
        <div className="IndexPage__howtostart__text-steps">
          <TextStep
            number={1}
            title="Join our Discord"
            text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. "
          />
          <TextStep
            number={2}
            title="Help launch Joystream"
            text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. "
          />
          <TextStep
            number={3}
            title="Earn money for your impact"
            text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. "
          />
        </div>
      </div>

      <h3 className="IndexPage__howtostart__subtitle">
        Active roles <span> on the current testnet </span>
      </h3>
      <div className="IndexPage__howtostart-carousel">
        {Object.keys(roleCardData).map(key => (
          <RoleCard key={key} Icon={roleCardData[key].image} title={roleCardData[key].title} />
        ))}
      </div>

      <h3 className="IndexPage__howtostart__subtitle IndexPage__howtostart__subtitle--bounties">Bounties</h3>
      <div className="IndexPage__howtostart-carousel IndexPage__howtostart-carousel--bounties">
        {bounties?.map((bounty,index) => (
          <BountyCard key={index + (bounty?.id ?? 0)} id={bounty?.id} title={bounty?.title} reward={bounty?.reward} />
        ))}
      </div>

      <Link to="/get-started">
        <div className="IndexPage__howtostart__button">
          <p className="IndexPage__howtostart__button-text">Start earning</p>
          <Arrow className="IndexPage__howtostart__button-arrow" />
        </div>
      </Link>

      <Link to="/roles">
        <div className="IndexPage__howtostart__link">
          <p className="IndexPage__howtostart__link-text">Check available roles</p>
          <Arrow className="IndexPage__howtostart__link-arrow" />
        </div>
      </Link>
    </div>
  );
};

export default HowToStart;
