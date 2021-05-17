import React, { useState, useEffect } from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import MobileEmployeeSection from './MobileEmployee/Section';
import DesktopEmployeeSection from './DesktopEmployee/Section';

import Jsgenesis from '../../../assets/svg/jsgenesis-black.svg';

import './style.scss';

import employees from '../employee-data';

const List = ({ title, subtitle }) => {
  const [filterState, setFilterState] = useState('all');
  const [windowWidth, setWindowWidth] = useState();
  const categoryValues = employees.reduce(
    (prev, curr) => {
      prev.all++;

      curr.type.forEach(type => {
        prev[type]++;
      });

      return prev;
    },
    {
      all: 0,
      blockchain: 0,
      frontEnd: 0,
      design: 0,
      growth: 0,
      core: 0,
    }
  );
  const { t } = useTranslation();

  //mobile
  const [renderMobile, setRenderMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      if(typeof window !== 'undefined'){
        let mq = window.matchMedia('(max-width: 600px)');

        setRenderMobile(mq.matches ? true : false);
        setWindowWidth(window.innerWidth);
      }
    }

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="AboutPage__list-wrapper">
      <div className="AboutPage__list">
        <div className="AboutPage__list__content">
          <h2 className="AboutPage__list__title">{title}</h2>
          <img src={Jsgenesis} className="AboutPage__list__logo" alt={t('about.general.jsgenesisAlt')}/>
          <h3 className="AboutPage__list__subtitle">
            {subtitle}
          </h3>
          

          {!renderMobile ? (
            <DesktopEmployeeSection 
              filterState={filterState}
              setFilterState={setFilterState}
              categoryValues={categoryValues}
              windowWidth={windowWidth}
              t={t}
            />
          ) : (
            <>
              <MobileEmployeeSection
                filterState={filterState}
                setFilterState={setFilterState}
                categoryValues={categoryValues}
                t={t}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default List;
