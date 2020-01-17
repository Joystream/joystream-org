import React, { useState, createRef, useMemo } from 'react';
import ReactDOM from 'react-dom';
import { InView } from 'react-intersection-observer';

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

const RolesPage = () => {
  const [elementInViewport, setElementInViewport] = useState('');

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
      <SiteMetadata
        title="Joystream: The video platform DAO"
        description="Read more about current and future roles on the Joystream platform"
      />

      <Hero image={rolesImage} title="Discover various roles on the platform" animationStartValue={0}>
        <p className="RolesPage__hero-paragraph">{sharedData.rolesDescription}</p>
      </Hero>

      <LayoutWrapper gradient>
        <Sidebar onElementChange={scrollToElement} currentElement={elementInViewport} data={rolesData} />
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
