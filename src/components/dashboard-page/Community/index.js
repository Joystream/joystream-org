import React from 'react';
import { object } from 'prop-types';

import SectionHeader from '../SectionHeader';
import SocialMedia from './SocialMedia';
import Followers from './Followers';
import OpenEvents from './OpenEvents';

import { parseFollowers, parseDiscrordEvents } from './utils';

import './style.scss';

const propTypes = {
  data: object,
};

const Community = ({ data }) => {
  const { featuredFollowers, discordEvents, ...socialMediaData } = data ?? {};

  const parsedFollowers = parseFollowers(featuredFollowers);
  const parsedEvents = parseDiscrordEvents(discordEvents);

  return (
    <section className="dashboard-community">
      <div className="dashboard-community__container">
        <SectionHeader sectionId="community" sectionHeading="Community" />
        <SocialMedia data={socialMediaData} />

        <Followers followers={parsedFollowers} />
        <OpenEvents events={parsedEvents} />
      </div>
    </section>
  );
};

Community.propTypes = propTypes;

export default Community;
