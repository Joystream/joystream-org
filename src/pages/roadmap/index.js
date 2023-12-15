import React, { createContext, useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import { useTranslation, useI18next } from 'gatsby-plugin-react-i18next';

import BaseLayout from '../../components/_layouts/Base';
import SiteMetadata from '../../components/SiteMetadata';

import { ReactComponent as AcropolisBuilding } from '../../assets/svg/Group 15.svg';
import { ReactComponent as CommunityBackground } from '../../assets/svg/patterns.svg';

import RoadHead from '../../components/roadmap-page/RoadHead';
import Quarters from '../../components/roadmap-page/Quarters';
import GlossaryTerms from '../../components/roadmap-page/GlossaryTeams';

import MyContext from '../../utils/useContext';
import isBrowser from '../../utils/isBrowser';

import './style.scss';

import roadmapData, { iconMap } from '../../data/quarters';
import glossaryData from '../../data/glossary/glossary.json';

const FILE_NAMES = roadmapData.map(datapoint => datapoint.name);
const NEWEST_ROADMAP_FILENAME = roadmapData.find(item => item.isNewest === true).name;

const parseURLFilename = () => {
  if (!isBrowser) return NEWEST_ROADMAP_FILENAME;

  const url = new URL(window.location.href);
  const filename = url.searchParams.get('filename');

  if (!filename) return NEWEST_ROADMAP_FILENAME;

  if (!FILE_NAMES.includes(filename)) {
    return NEWEST_ROADMAP_FILENAME;
  }

  return filename;
};

const RoadmapPage = () => {
  const { t } = useTranslation();
  const { language } = useI18next();
  const [fileName, setFileName] = useState(parseURLFilename());
  const [glossary, setGlossary] = useState([]);
  const [sliderText, setSliderText] = useState([]);
  const [data, setData] = useState([]);

  const updateFileName = filename => {
    setFileName(filename);
  };

  useEffect(() => {
    setGlossary(glossaryData[0].terms);
    var scrollPosition = localStorage.getItem('scrollPosition');

    if (scrollPosition !== 0 && Number(scrollPosition) > 0) {
      setTimeout(() => {
        window.scrollTo({
          top: Number(scrollPosition),
          behavior: 'smooth',
        });

        localStorage.setItem('scrollPosition', 0);
      }, 1000);
    }
  }, []);

  useEffect(() => {
    const FristString = glossary.map(data => data.title.charAt(0));

    let uniqueArr = FristString.reduce((acc, curr) => {
      if (!acc.includes(curr)) {
        acc.push(curr);
      }
      return acc;
    }, []);

    setSliderText(uniqueArr);
  }, [glossary]);

  useEffect(() => {
    const URLHash = new URL(window.location.href).hash;
    window.history.replaceState(null, null, `?filename=${fileName}${URLHash}`);
    setData(roadmapData.find(datapoint => datapoint.name === fileName).value);
  }, [fileName]);

  const onCard = e => {
    let originalURL = window.location.href;
    let modifiedURL = originalURL.slice(0, originalURL.indexOf('/roadmap')) + `/glossary?item=${glossary[e].title}`;
    window.location.href = modifiedURL;
  };

  return (
    <MyContext.Provider value={glossary}>
      <BaseLayout t={t}>
        <SiteMetadata
          lang={language}
          title={t('roadmap.siteMetadata.title')}
          description={t('roadmap.siteMetadata.description')}
        />

        <div className="RoadmapPage">
          <section className="RoadmapPage__hero-wrapper">
            <div className="RoadmapPage__hero">
              <div className="RoadmapPage__hero__content">
                <h1 className="RoadmapPage__hero__content__title">{t('roadmap.main.title')}</h1>
                <p className="RoadmapPage__hero__content__subtitle">{t('roadmap.main.subtitle')}</p>
              </div>
              <div className="RoadmapPage__hero__image">
                <CommunityBackground className="RoadmapPage__hero__image__background" />
                <AcropolisBuilding className="RoadmapPage__hero__image__foreground" />
              </div>
            </div>
          </section>
          <div className="RoadmapPage__body">
            <div className="RoadmapPage__body__goal">
              <RoadHead />
              <Quarters
                currentFilename={fileName}
                names={FILE_NAMES}
                roadmapData={roadmapData}
                gitError={false}
                gitLoading={false}
                updateFileName={updateFileName}
                data={data}
                selectGlossary={onCard}
                t={t}
              />
            </div>
          </div>
          <GlossaryTerms glossary={glossary} sliderText={sliderText} cardOnClick={onCard} t={t} />
        </div>
      </BaseLayout>
    </MyContext.Provider>
  );
};

export default RoadmapPage;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      ...LanguageQueryFields
    }
  }
`;
