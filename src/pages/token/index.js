import React from 'react';
import SiteMetadata from '../../components/SiteMetadata';
import BaseLayout from '../../components/_layouts/Base';
import { sharedData } from '../../data/pages';
import Hero from '../../components/token-page/Hero';
import TokenInformation from '../../components/token-page/TokenInformation';
import PendingCashouts from '../../components/token-page/PendingCashouts';
import ArrowLink from '../../components/ArrowLink';
import useAxios from '../../utils/useAxios';

import './style.scss';

const TokensPage = () => {

  const [statusServerData, loading, error] = useAxios();

  return (
    <BaseLayout className="TokensPage">
      <SiteMetadata title="Joystream: The video platform DAO" description="Tokens" />

      <Hero statusServerData={statusServerData}/>

      <TokenInformation />

      <PendingCashouts cashouts={statusServerData?.exchanges}/>
      
      <div className="TokensPage__cta-wrapper">
        <div className="TokensPage__cta">
          <h2 className="TokensPage__cta__title">Join our Discord and change the online video industry</h2>
          <ArrowLink className='TokensPage__cta__link' text="Open Discord" href={sharedData.social.discordLink} dark />
        </div>
      </div>
    </BaseLayout>
  );
};

export { TokensPage };
export default TokensPage;
