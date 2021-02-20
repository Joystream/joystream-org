import React from 'react';
import BaseLayout from '../../components/_layouts/Base';
import SiteMetadata from '../../components/SiteMetadata';
import { ReactComponent as Arrow } from '../../assets/svg/arrow-down-small.svg';

import GetStartedHero from '../../components/get-started/Hero';
import GetStartedHowTo from '../../components/get-started/HowTo';
import GetStartedBounties from '../../components/get-started/Bounties';

import './style.scss';

const GetStarted = () => {
  return (
    <BaseLayout>
      <SiteMetadata
        title="Getting Started"
        description="Learn how to contribute and participate to the Joystream project"
      />

      <GetStartedHero />

      <GetStartedHowTo />

      <GetStartedBounties />

    </BaseLayout>
  );
};

export default GetStarted;
