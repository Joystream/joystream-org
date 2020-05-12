import React from 'react';
import bountyImage from '../../assets/svg/bounties.svg';
import tokensImage from '../../assets/svg/tokens.svg';
import { ReactComponent as DocumentIcon } from '../../assets/svg/document.svg';

import Button from '../../components/Button';
import Hero from '../../components/Hero';
import ImageSection from '../../components/ImageSection';
import LayoutWrapper from '../../components/LayoutWrapper';
import SiteMetadata from '../../components/SiteMetadata';
import Link from '../../components/Link';
import TitleWrapper from '../../components/TitleWrapper';
import BaseLayout from '../../components/_layouts/Base';
import PendingExchanges from './PendingExchanges';
import TokenStats from './TokenStats';
import LiveKPIs from './LiveKPIs';
import './style.scss';

function TestnetPage() {
  return (
    <BaseLayout className="TokensPage">
      <SiteMetadata title="Joystream: The video platform DAO" description="Tokens" />

      <Hero
        image={tokensImage}
        title={
          <>
            Testnet Incentive <br /> Module
          </>
        }
        animationStartValue={0}
        animationEndValue={60}
        animationEnd="100vh"
        noOverflow
      >
        <p className="Hero__Paragraph">
          Joystream testnets will going forward have a token, called tJOY, which users can exchange with Jsgenesis for
          real cash. <br /> <br /> At any time, there will be a certain number of tJOY tokens in circulation, and there
          will be a certain
        </p>

        <Button>Learn More</Button>
      </Hero>

      <LayoutWrapper className="Stats">
        <TitleWrapper title="Token in Numbers" className="Stats__Title">
          <TokenStats />
        </TitleWrapper>
      </LayoutWrapper>
      <LayoutWrapper className="KPIs__Explainer">
        <ImageSection title="Value Backing dynamics" image={bountyImage}>
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
          <div className="KPIs__Explainer__Replenishment">
            <h1>Current replenishment values</h1>
            <div className="KPIs__Explainer__Replenishment__Card">
              <div className="KPIs__Explainer__Replenishment__Card__Values">
                <div className="KPIs__Explainer__Replenishment__Card__Icon">🕐</div>
                <div className="KPIs__Explainer__Replenishment__Card__Icon">$50</div>
                <div className="KPIs__Explainer__Replenishment__Card__Slash">/</div>
                <div className="KPIs__Explainer__Replenishment__Card__Days">
                  <span>12</span>
                  <span>days</span>
                </div>
              </div>
            </div>
          </div>
        </ImageSection>
        <ImageSection image={bountyImage}>
          <blockquote>
            <h1>KPI Rewards</h1>
            <p>
              At any given time, there is a set of key performance indicators (KPI) which define success metrics for the
              overall system, and how much value is added to the reward pool. The actual success of the system is judged
              by Jsgenesis representatives at designated times.
            </p>
            <p>The set of KPIs, and the terms associated with them, will change over time.</p>
          </blockquote>
          <div className="KPIs__Links">
            <Link to="https://google.com" className="KPIs__Links__Link">
              <DocumentIcon className="KPIs__Links__Document__Icon" />
              See full list of KPI’s
            </Link>
            <Button className="KPIs__Links__Button">Jump to KPI’s</Button>
          </div>
        </ImageSection>
        <LiveKPIs />
      </LayoutWrapper>

      <LayoutWrapper className="Exchanges Exchanges__Container">
        <TitleWrapper
          title="Pending Exchanges"
          subtitle="The tokens sent to Jsgenesis in this exchange are burned, hence the final price of the token is unaffected by such an exchange."
        >
          <PendingExchanges />
          <Button className="Exchanges__Button">View full list</Button>
        </TitleWrapper>
      </LayoutWrapper>

      <LayoutWrapper className="Dynamics">
        <ImageSection title="Testnet tokens dynamics" image={bountyImage}>
          <p>
            The number of testnet tokens is impacted by new tokens being generated as rewards on the blockchain for
            different roles.
          </p>
          <p>
            All else being equal, as the number of new tokens are generated, the redemption price of the tokens
            declines.
          </p>
        </ImageSection>
      </LayoutWrapper>
    </BaseLayout>
  );
}

export default TestnetPage;
