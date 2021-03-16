import React from 'react';
import useAxios from '../utils/useAxios';
import BaseLayout from '../components/_layouts/Base';
import SiteMetadata from '../components/SiteMetadata';

// components
import Hero from '../components/index-page/Hero';
import WhatWeDo from '../components/index-page/WhatWeDo';
import WhyYouShouldJoin from '../components/index-page/WhyYouShouldJoin';
import ExploreJoystream from '../components/index-page/ExploreJoystream';
import EarnTokens from '../components/index-page/EarnTokens';
import BecomeFoundingMember from '../components/index-page/BecomeFoundingMember';
import RoadToMainnet from '../components/index-page/RoadToMainnet';

import './style.scss';

const IndexPage = () => {
  const [statusData, loading, error] = useAxios();

  return (
    <BaseLayout>
      <SiteMetadata
        title="Joystream: The video platform DAO"
        description="Joystream is a video platform controlled, owned, and operated by its users."
      />

      <Hero statusData={statusData} />

      <WhatWeDo />

      <WhyYouShouldJoin />

      <ExploreJoystream />

      <RoadToMainnet />

      <BecomeFoundingMember />

      <EarnTokens />
    </BaseLayout>
  );
};

export { IndexPage };
export default IndexPage;
