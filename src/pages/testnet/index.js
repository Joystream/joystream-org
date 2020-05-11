import React from 'react';
import axios from 'axios';
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
import PendingExchanges from './PendingExchanges';
import { usePromise } from '../../utils/usePromise';
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
  const [response, error, loading] = usePromise(() => axios.get('http://localhost:8081'));
  if (!error && loading) {
    return <div>Loading...</div>;
  } else if (error) {
    console.error(error);
    return <div>Error...</div>;
  }
  const { data } = response;
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

      <LayoutWrapper dark>
        <TitleWrapper
          title="Pending Exchanges"
          subtitle="The tokens sent to Jsgenesis in exchange are burned, hence the final price of the token is unaffected by such an exchange."
        ></TitleWrapper>
        <PendingExchanges exchanges={data.exchanges} />
      </LayoutWrapper>
    </BaseLayout>
  );
}

export default TestnetPage;
