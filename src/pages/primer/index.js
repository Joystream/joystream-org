import React, { createContext, useContext, useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import { useTranslation, useI18next } from 'gatsby-plugin-react-i18next';
import BaseLayout from '../../components/_layouts/Base';
import SiteMetadata from '../../components/SiteMetadata';
import useScroll from '../../utils/useScroll';

// components
import ChooseYourOwnAdventure from '../../components/primer-page/ChooseYourOwnAdventure';
import Header from '../../components/primer-page/Header'
import Governance from '../../components/primer-page/Governance';
import WhyWeExist from '../../components/primer-page/WhyWeExist';
import VideoPlatform from '../../components/primer-page/VideoPlatform';
import JoystreamDAO from '../../components/primer-page/JoystreamDAO';
import BusinessModel from '../../components/primer-page/BusinessModel';

import './style.scss';

export const CurrentPrimerSectionContext = createContext(null);
export const sectionIDs = ["primer-header", "primer-future-of-video", "primer-why-we-exist", "primer-the-solution", "primer-governance", "primer-business-model", "primer-next-steps"];

const PrimerPage = () => {
  const { t } = useTranslation();
  const { language } = useI18next();
  const [currentSection, setCurrentSection] = useState(1);
  const { scrollPosition } = useScroll();

  useEffect(() => {
    if(scrollPosition && document) {
      const sectionBottomPositions = sectionIDs.map(sectionID => {
        const sectionElement = document.getElementById(sectionID);

        return sectionElement.offsetTop + sectionElement.offsetHeight;
      });
  
      // Setting up topY - bottomY key value pairs of all of the sections on the page
      let previousTopPosition = 0;
      const sectionPositions = [];
      for(const sectionTopPosition of sectionBottomPositions) {
        sectionPositions.push([previousTopPosition, sectionTopPosition]);
        previousTopPosition = sectionTopPosition;
      }

      for(const [index, sectionPosition] of sectionPositions.slice(1).entries()) {
        const [sectionTopValue, sectionBottomValue] = sectionPosition;

        if(scrollPosition >= sectionTopValue && scrollPosition <= sectionBottomValue) {
          setCurrentSection(index + 1);
        }
      }
    }
  }, [scrollPosition])

  return (
    <CurrentPrimerSectionContext.Provider value={currentSection}>
      <BaseLayout t={t} primer={true}>
        <SiteMetadata
          lang={language}
          title={t('siteMetadata.title')}
          description={t('landing.siteMetadata.description')}
        />

        <Header t={t} />

        <WhyWeExist t={t} />

        <VideoPlatform t={t}/>

        <Governance t={t} />

        <JoystreamDAO t={t} />

        <BusinessModel t={t} />

        <ChooseYourOwnAdventure t={t} />

      </BaseLayout>
    </CurrentPrimerSectionContext.Provider>
  );
};

export { PrimerPage };
export default PrimerPage;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      ...LanguageQueryFields
    }
  }
`;
