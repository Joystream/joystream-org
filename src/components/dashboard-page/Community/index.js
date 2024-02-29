import React from 'react';
import { object, bool } from 'prop-types';

import SectionHeader from '../SectionHeader';
import SocialMedia from './SocialMedia';
import Followers from './Followers';
import OpenEvents from './OpenEvents';
import { SocialMediaBlockSkeleton } from './Skeletons';

import { parseFollowers, parseDiscrordEvents } from './utils';

import './style.scss';

const propTypes = {
  data: object,
  loading: bool,
};

const Community = ({ data, loading }) => {
  const { featuredFollowers, discordEvents, ...socialMediaData } = data ?? {};

  const parsedFollowers = parseFollowers(featuredFollowers);
  const parsedEvents = parseDiscrordEvents(discordEvents);

  return (
    <section className="dashboard-community">
      <div className="dashboard-community__container">
        <SectionHeader sectionId="community" sectionHeading="Community" />

        {loading ? <SocialMediaBlockSkeleton /> : <SocialMedia data={socialMediaData} />}

        <Followers followers={parsedFollowers} loading={loading} />
        <OpenEvents events={parsedEvents} loading={loading} />
      </div>
    </section>
  );
};

Community.propTypes = propTypes;

export default Community;
