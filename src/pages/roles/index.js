import React, { useState, createRef, useMemo } from 'react';
import ReactDOM from 'react-dom';
import { InView } from 'react-intersection-observer';
import { graphql } from 'gatsby';
import { useTranslation, useI18next, Trans } from 'gatsby-plugin-react-i18next';

import BaseLayout from '../../components/_layouts/Base';
import LayoutWrapper from '../../components/LayoutWrapper';
import Sidebar from '../../components/Sidebar';
import Hero from '../../components/Hero';
import RoleOverview from '../../components/RoleOverview';
import SiteMetadata from '../../components/SiteMetadata';

import rolesImage from '../../assets/svg/roles-hero.svg';

import { sharedData } from '../../data/pages';
import { rolesData } from '../../data/pages/roles';

import './style.scss';

const translateNavbarData = ({ active, upcoming, ...rest }, t) => {
  let activeRoles = active.map(({ title, ...activeRest }) => {
    return {
      title: t(`${title}`),
      ...activeRest,
    };
  });

  let upcomingRoles = upcoming.map(({ title, ...upcomingRest }) => {
    return {
      title: t(`${title}`),
      ...upcomingRest,
    };
  });

  return {
    active: activeRoles,
    upcoming: upcomingRoles,
    ...rest,
  };
};

const translateRolesData = ({ title, overview, responsibilities, requirements, ...role }, t) => {
  let transOverview;

  if (overview?.isModular) {
    transOverview = <Trans i18nKey={overview.key} components={overview.components} />;
  }

  return {
    title: t(`${title}`),
    overview: transOverview ?? t(`${overview}`),
    responsibilities: responsibilities.map(responsibility => {
      if (responsibility?.isModular) {
        return <Trans i18nKey={responsibility.key} components={responsibility.components} />;
      }

      return t(`${responsibility}`);
    }),
    requirements: requirements.map(requirement => t(`${requirement}`)),
    ...role,
  };
};

const RolesPage = () => {
  const [elementInViewport, setElementInViewport] = useState('');
  const { t } = useTranslation();
  const { language } = useI18next();

  const elementsRef = useMemo(() => {
    const obj = {};
    Object.keys(rolesData).map(key => {
      return rolesData[key].map(item => (obj[item.id] = createRef()));
    });
    return obj;
  }, []);

  const scrollToElement = id => {
    const target = ReactDOM.findDOMNode(elementsRef[id].current);
    window.scrollTo({ top: target.offsetTop - 100, behavior: 'smooth' });
  };

  return (
    <BaseLayout t={t}>
      <SiteMetadata lang={language} title={t('siteMetadata.title')} description={t('roles.siteMetadata.description')} />

      <Hero image={rolesImage} title={t('roles.hero.title')} animationStartValue={0}>
        <p className="RolesPage__hero-paragraph">{t('roles.hero.text')}</p>
      </Hero>

      <LayoutWrapper gradient>
        <Sidebar
          onElementChange={scrollToElement}
          currentElement={elementInViewport}
          data={translateNavbarData(rolesData, t)}
          t={t}
        />
        <div className="RoleOverview__Wrapper">
          {Object.keys(rolesData).map(key => {
            return rolesData[key].map(role => (
              <InView
                as="div"
                threshold={0.2}
                onChange={inView => {
                  if (inView) {
                    setElementInViewport(role.id);
                  }
                }}
                key={role.title}
              >
                <RoleOverview t={t} {...translateRolesData({ ...role }, t)} type={key} ref={elementsRef[role.id]} />
              </InView>
            ));
          })}
        </div>
      </LayoutWrapper>
    </BaseLayout>
  );
};

export default RolesPage;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      ...LanguageQueryFields
    }
  }
`;
