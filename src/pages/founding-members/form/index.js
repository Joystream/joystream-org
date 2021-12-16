import React, { useState, useEffect } from 'react';
import SiteMetadata from '../../../components/SiteMetadata';
import { graphql } from 'gatsby';
import { useTranslation, useI18next, Link } from 'gatsby-plugin-react-i18next';
import BaseLayout from '../../../components/_layouts/Base';
import { ReactComponent as Arrow } from '../../../assets/svg/arrow-down-small.svg';
import { ScoringPeriodCounter } from '../../../components/founding-members/ScoringPeriod';
import useAxios from '../../../utils/useAxios';
import { foundingMembersJson } from '../../../data/pages/founding-members';

import FoundingMembersForm from '../../../components/FoundingMembersForm';

import './style.scss';

const FoundingMembersFormPage = () => {
  const [response, loading, error] = useAxios(foundingMembersJson);
  const [formerDate, setFormerDate] = useState();
  const [latterDate, setLatterData] = useState();
  const { t } = useTranslation();
  const { language } = useI18next();

  useEffect(() => {
    if (response?.scoringPeriodsFull?.currentScoringPeriod) {
      setFormerDate(new Date(response.scoringPeriodsFull.currentScoringPeriod.started));
      setLatterData(new Date(response.scoringPeriodsFull.currentScoringPeriod.ends));
    }
  }, [response]);

  return (
    <BaseLayout t={t}>
      <SiteMetadata lang={language} title={t('foundingMembers.form.siteMetadata.title')} />
      <div className="FoundingMembersFormPage">
        <div className="FoundingMembersFormPage__header">
          <div className="FoundingMembersFormPage__back">
            <Link to="/founding-members" className="FoundingMembersFormPage__back__text">
              <Arrow className="FoundingMembersFormPage__back__arrow" />
              <span>{t('foundingMembers.general.backButton')}</span>
            </Link>
          </div>
          <div className="FoundingMembersFormPage__header__title-wrapper">
            <h1 className="FoundingMembersFormPage__header__title">{t('foundingMembers.form.title')}</h1>
            <p className="FoundingMembersFormPage__header__title-date">
              {t('foundingMembers.general.before')}: {latterDate?.getDate()}{' '}
              {latterDate?.toLocaleString('default', { month: 'long' })}
            </p>
          </div>
        </div>

        <div className="FoundingMembersFormPage__body">
          <FoundingMembersForm t={t}/>

          <div className="FoundingMembersFormPage__counter">
            <div className="FoundingMembersFormPage__counter__header">
              <h2 className="FoundingMembersFormPage__counter__header__title">
                {t('foundingMembers.scoringPeriod.title')}
              </h2>
              <h3 className="FoundingMembersFormPage__counter__header__subtitle">
                {t('foundingMembers.scoringPeriod.currentNumber')}{' '}
                <span>#{response?.scoringPeriodsFull?.currentScoringPeriod?.scoringPeriodId}</span>
              </h3>
            </div>
            <ScoringPeriodCounter
              className="FoundingMembersFormPage__counter__body"
              formerDate={formerDate}
              latterDate={latterDate}
              t={t}
            />
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default FoundingMembersFormPage;

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
