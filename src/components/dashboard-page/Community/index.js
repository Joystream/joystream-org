import React from 'react';

import SectionHeader from '../SectionHeader';
import SocialMedia from './SocialMedia';
import Followers from './Followers';
import OpenEvents from './OpenEvents';

import { followers, openEvents } from './utils';

import './style.scss';

const Community = () => {
  return (
    <section className="dashboard-community">
      <div className="dashboard-community__container">
        <SectionHeader sectionId="community" sectionHeading="Community" />
        <SocialMedia />
        <Followers followers={followers} />
        <OpenEvents events={openEvents} />
      </div>
    </section>
  );
};

export default Community;
