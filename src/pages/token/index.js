import React from 'react';
import buildingShapesImage from '../../assets/images/building-shapes.png';
import exchangeShapesImage from '../../assets/images/exchange-shapes.png';
import vaultShapesImage from '../../assets/images/vault-shapes.png';
import desktopImage from '../../assets/svg/desktop.svg';
import tokensChart from '../../assets/svg/token-chart.svg';
import tokensImage from '../../assets/svg/tokens.svg';
import Button from '../../components/Button';
import Hero from '../../components/Hero';
import ImageSection from '../../components/ImageSection';
import LayoutWrapper from '../../components/LayoutWrapper';
import SiteMetadata from '../../components/SiteMetadata';
import TitleWrapper from '../../components/TitleWrapper';
import BaseLayout from '../../components/_layouts/Base';
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

const TokensPage = () => {
  return (
    <BaseLayout className="TokensPage">
      <SiteMetadata title="Joystream: The video platform DAO" description="Tokens" />

      <Hero
        image={tokensImage}
        title={
          <>
            Understanding <br />
            the JOY token
          </>
        }
        animationStartValue={0}
        animationEndValue={60}
        animationEnd="100vh"
        noOverflow
      >
        <p className="AcropolisPage__hero-paragraph">
          The Joystream Network Token (JOY) will be a fundamental component of the platform once it is live, playing a
          role in governance, staking and as a method of payment.
        </p>
      </Hero>

      <LayoutWrapper>
        <h2 className="TokensPage__title">Purpose of the Token</h2>

        <ImageSection image={vaultShapesImage} imageClassName="TokensPage__section-image">
          <h4 className="TokensPage__sub-title">Staking</h4>
          <p>
            Participants must stake some amount of tokens to be able to participate on the platform in some operational
            role, for example in order to earn a reward. These staked funds may be slashed if the party misbehaves in
            this role.
          </p>
        </ImageSection>

        <ImageSection image={buildingShapesImage} imageClassName="TokensPage__section-image">
          <h4 className="TokensPage__sub-title">Governance</h4>
          <p>
            Tokens can be used to make decisions on the platform by voting in Joystream's built-in democratic processes.
          </p>
        </ImageSection>

        <ImageSection image={exchangeShapesImage} imageClassName="TokensPage__section-image">
          <h4 className="TokensPage__sub-title">Payment</h4>
          <p>Value transfer, such as for transaction fees, memberships or accessing monetised content.</p>
        </ImageSection>

        <h2 className="TokensPage__title">Circulating Token Supply</h2>

        <ImageSection image={desktopImage} imageClassName="TokensPage__large-section-image">
          Unlike cryptocurrencies such as Bitcoin, where there is a fixed inflation schedule, the Joystream platform
          will mint and burn tokens according to rules and parameters which are subject to change.
          <br />
          <br />
          This, in combination with the low friction associated with the updating of the system rules, means that it is
          not possible to determine the token supply up front.
        </ImageSection>

        <div className="ActionCard">
          <h2 className="ActionCard__title">Token Aquisition</h2>
          <p className="ActionCard__content">
            The JOY token does not yet exist. In the meantime however, you can join our currently active testnet and
            earn Monero, and learn what is required to participate when we are live.
          </p>
          <Button light href="https://testnet.joystream.org/acropolis/pioneer/#/">
            Join the current testnet
          </Button>
        </div>
      </LayoutWrapper>

      <LayoutWrapper dark>
        <TitleWrapper title="Allocation of Tokens">
          <div className="TokensPage__allocations">
            <div className="TokensPage__allocations-content">
              <div className="TokensPage__allocations-text">
                The initial allocation of this token in the main network launch is as given below. This means that when
                the system starts, the allocation of token will first look like this, but tokens will get minted at
                every block, which will dilute this set of initial stakeholders.
              </div>
              <div className="TokensPage__legend">
                <LegendItem color="#3B3FFF" percentage={50} description="Team + Investors" />
                <LegendItem color="#92A2B7" percentage={30} description="Future Community Members" />
                <LegendItem color="#C5D1E0" percentage={20} description="Early Community Members" />
              </div>
            </div>
            <img className="TokensPage__allocations-chart" src={tokensChart} alt="" />
          </div>
        </TitleWrapper>
      </LayoutWrapper>

      <LayoutWrapper>
        <h2 className="TokensPage__title">Disclaimer</h2>
        <div className="TokensPage__disclaimer-text">
        
        <p>  
        This disclaimer applies to the webpage accessible at{' '}
        <a href="www.joystream.org/token">www.joystream.org/token</a> as well as all other webpages, digital
        services or applications published by Jsgenesis (the “Company”). The disclaimer also applies to any material
        published by Company in any other format in connection with the JOY token (the “Token”).
         
        Publications made by Company and all information contained within them are not directed at or intended for
        use by any person resident or located in any jurisdiction where (1) the distribution of such information is
        contrary to the laws of such jurisdiction; or (2) such distribution is prohibited without obtaining the
        necessary licenses or authorizations by the relevant branch, subsidiary or affiliate office of Company and
        such licenses or authorizations have not been obtained.

        Company does not provide investment, legal or tax advice and nothing herein should be construed as being
        financial, legal, tax or other advice. Unless specifically stated otherwise, all price information is
        indicative only. No representation or warranty, either express or implied, is provided in relation to the
        accuracy, completeness or reliability of the materials, nor are they a complete statement of the securities,
        markets or developments referred to herein. The materials should not be regarded by recipients as a
        substitute for the exercise of their own judgment.
         
        All information and materials published, distributed or otherwise made available by Company in relation to
        Token are provided for informational purposes, for your non-commercial, personal use only. No information or
        materials published by Company constitutes a solicitation, an offer, or a recommendation to buy or sell any
        investment instruments, to effect any transactions, or to conclude any legal act of any kind whatsoever.
        <p>
          
        </div>
      </LayoutWrapper>
    </BaseLayout>
  );
};

export { TokensPage };
export default TokensPage;
