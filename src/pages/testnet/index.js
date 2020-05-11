import React from 'react';
import bountyImage from '../../assets/svg/bounties.svg';
import tokensImage from '../../assets/svg/tokens.svg';
import Button from '../../components/Button';
import Hero from '../../components/Hero';
import ImageSection from '../../components/ImageSection';
import LayoutWrapper from '../../components/LayoutWrapper';
import SiteMetadata from '../../components/SiteMetadata';
import TitleWrapper from '../../components/TitleWrapper';
import BaseLayout from '../../components/_layouts/Base';
import PendingExchanges from './PendingExchanges';
import TokenStats from './TokenStats';
import './style.scss';

const LegendItem = ({ color, percentage, description }) => {
  return (
    <div className="LegendItem">
      <div className="LegendItem__box" style={{ background: color }} />
      <div className="LegendItem__text">
        <strong>{percentage}%</strong> {description}
      </div>
    </div>
  );
};

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
        <p className="AcropolisPage__hero-paragraph">
          Joystream testnets will going forward have a token, called tJOY, which users can exchange with Jsgenesis for
          real cash.
        </p>
      </Hero>

      <LayoutWrapper className="Stats">
        <TitleWrapper title="Token in Numbers" className="Stats__Title">
          <TokenStats />
        </TitleWrapper>
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
