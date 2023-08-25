import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";
import { useTranslation, useI18next } from "gatsby-plugin-react-i18next";

import BaseLayout from "../../components/_layouts/Base";
import SiteMetadata from "../../components/SiteMetadata";

import { ReactComponent as AcropolisBuilding } from "../../assets/svg/acropolis-building.svg";
import { ReactComponent as CommunityBackground } from "../../assets/svg/community-background.svg";

import { useGetFileName } from "../../utils/useAxios";
import RoadHead from "../../components/roadmap-page/RoadHead";
import Quarters from "../../components/roadmap-page/Quarters";
import GlossaryTeams from "../../components/roadmap-page/GlossaryTeams";

import "./style.scss";
import axios from "axios";
import {
  GIT_FOLDER,
  GIT_GLOSSARY_FOLDER,
  GIT_REPOSITY,
  GIT_USER_NAME,
} from "../../../gitconfig";

import Glossary from "../../components/glossary-page";

const RoadmapPage = () => {
  const { t } = useTranslation();
  const { language } = useI18next();
  const [names, gitLoading, gitError] = useGetFileName();
  const [fileName, setFileName] = useState("");
  const [glossary, setGlossary] = useState([]);
  const [sliderText, setSliderText] = useState([]);
  const [glossaryState, setGlossaryState] = useState(true);

  const [data, setData] = useState([]);

  const getFileName = (name) => {
    setFileName(name);
  };

  useEffect(() => {
    const fetchGlossary = async () => {
      const response = await axios.get(
        `https://raw.githubusercontent.com/${GIT_USER_NAME}/${GIT_REPOSITY}/main/${GIT_GLOSSARY_FOLDER}/glossary.json`
      );
      setGlossary(response.data);
    };
    fetchGlossary();
    const FristString = glossary.map((data) => data.title.charAt(0));

    let uniqueArr = FristString.reduce((acc, curr) => {
      if (!acc.includes(curr)) {
        acc.push(curr);
      }
      return acc;
    }, []);

    setSliderText(uniqueArr);
  }, []);

  useEffect(() => {
    const fetchFileData = async () => {
      const filedata = await axios.get(
        `https://raw.githubusercontent.com/${GIT_USER_NAME}/${GIT_REPOSITY}/main/${GIT_FOLDER}/${fileName}`
      );
      setData(filedata.data);
    };

    fetchFileData();
  }, [fileName]);

  return (
    <BaseLayout t={t}>
      <SiteMetadata
        lang={language}
        title={t("roadmap.siteMetadata.title")}
        description={t("roadmap.siteMetadata.description")}
      />
      {glossaryState ? (
        <Glossary data={glossary[0]} />
      ) : (
        <div>
          <section className="RoadmapPage__hero-wrapper">
            <div className="RoadmapPage__hero">
              <div className="RoadmapPage__hero__content">
                <h1 className="RoadmapPage__hero__content__title">
                  {t("roadmap.main.title")}
                </h1>
                <p className="RoadmapPage__hero__content__subtitle">
                  {t("roadmap.main.subtitle")}
                </p>
              </div>
              <div className="RoadmapPage__hero__image">
                <CommunityBackground className="RoadmapPage__hero__image__background" />
                <AcropolisBuilding className="RoadmapPage__hero__image__foreground" />
              </div>
            </div>
          </section>
          <RoadHead />
          <Quarters
            names={names}
            gitError={gitError}
            gitLoading={gitLoading}
            file={getFileName}
            data={data}
          />
          <GlossaryTeams glossary={glossary} sliderText={sliderText} />
        </div>
      )}
    </BaseLayout>
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
