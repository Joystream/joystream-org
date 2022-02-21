import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation, useI18next, Trans } from 'gatsby-plugin-react-i18next';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { ReactComponent as DocumentIcon } from '../../assets/svg/document.svg';
import { ReactComponent as TimeIsMoneyIcon } from '../../assets/svg/money-time.svg';

import Button from '../../components/Button';
import Hero from '../../components/Hero';
import ImageSection from '../../components/ImageSection';
import LayoutWrapper from '../../components/LayoutWrapper';
import SiteMetadata from '../../components/SiteMetadata';
import TitleWrapper from '../../components/TitleWrapper';
import BaseLayout from '../../components/_layouts/Base';
import PendingExchanges from './PendingExchanges';
import TokenStats from './TokenStats';
import LiveKPIs from './LiveKPIs';
import content from '../../data/pages/testnet';
import './style.scss';
import CommunityBounties from './CommunityBounties';

function TestnetPage() {
  const { t } = useTranslation();
  const { language } = useI18next();
  
  return (
    <BaseLayout t={t} className="TokensPage">
      <SiteMetadata title="Joystream: The video platform DAO" description="Tokens" />

      <Hero
        image={content.Hero.image}
        title={content.Hero.title}
        animationStartValue={0}
        animationEndValue={60}
        animationEnd="100vh"
        noOverflow
      >
        {content.Hero.text}
        <a href={content.Hero.ctaLink.to} target="_blank" rel="noopener noreferrer">
          <Button>Learn More</Button>
        </a>
      </Hero>

      <LayoutWrapper className="Stats">
        <TitleWrapper title={content.Numbers.title} className="Stats__Title">
          <TokenStats />
        </TitleWrapper>
      </LayoutWrapper>
      <LayoutWrapper className="KPIs__Explainer">
        <ImageSection title={content.KPIsExplainer.title} image={content.KPIsExplainer.sections.first.image}>
          {content.KPIsExplainer.sections.first.text}
          <div className="KPIs__Explainer__Replenishment">
            <h1>Current replenishment values</h1>
            <div className="KPIs__Explainer__Replenishment__Card">
              <div className="KPIs__Explainer__Replenishment__Card__Values">
                <div className="KPIs__Explainer__Replenishment__Card__Icon">
                  <TimeIsMoneyIcon />
                </div>
                <div className="KPIs__Explainer__Replenishment__Card__Icon">$1000</div>
                <div className="KPIs__Explainer__Replenishment__Card__Slash">/</div>
                <div className="KPIs__Explainer__Replenishment__Card__Days">
                  <span>7</span>
                  <h2 className="KPIs__Explainer__Replenishment__Card__Days__Text">days</h2>
                </div>
              </div>
            </div>
          </div>
        </ImageSection>
        <ImageSection image={content.KPIsExplainer.sections.second.image}>
          {content.KPIsExplainer.sections.second.text}
          <div className="KPIs__Links">
            <a
              href={content.KPIsExplainer.sections.links.first.to}
              className="KPIs__Links__Link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DocumentIcon className="KPIs__Links__Document__Icon" />
              {content.KPIsExplainer.sections.links.first.text}
            </a>
            <AnchorLink to="/testnet#LiveKPIs">
              <Button className="KPIs__Links__Button">{content.KPIsExplainer.sections.links.second.text}</Button>
            </AnchorLink>
          </div>
        </ImageSection>

        <LiveKPIs id="LiveKPIs" />
        <CommunityBounties id="Bounties" />
      </LayoutWrapper>

      <LayoutWrapper className="Exchanges Exchanges__Container">
        <TitleWrapper title={content.Exchanges.title} subtitle={content.Exchanges.subtitle}>
          <PendingExchanges />
          {/* <a to={content.Exchanges.link.to} target="_blank" rel="noopener noreferrer">
            <Button className="Exchanges__Button">{content.Exchanges.link.text}</Button>
          </a> */}
        </TitleWrapper>
      </LayoutWrapper>
    </BaseLayout>
  );
}

export default TestnetPage;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      ...LanguageQueryFields
    }
  }
`;