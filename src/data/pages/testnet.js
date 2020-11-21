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
        Participants on our testnets can now earn Joystream Testnet Tokens (tJOYs) backed by fiat currency.
      </p>
    ),
    image: coinMinterHero,
    ctaLink: {
      to: 'https://github.com/Joystream/helpdesk#incentives',
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
            <blockquote>
              <h1>Replenishment</h1>
              <p>
                The fiat pool will be topped up weekly, without minting new tokens,
                effectively increasing the exchange rate (all else being equal).
              </p>
              <p>
                Last replenishment: <i>$600 on November 21st</i>
              </p>
            </blockquote>
          </>
        ),
      },
      second: {
        image: replenishmentImage,
        text: (
          <blockquote>
            <h1>KPI and Bounty Rewards</h1>
            <p>
              For every new Council term, Jsgenesis will create Council KPIs, each
              assigned a USD value. If the goals are achieved, Jsgenesis will reward
              the Council without affecting the exchange rate.
            </p>
            <p>
              Jsgenesis will also create <a href="https://github.com/Joystream/community-repo/issues?q=is%3Aissue+label%3Acommunity-bounty+">Community KPIs</a>,
              similar to bounties, but managed by the Council. These are also assigned a USD value, and if achieved,
              Jsgenesis will (indirectly) reward the individual or group that achieved the goals.
            </p>
          </blockquote>
        ),
      },
      links: {
        first: {
          to: 'https://blog.joystream.org/alexandria-kpis/',
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
    title: 'Council KPIs',
    // This array holds the KPIs. To change them or add them, use KPIs.json
    KPIs: [...KPIs],
  },
  Exchanges: {
    title: 'Pending exchanges',
    subtitle: (
      <div>
        <p>
          To initiate an exchange, set your memo to an BCH address of your choice and make a transfer to Jsgenesis
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
