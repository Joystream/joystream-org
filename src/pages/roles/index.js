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

const translateRolesData = ({ active, ...rest }, t) => {
  let activeRoles = active.map(({ title, overview, responsibilites, requirements }) => {
    return {
      title: t(`${title}`),
      overview: t(`${overview}`),
      responsibilities: responsibilites.map(responsibility => t(`${responsibility}`)),
      requirements: requirements.map(requirement => t(`${requirement}`)),
    };
  });

  return {
    active: activeRoles,
    ...rest,
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
    <BaseLayout>
      <SiteMetadata lang={language} title={t('siteMetadata.title')} description={t('roles.siteMetadata.description')} />

      <Hero image={rolesImage} title={t('roles.hero.title')} animationStartValue={0}>
        <p className="RolesPage__hero-paragraph">{t('roles.hero.text')}</p>
      </Hero>

      <LayoutWrapper gradient>
        <Sidebar
          onElementChange={scrollToElement}
          currentElement={elementInViewport}
          data={translateRolesData(rolesData, t)}
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
                <RoleOverview {...role} type={key} ref={elementsRef[role.id]} />
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
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
