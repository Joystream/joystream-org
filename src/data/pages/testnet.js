import React from 'react';
import rewardImage from '../../assets/svg/reward.svg';
import replenishmentImage from '../../assets/svg/replenishment.svg';
import coinMinterHero from '../../assets/svg/coin-minter-hero.svg';
import data from '../KPIs.json';

const { KPIs } = data;

// Doesn't look like process.env works here. for now, just hardcode the burner address value here
const JSGENESIS_BURNER_ADDRESS = '5D5PhZQNJzcJXVBxwJxZcsutjKPqUPydrvpu6HeiBfMaeKQu';

export default {
  Hero: {
    title: <>Testnet Incentives</>,
    text: (
      <p className="Hero__Paragraph">
        In order to more closely simulate the economy of our mainnet, participants on testnets can now earn Joystream
        Testnet Tokens (tJOYs) backed by fiat currency.
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
              <h1>Replenishment</h1>
              <p>
                At some regular interval, which may itself be updated over time, some quantity of USD value is added to
                the pool of value.
              </p>
              <p>
                <i>Last replenishment: $250 added on June 5th</i>
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
          text: 'Further details and KPI history',
        },
        second: {
          to: 'testnet#KPIsValues',
          text: 'Jump to KPIs',
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
    subtitle: (
      <div>
        <p>
          To initiate an exchange, set your memo to an XMR address of your choice and make a transfer to Jsgenesis
          burner address: <span style={{ color: 'white' }}>{JSGENESIS_BURNER_ADDRESS}</span>
        </p>
        <br />
        <p>
          Tokens sent to Jsgenesis in this exchange are burned, hence the final price of the token is unaffected by such
          an exchange.
        </p>
      </div>
    ),
    emptyMessage: 'No pending exchanges currently',
    link: {
      to: 'https://duckduckgo.com',
      text: 'View full list',
    },
  },
};
