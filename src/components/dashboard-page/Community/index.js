import React from 'react';
import { bool } from 'prop-types';

import DashboardSectionHeader from '../../DashboardSectionHeader';
import SocialMedia from './SocialMedia';
import Followers from './Followers';
import OpenEvents from './OpenEvents';

import { followers, openEvents } from './utils';

import './style.scss';

const propTypes = {
  shouldAddScrollOffset: bool,
};

const Community = ({ shouldAddScrollOffset }) => {
  return (
    <section className="dashboard-community">
      <div className="dashboard-community__container">
        <DashboardSectionHeader
          sectionId="community"
          sectionHeading="Community"
          shouldAddScrollOffset={shouldAddScrollOffset}
        />
        <SocialMedia />
        <Followers followers={followers} />
        <OpenEvents events={openEvents} />
      </div>
    </section>
  );
};

Community.propTypes = propTypes;

export default Community;
