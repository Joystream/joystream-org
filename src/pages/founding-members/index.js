import React, { useEffect, useState } from 'react';
import BaseLayout from '../../components/_layouts/Base';
import SiteMetadata from '../../components/SiteMetadata';
import FoundingMembersVisual from '../../assets/svg/hero-founding-members.svg';
import FoundingMembersVisualAlt from '../../assets/svg/hero-founding-members-alt.svg';
import FoundingMembersCTA from '../../assets/svg/hero-founding-members-cta.svg';
import { ReactComponent as Arrow } from '../../assets/svg/arrow-down-small.svg';
import Button from '../../components/Button';
import Benefits from './components/Benefits';
import List from './components/List';
import Metrics from './components/Metrics';
import ScoringPeriod from './components/ScoringPeriod';
import useWindowDimensions from '../../utils/useWindowDimensions';
import useAxios from '../../utils/useAxios';

import './style.scss';

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

  const [response, loading, error] = useAxios(
    'https://raw.githubusercontent.com/bwhm/founding-members/test-schema/data/scoring-example.json'
  );
  const [formerDate, setFormerDate] = useState();
  const [latterDate, setLatterData] = useState();
  const [newFoundingMembers, setNewFoundingMembers] = useState([]);

  useEffect(() => {
    if (response) {
      setFormerDate(new Date(response?.scoringPeriodsFull?.currentScoringPeriod?.started));
      setLatterData(new Date(response?.scoringPeriodsFull?.currentScoringPeriod?.ends));

      const currentScoringPeriodId = response?.scoringPeriodsFull?.currentScoringPeriod?.scoringPeriodId;

      const newFoundingMembers = response?.currentFoundingMembers.filter(
        member => member?.inducted?.inductedScoringPeriodId >= currentScoringPeriodId - 1
      );

      setNewFoundingMembers(newFoundingMembers);
    }
  }, [response]);

  return (
    <BaseLayout secondary>
      <SiteMetadata
        title="Founding Members"
        description="Information and data regarding the new Founding Members Program of the Joystream platform."
      />{' '}
      <div className="FoundingMembersPage__hero-wrapper">
        <div className="FoundingMembersPage__hero">
          <div className="FoundingMembersPage__hero__content">
            <h1 className="FoundingMembersPage__hero__title">Joystream Founding Member Program</h1>
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

        <ScoringPeriod
          formerDate={formerDate}
          latterDate={latterDate}
          scoringPeriodId={response?.scoringPeriodsFull?.currentScoringPeriod?.scoringPeriodId}
        />
      </div>
      {newFoundingMembers?.length ? (
        <List
          className="FoundingMembersPage__list-wrapper--new"
          type="new"
          data={newFoundingMembers}
        />
      ) : null}
      <Benefits newMembers={newFoundingMembers?.length}/>
      <List
        className="FoundingMembersPage__list-wrapper--current"
        type="current"
        data={response?.currentFoundingMembers}
      />
      <Metrics 
        foundingMembers={response?.currentFoundingMembers} 
        nonFoundingMembers={response?.totalScoresFull?.totalScores}
        sizeOfFirstTokenPool={response?.poolStats?.currentPoolSize}
      />
      <div className="FoundingMembersPage__cta-wrapper">
        <div className="FoundingMembersPage__cta">
          <div className="FoundingMembersPage__cta__content">
            <h2 className="FoundingMembersPage__cta__title">Discuss the program</h2>
            <p className="FoundingMembersPage__cta__text">
              Begin your founding member journey by joining our Telegram group and requesting your first testnet tokens.
            </p>
            <p className="FoundingMembersPage__cta__text">
              Here you can also ask question about many aspects of the program and find out the areas where you can
              contribute right away.
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
