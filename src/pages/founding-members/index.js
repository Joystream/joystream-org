import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import { useTranslation, useI18next, Trans } from 'gatsby-plugin-react-i18next';
import BaseLayout from '../../components/_layouts/Base';
import SiteMetadata from '../../components/SiteMetadata';
import FoundingMembersVisual from '../../assets/svg/hero-founding-members.svg';
import FoundingMembersVisualAlt from '../../assets/svg/hero-founding-members-alt.svg';
import FoundingMembersCTA from '../../assets/svg/hero-founding-members-cta.svg';
import { ReactComponent as Arrow } from '../../assets/svg/arrow-down-small.svg';
import Button from '../../components/Button';
import Benefits from '../../components/founding-members/Benefits';
import List from '../../components/founding-members/List';
import Metrics from '../../components/founding-members/Metrics';
import ScoringPeriod from '../../components/founding-members/ScoringPeriod';
import useWindowDimensions from '../../utils/useWindowDimensions';
import useAxios from '../../utils/useAxios';
import { foundingMembersJson } from '../../data/pages/founding-members';

import './style.scss';

export const ArrowButton = ({ link, text, className, onClick, state, to, style, ...props }) => {
  const children = (
    <div className="ArrowButton">
      <span className="ArrowButton__text"> {text} </span>
      <Arrow className="ArrowButton__arrow" />
    </div>
  );

  if (link) {
    return (
      <Button style={{ padding: 0, ...style }} className={`${className}`} href={link} {...props}>
        {children}
      </Button>
    );
  } else if (to) {
    return (
      <Button style={{ padding: 0, ...style }} className={`${className}`} to={to} state={state} {...props}>
        {children}
      </Button>
    );
  } else {
    return (
      <Button style={{ padding: 0, ...style }} className={`${className}`} onClick={onClick} {...props}>
        {children}
      </Button>
    );
  }
};

const FoundingMembersPage = () => {
  const { width } = useWindowDimensions();
  const { t } = useTranslation();
  const { language } = useI18next();

  const [response, loading, error] = useAxios(foundingMembersJson);
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
    <BaseLayout t={t}>
      <SiteMetadata
        lang={language}
        title={t('foundingMembers.landing.siteMetadata.title')}
        description={t('foundingMembers.landing.siteMetadata.description')}
      />{' '}
      <div className="FoundingMembersPage__hero-wrapper">
        <div className="FoundingMembersPage__hero">
          <div className="FoundingMembersPage__hero__content">
            <h1 className="FoundingMembersPage__hero__title">{t('foundingMembers.landing.hero.title')}</h1>
            <p className="FoundingMembersPage__hero__paragraph">{t('foundingMembers.landing.hero.text')}</p>
            <ArrowButton
              className="FoundingMembersPage__hero__button"
              link="https://discord.gg/DE9UN3YpRP"
              text={t('foundingMembers.general.joinOurDiscord')}
            />
          </div>
          <div className="FoundingMembersPage__hero__image-wrapper">
            <img
              className="FoundingMembersPage__hero__image"
              src={FoundingMembersVisual}
              alt={t('foundingMembers.landing.hero.imageAlt')}
            />
            <img
              className="FoundingMembersPage__hero__image FoundingMembersPage__hero__image--secondary"
              src={FoundingMembersVisualAlt}
              alt={t('foundingMembers.landing.hero.imageAlt')}
            />
          </div>
        </div>

        <ScoringPeriod
          formerDate={formerDate}
          latterDate={latterDate}
          scoringPeriodId={response?.scoringPeriodsFull?.currentScoringPeriod?.scoringPeriodId}
          t={t}
        />
      </div>
      {newFoundingMembers?.length ? (
        <List className="FoundingMembersPage__list-wrapper--new" type="new" data={newFoundingMembers} t={t} />
      ) : null}
      <Benefits newMembers={newFoundingMembers?.length} t={t} />
      <List
        className="FoundingMembersPage__list-wrapper--current"
        type="current"
        data={response?.currentFoundingMembers}
        t={t}
      />
      <Metrics
        foundingMembers={response?.currentFoundingMembers}
        nonFoundingMembers={response?.scores?.totalScores?.filter(({ inducted }) => !inducted)}
        sizeOfFirstTokenPool={response?.poolStats?.currentPoolSize}
        t={t}
      />
      <div className="FoundingMembersPage__cta-wrapper">
        <div className="FoundingMembersPage__cta">
          <div className="FoundingMembersPage__cta__content">
            <h2 className="FoundingMembersPage__cta__title">{t('foundingMembers.landing.cta.title')}</h2>
            <p className="FoundingMembersPage__cta__text">{t('foundingMembers.landing.cta.joinDiscord')}</p>
            <p className="FoundingMembersPage__cta__text">{t('foundingMembers.landing.cta.askQuestions')}</p>
            <ArrowButton
              className="FoundingMembersPage__cta__button"
              link="https://discord.gg/DE9UN3YpRP"
              text={
                width <= 768 ? t('foundingMembers.landing.cta.joinNow') : t('foundingMembers.general.joinOurDiscord')
              }
            />
          </div>
          <img
            className="FoundingMembersPage__cta__visual"
            src={FoundingMembersCTA}
            alt={t('foundingMembers.landing.cta.imageAlt')}
          />
        </div>
      </div>
      <div className="FoundingMembersPage__disclaimer">
        <h2 className="FoundingMembersPage__disclaimer__title">{t('foundingMembers.landing.disclaimer.title')}</h2>
        <p className="FoundingMembersPage__disclaimer__text">
          <Trans
            i18nKey="foundingMembers.landing.disclaimer.text"
            components={[
              <a style={{ color: 'white' }} href="https://www.joystream.org/token/">
                www.joystream.org/token
              </a>,
            ]}
          />
        </p>
      </div>
    </BaseLayout>
  );
};

export default FoundingMembersPage;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
