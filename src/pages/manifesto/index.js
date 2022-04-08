import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation, useI18next, Trans } from 'gatsby-plugin-react-i18next';
import Hero from '../../components/Hero';
import LayoutWrapper from '../../components/LayoutWrapper';
import SiteMetadata from '../../components/SiteMetadata';
import ImageSection from '../../components/ImageSection';
import BaseLayout from '../../components/_layouts/Base';
import pageData from '../../data/pages/manifesto';
import { sharedData } from '../../data/pages';

import fistImage from '../../assets/svg/fist-main.svg';

import './style.scss';

const ManifestoPage = () => {
  const { sections, groupSections } = pageData;
  const { t } = useTranslation();
  const { language } = useI18next();

  return (
    <BaseLayout t={t} className="ManifestoPage">
      <SiteMetadata
        lang={language}
        title={t('siteMetadata.title')}
        description={t('manifesto.siteMetadata.description')}
      />

      <Hero
        image={fistImage}
        title={t('manifesto.hero.title')}
        animationStartValue={10}
        animationEndValue={120}
        animationEnd="100vh"
        indent
        theme="blue"
        noOverflow
      >
        <p className="AcropolisPage__hero-paragraph">{t('manifesto.hero.text')}</p>
      </Hero>

      <LayoutWrapper>
        <ImageSection title={t('manifesto.problem.title')} image={sections.problem.image} imageOffset={50}>
          <p>{t('manifesto.problem.text.artAsTool')}</p>
          <p>{t('manifesto.problem.text.mediaAsPrimaryMedium')}</p>
          <blockquote>{t('manifesto.problem.text.unaccountableInstitutions')}</blockquote>
          <p>{t('manifesto.problem.text.filteredOnTheirTerms')}</p>
          <blockquote>{t('manifesto.problem.text.inflexible')}</blockquote>
        </ImageSection>

        <ImageSection title={t('manifesto.goal.title')} image={sections.goal.image}>
          <p>{t('manifesto.goal.text.arrangement')}</p>
          <blockquote>{t('manifesto.goal.text.accountability')}</blockquote>
        </ImageSection>

        <ImageSection title={t('manifesto.thesis.title')} image={sections.thesis.image}>
          <p>{t('manifesto.thesis.text.coreThesis')}</p>
        </ImageSection>

        <div className="ManifestoPage__grouped-sections">
          <ImageSection title={t('manifesto.wedge.title')} image={groupSections.wedge.image} grouped imageOffset={200}>
            <p>{t('manifesto.wedge.text.alternative')}</p>
            <blockquote>{t('manifesto.wedge.text.blockchainTokens')}</blockquote>
            <p>{t('manifesto.wedge.text.initialHurdle')}</p>
          </ImageSection>

          <ImageSection title={t('manifesto.accountability.title')} image={groupSections.accountability.image} grouped>
            <p>{t('manifesto.accountability.text.createAndSustain')}</p>
            <blockquote>{t('manifesto.accountability.text.twoWays')}</blockquote>
          </ImageSection>

          <ImageSection title={t('manifesto.voice.title')} image={groupSections.voice.image} grouped imageOffset={200}>
            <p>{t('manifesto.voice.text.improveWithin')}</p>
            <p>{t('manifesto.voice.text.infrastructure')}</p>
            <blockquote>{t('manifesto.voice.text.control')}</blockquote>
            <p>{t('manifesto.voice.text.signWithCrypto')}</p>
          </ImageSection>

          <ImageSection title={t('manifesto.exit.title')} image={groupSections.exit.image} grouped imageOffset={200}>
            <p>{t('manifesto.exit.text.exit')}</p>
            <p>{t('manifesto.exit.text.loweredCosts')}</p>
            <blockquote>{t('manifesto.exit.text.competition')}</blockquote>
            <p>{t('manifesto.exit.text.reusability')}</p>
          </ImageSection>
        </div>

        <h3 className="ManifestoPage__cta">
          <Trans
            i18nKey="manifesto.ctaText"
            components={[
              <a href={`mailto:${sharedData.defaultEmail}`}>email</a>,
              <a href={sharedData.social.discordLink} target="_blank" rel="noopener noreferrer">
                Discord
              </a>,
            ]}
          />
        </h3>

        <section className="ManifestoPage__references">
          <h2 className="ManifestoPage__references-title">{t('manifesto.references.title')}</h2>
          <Trans i18nKey="manifesto.references.text" components={[<p />]} />
        </section>
      </LayoutWrapper>
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
