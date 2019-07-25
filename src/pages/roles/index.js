import React from 'react';

import BaseLayout from '../../components/_layouts/Base';
import LayoutWrapper from '../../components/LayoutWrapper';
import Hero from '../../components/Hero';

import { ReactComponent as RolesImage } from '../../assets/svg/roles-hero.svg';

import { rolesData } from '../../data/pages/roles';

import './style.scss';
import RoleOverview from '../../components/RoleOverview';

const RolesPage = () => {
  return (
    <BaseLayout>
      <Hero image={RolesImage} title="Discover various roles on the platform">
        <p className="RolesPage__hero-paragraph">
          Explore available roles and pick the one that suits you the most.
          Influence platforms development earning Monero in the process.
        </p>
      </Hero>

      <LayoutWrapper gradient>
        <div className="RoleOverview__Wrapper">
          {rolesData.active.map(role => (
            <RoleOverview {...role} type="active" key={role.title} />
          ))}
          {rolesData.upcoming.map(role => (
            <RoleOverview {...role} key={role.title} />
          ))}
        </div>
      </LayoutWrapper>
    </BaseLayout>
  );
};

export default RolesPage;
