import React from 'react';
import rewardImage from '../../assets/svg/reward.svg';
import replenishmentImage from '../../assets/svg/replenishment.svg';
import bountyImage from '../../assets/svg/bounties.svg';
import coinMinterHero from '../../assets/svg/coin-minter-hero.svg';
import data from '../KPIs.json';

const { KPIs } = data;

export default {
  Hero: {
    title: (
      <>
        Testnet Incentive <br /> Module
      </>
    ),
    text: (
      <p className="Hero__Paragraph">
        Joystream testnets will going forward have a token, called tJOY, which users can exchange with Jsgenesis for
        real cash. <br /> <br /> At any time, there will be a certain number of tJOY tokens in circulation, and there
        will be a certain
      </p>
    ),
    image: coinMinterHero,
    ctaLink: {
      to: 'https://blog.joystream.org/constantinople-incentives/',
    },
  },
  Numbers: {
    title: 'Token in numbers',
  },
  KPIsExplainer: {
    title: 'Value backing dynamics',
    sections: {
      first: {
        image: rewardImage,
        text: (
          <>
            <p>There are two dynamics that impact the amount of value backing the tokens at any given time.</p>
            <p>
              All else being equal, as these two rewards are added to the pool, the redemption price of the tokens
              increases.
            </p>
            <blockquote>
              <h1>Replinishment</h1>
              <p>
                At some regular interval, which may itself be updated over time, some quantity of USD value is added to
                the pool of value.
              </p>
            </blockquote>
          </>
        ),
      },
      second: {
        image: replenishmentImage,
        text: (
          <blockquote>
            <h1>KPI Rewards</h1>
            <p>
              At any given time, there is a set of key performance indicators (KPI) which define success metrics for the
              overall system, and how much value is added to the reward pool. The actual success of the system is judged
              by Jsgenesis representatives at designated times.
            </p>
            <p>The set of KPIs, and the terms associated with them, will change over time.</p>
          </blockquote>
        ),
      },
      links: {
        first: {
          to: 'https://blog.joystream.org/constantinople-kpis/',
          text: 'See full list of KPI’s',
        },
        second: {
          to: 'testnet#KPIsValues',
          text: 'Jump to KPI’s',
        },
      },
    },
  },
  KPIsValues: {
    title: 'Current set of KPIs',
    // This array holds the KPIs. To change them or add them, use KPIs.json
    KPIs: [...KPIs],
  },
  Exchanges: {
    title: 'Pending exchanges',
    subtitle:
      'The tokens sent to Jsgenesis in this exchange are burned, hence the final price of the token is unaffected by such an exchange.',
    emptyMessage: 'No pending exchanges currently',
    link: {
      to: 'https://duckduckgo.com',
      text: 'View full list',
    },
  },
  Dynamics: {
    title: 'Testnet tokens dynamics',
    image: bountyImage,
    text: (
      <>
        <p>
          The number of testnet tokens is impacted by new tokens being generated as rewards on the blockchain for
          different roles.
        </p>
        <p>
          All else being equal, as the number of new tokens are generated, the redemption price of the tokens declines.
        </p>
      </>
    ),
  },
};
