import React, { useState, useRef, createRef } from 'react';
import ReactDOM from 'react-dom';
import { InView } from 'react-intersection-observer';

import BaseLayout from '../../components/_layouts/Base';
import LayoutWrapper from '../../components/LayoutWrapper';
import Sidebar from '../../components/Sidebar';
import Hero from '../../components/Hero';
import RoleOverview from '../../components/RoleOverview';

import { ReactComponent as RolesImage } from '../../assets/svg/roles-hero.svg';

import { rolesData } from '../../data/pages/roles';

import './style.scss';

const RolesPage = () => {
  const [elementInViewport, setElementInViewport] = useState('validator');

  const elementsRef = useRef(
    Object.keys(rolesData).map(key => {
      return rolesData[key].reduce((result, item) => {
        result[item.id] = createRef();
        return result;
      }, {});
    })
  );

  const scrollToElement = id => {
    const target = ReactDOM.findDOMNode(elementsRef.current[id]);
    window.scrollTo({ top: target.offsetTop - 100, behavior: 'smooth' });
  };

  return (
    <BaseLayout>
      <Hero image={RolesImage} title="Discover various roles on the platform">
        <p className="RolesPage__hero-paragraph">
          Explore available roles and pick the one that suits you the most.
          Influence platforms development earning Monero in the process.
        </p>
      </Hero>

      <LayoutWrapper gradient>
        <Sidebar
          onElementChange={scrollToElement}
          currentElement={elementInViewport}
          data={rolesData}
        />
        <div className="RoleOverview__Wrapper">
          {Object.keys(rolesData).map(key =>
            rolesData[key].map(role => (
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
                <RoleOverview
                  {...role}
                  type={key}
                  ref={ref => (elementsRef.current[role.id] = ref)}
                />
              </InView>
            )))}
        </div>
      </LayoutWrapper>
    </BaseLayout>
  );
};

export default RolesPage;
