import React from 'react';
import BaseLayout from '../../components/_layouts/Base';
import SiteMetadata from '../../components/SiteMetadata';
import FoundingMembersVisual from '../../assets/svg/hero-founding-members.svg';
import FoundingMembersVisualAlt from '../../assets/svg/hero-founding-members-alt.svg';
import FoundingMembersCTA from '../../assets/svg/hero-founding-members-cta.svg';
import { ReactComponent as Arrow } from '../../assets/svg/arrow-down-small.svg';
import Button from '../../components/Button';
import PeriodHighlights from './components/PeriodHighlights/';
import Benefits from './components/Benefits';
import List from './components/List';
import Metrics from './components/Metrics';
import ScoringPeriod from './components/ScoringPeriod';
import useWindowDimensions from '../../utils/useWindowDimensions';

import './style.scss';

import { referrerData, scoreData, fullData } from '../../data/pages/founding-members';

// Setting the dates for the counter

const formerDate = new Date(2020, 11, 1);
const latterDate = new Date(2021, 2, 20);
const now = new Date();

export const ArrowButton = ({ link, text, className, onClick }) => {
  const children = (
    <div className="ArrowButton">
      <span className="ArrowButton__text"> {text} </span>
      <Arrow className="ArrowButton__arrow" />
    </div>
  );

  if (link) {
    return (
      <Button style={{ padding: 0 }} className={`${className}`} href={link}>
        {children}
      </Button>
    );
  } else {
    return (
      <Button style={{ padding: 0 }} className={`${className}`} onClick={onClick}>
        {children}
      </Button>
    );
  }
};

const FoundingMembersPage = () => {
  const { width } = useWindowDimensions();

  return (
    <BaseLayout secondary>
      <SiteMetadata
        title="Founding Members"
        description="Information and data regarding the new Founding Members Program of the Joystream platform."
      />{' '}
      <div className="FoundingMembersPage__hero-wrapper">
        <div className="FoundingMembersPage__hero">
          <div className="FoundingMembersPage__hero__content">
            <h1 className="FoundingMembersPage__hero__title">Founding members program has just launched</h1>
            <p className="FoundingMembersPage__hero__paragraph">
              Become a Founding member and have a real impact on the development of our platform.
            </p>
            <ArrowButton
              className="FoundingMembersPage__hero__button"
              link="https://t.me/JoyStreamOfficial"
              text="Join our Telegram"
            />
          </div>
          <div className="FoundingMembersPage__hero__image-wrapper">
            <img
              className="FoundingMembersPage__hero__image"
              src={FoundingMembersVisual}
              alt="founding members visual"
            />
            <img
              className="FoundingMembersPage__hero__image FoundingMembersPage__hero__image--secondary"
              src={FoundingMembersVisualAlt}
              alt="founding members alternate visual"
            />
          </div>
        </div>

        <ScoringPeriod formerDate={formerDate} latterDate={latterDate} />
      </div>
      <PeriodHighlights secondary={now > latterDate} tableOneData={referrerData} tableTwoData={scoreData} />
      <Benefits />
      <List data={fullData} />
      <Metrics tableOneData={fullData} tableTwoData={fullData} />
      <div className="FoundingMembersPage__cta-wrapper">
        <div className="FoundingMembersPage__cta">
          <div className="FoundingMembersPage__cta__content">
            <h2 className="FoundingMembersPage__cta__title">
              Become a founding <br /> member
            </h2>
            <p className="FoundingMembersPage__cta__text">
              Join our Telegram where they can get their first free testnet tokens and learn what the best opportunities
              are at the moment.
            </p>
            <ArrowButton
              className="FoundingMembersPage__cta__button"
              link="https://t.me/JoyStreamOfficial"
              text={width <= 768 ? 'Join now' : 'Join our Telegram'}
            />
          </div>
          <img className="FoundingMembersPage__cta__visual" src={FoundingMembersCTA} alt="founding members visual" />
        </div>
      </div>
      <div className="FoundingMembersPage__disclaimer">
        <h2 className="FoundingMembersPage__disclaimer__title">Disclaimer</h2>
        <p className="FoundingMembersPage__disclaimer__text">
          This disclaimer applies to the webpage accessible at{' '}
          <a style={{ color: 'white' }} href="https://www.joystream.org/token/">
            www.joystream.org/token
          </a>{' '}
          as well as all other webpages, digital services or applications published by Jsgenesis (the “Company”). The
          disclaimer also applies to any material published by Company in any other format in connection with the JOY
          token (the “Token”). Publications made by Company and all information contained within them are not directed
          at or intended for use by any person resident or located in any jurisdiction where (1) the distribution of
          such information is contrary to the laws of such jurisdiction; or (2) such distribution is prohibited without
          obtaining the necessary licenses or authorizations by the relevant branch, subsidiary or affiliate office of
          Company and such licenses or authorizations have not been obtained. Company does not provide investment, legal
          or tax advice and nothing herein should be construed as being financial, legal, tax or other advice. Unless
          specifically stated otherwise, all price information is indicative only. No representation or warranty, either
          express or implied, is provided in relation to the accuracy, completeness or reliability of the materials, nor
          are they a complete statement of the securities, markets or developments referred to herein. The materials
          should not be regarded by recipients as a substitute for the exercise of their own judgment. All information
          and materials published, distributed or otherwise made available by Company in relation to Token are provided
          for informational purposes, for your non-commercial, personal use only. No information or materials published
          by Company constitutes a solicitation, an offer, or a recommendation to buy or sell any investment
          instruments, to effect any transactions, or to conclude any legal act of any kind whatsoever.
        </p>
      </div>
    </BaseLayout>
  );
};

export default FoundingMembersPage;
