import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation, useI18next, Trans } from 'gatsby-plugin-react-i18next';
import SiteMetadata from '../../components/SiteMetadata';
import BaseLayout from '../../components/_layouts/Base';

import { ReactComponent as TheWedge } from '../../assets/svg/the-wedge.svg';
import { ReactComponent as Accountability } from '../../assets/svg/accountability.svg';
import { ReactComponent as Voice } from '../../assets/svg/voice.svg';
import { ReactComponent as Exit } from '../../assets/svg/exit.svg';
import { ReactComponent as Fist } from '../../assets/svg/fist-main.svg';
import { ReactComponent as BrokenGroundLeft } from '../../assets/svg/manifesto-broken-ground-left.svg';
import { ReactComponent as BrokenGroundRight } from '../../assets/svg/manifesto-broken-ground-right.svg';

import './style.scss';

const ManifestoPage = () => {
  const { t } = useTranslation();
  const { language } = useI18next();

  return (
    <BaseLayout t={t} className="ManifestoPage">
      <SiteMetadata
        lang={language}
        title={t('siteMetadata.title')}
        description={t('manifesto.siteMetadata.description')}
      />

      <section className="ManifestoPage__hero-wrapper">
        <div className="ManifestoPage__hero-background">
          <div className="ManifestoPage__hero-background__left">
            <BrokenGroundLeft className="ManifestoPage__hero-background__left__illustration" />
          </div>
          <div className="ManifestoPage__hero-background__middle"></div>
          <div className="ManifestoPage__hero-background__right">
            <BrokenGroundRight className="ManifestoPage__hero-background__right__illustration" />
          </div>
        </div>

        <div className="ManifestoPage__hero">
          <header className="ManifestoPage__hero__header">
            <h1 className="ManifestoPage__hero__title">{t('manifesto.hero.title')}</h1>
            <p className="ManifestoPage__hero__subtitle">{t('manifesto.hero.text')}</p>
          </header>
          <Fist className="ManifestoPage__hero__illustration" />
        </div>
      </section>

      <section className="ManifestoPage__problem-wrapper">
        <div className="ManifestoPage__problem ManifestoPage__section">
          <span className="ManifestoPage__section-title">{t('manifesto.problem.sectionTitle')}</span>
          <h2 className="ManifestoPage__title ManifestoPage__problem__title">{t('manifesto.problem.title')}</h2>
          <div className="ManifestoPage__paragraph ManifestoPage__paragraph--top">
            {t('manifesto.problem.text.artAsTool')}
          </div>
          <div className="ManifestoPage__paragraph">{t('manifesto.problem.text.mediaAsPrimaryMedium')}</div>
          <div className="ManifestoPage__subtitle ManifestoPage__problem__subtitle">
            {t('manifesto.problem.text.however')}
          </div>
          <div className="ManifestoPage__paragraph">
            <span className="ManifestoPage__text-highlight ManifestoPage__text-highlight--red">
              {t('manifesto.problem.text.unaccountableInstitutions')}
            </span>
          </div>
          <div className="ManifestoPage__paragraph ManifestoPage__problem__paragraph-4">
            {t('manifesto.problem.text.filteredOnTheirTerms')} <span>{t('manifesto.problem.text.inflexible')}</span>
          </div>
        </div>
      </section>

      <section className="ManifestoPage__goal-wrapper">
        <div className="ManifestoPage__section">
          <span className="ManifestoPage__section-title ManifestoPage__section-title--white">
            {t('manifesto.goal.sectionTitle')}
          </span>
          <h2 className="ManifestoPage__title">{t('manifesto.goal.title')}</h2>
          <div className="ManifestoPage__paragraph ManifestoPage__paragraph--white ManifestoPage__paragraph--top">
            {t('manifesto.goal.text.arrangement')}
          </div>
          <div className="ManifestoPage__paragraph ManifestoPage__paragraph--white">
            <span className="ManifestoPage__text-highlight ManifestoPage__text-highlight--white">{t('manifesto.goal.text.accountability')}</span>
          </div>
        </div>
      </section>

      <section className="ManifestoPage__thesis-wrapper">
        <div className="ManifestoPage__thesis">
          <div className="ManifestoPage__section">
            <span className="ManifestoPage__section-title ManifestoPage__section-title--blue">
              {t('manifesto.thesis.sectionTitle')}
            </span>
            <h2 className="ManifestoPage__title ManifestoPage__title--black">
              {t('manifesto.thesis.title')}
            </h2>
            <div className="ManifestoPage__paragraph ManifestoPage__paragraph--black ManifestoPage__paragraph--top">
              {t('manifesto.thesis.text.coreThesis')}
            </div>
          </div>

          <div className="ManifestoPage__illustration-wrapper">
            <TheWedge className="ManifestoPage__illustration" />
          </div>

          <div className="ManifestoPage__section">
            <h2 className="ManifestoPage__subtitle ManifestoPage__subtitle--black ManifestoPage__thesis__subtitle">{t('manifesto.wedge.title')}</h2>
            <div className="ManifestoPage__paragraph ManifestoPage__paragraph--black">
              {t('manifesto.wedge.text.alternative')}
            </div>
            <div className="ManifestoPage__paragraph ManifestoPage__paragraph--black">
              {t('manifesto.wedge.text.blockchainTokens')}
            </div>
            {/* TODO: [1,2,3] needs to be styled better */}
            <div className="ManifestoPage__paragraph ManifestoPage__paragraph--black">
              {t('manifesto.wedge.text.initialHurdle')}
            </div>
          </div>

          <div className="ManifestoPage__illustration-wrapper">
            <Accountability className="ManifestoPage__illustration" />
          </div>

          <div className="ManifestoPage__section">
            <h2 className="ManifestoPage__subtitle ManifestoPage__subtitle--black ManifestoPage__thesis__subtitle">
              {t('manifesto.accountability.title')}
            </h2>
            <div className="ManifestoPage__paragraph ManifestoPage__paragraph--black">
              {t('manifesto.accountability.text.createAndSustain')}
            </div>
            <div className="ManifestoPage__paragraph ManifestoPage__paragraph--black">
              {t('manifesto.accountability.text.twoWays')}
            </div>
          </div>

          <div className="ManifestoPage__illustration-wrapper">
            <Voice className="ManifestoPage__illustration" />
          </div>

          <div className="ManifestoPage__section">
            <h2 className="ManifestoPage__subtitle ManifestoPage__subtitle--black ManifestoPage__thesis__subtitle">{t('manifesto.voice.title')}</h2>
            <div className="ManifestoPage__paragraph ManifestoPage__paragraph--black">
              {t('manifesto.voice.text.improveWithin')}
            </div>
            <div className="ManifestoPage__paragraph ManifestoPage__paragraph--black">
              {t('manifesto.voice.text.infrastructure')}
            </div>
            <div className="ManifestoPage__paragraph ManifestoPage__paragraph--black">
              {t('manifesto.voice.text.control')}
            </div>
            <div className="ManifestoPage__paragraph ManifestoPage__paragraph--black">
              {t('manifesto.voice.text.signWithCrypto')}
            </div>
          </div>

          <div className="ManifestoPage__illustration-wrapper">
            <Exit className="ManifestoPage__illustration" />
          </div>

          <div className="ManifestoPage__section">
            <h2 className="ManifestoPage__subtitle ManifestoPage__subtitle--black ManifestoPage__thesis__subtitle">{t('manifesto.exit.title')}</h2>
            <div className="ManifestoPage__paragraph ManifestoPage__paragraph--black">
              {t('manifesto.exit.text.exit')}
            </div>
            <div className="ManifestoPage__paragraph ManifestoPage__paragraph--black">
              {t('manifesto.exit.text.loweredCosts')}
            </div>
            <div className="ManifestoPage__paragraph ManifestoPage__paragraph--black">
              {t('manifesto.exit.text.competition')}
            </div>
            <div className="ManifestoPage__paragraph ManifestoPage__paragraph--black">
              {t('manifesto.exit.text.reusability')}
            </div>
          </div>
        </div>
      </section>

      {/* TODO: Fix the spacing after new line.  */}
      <section className="ManifestoPage__references-wrapper">
        <div className="ManifestoPage__references">
          <h2 className="ManifestoPage__references__title">{t('manifesto.references.title')}</h2>
          <div className="ManifestoPage__references__items">
            <p className="ManifestoPage__references__item">{t('manifesto.references.one')}</p>
            <p className="ManifestoPage__references__item">{t('manifesto.references.two')}</p>
            <p className="ManifestoPage__references__item">{t('manifesto.references.three')}</p>
            <p className="ManifestoPage__references__item">{t('manifesto.references.four')}</p>
            <p className="ManifestoPage__references__item">{t('manifesto.references.five')}</p>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
};

export { ManifestoPage };
export default ManifestoPage;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      ...LanguageQueryFields
    }
  }
`;
