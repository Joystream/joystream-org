import React, { createContext, useEffect, useState } from "react";
import { graphql } from "gatsby";
import { useTranslation, useI18next } from "gatsby-plugin-react-i18next";

import BaseLayout from "../../components/_layouts/Base";
import SiteMetadata from "../../components/SiteMetadata";

import { ReactComponent as AcropolisBuilding } from "../../assets/svg/Group 15.svg";
import { ReactComponent as CommunityBackground } from "../../assets/svg/patterns.svg";

import { useGetFileName } from "../../utils/useAxios";
import RoadHead from "../../components/roadmap-page/RoadHead";
import Quarters from "../../components/roadmap-page/Quarters";
import GlossaryTerms from "../../components/roadmap-page/GlossaryTeams";

import "./style.scss";
import axios from "axios";
import {
  GIT_FOLDER,
  GIT_GLOSSARY_FOLDER,
  GIT_REPOSITY,
  GIT_USER_NAME,
} from "../../../gitconfig";

import MyContext from "../../utils/useContext";

const RoadmapPage = () => {
  const { t } = useTranslation();
  const { language } = useI18next();
  const [names, gitLoading, gitError] = useGetFileName();
  const [fileName, setFileName] = useState("");
  const [glossary, setGlossary] = useState([]);
  const [sliderText, setSliderText] = useState([]);
  const [selectValue, setSelectValue] = useState(0);
  const [period, setPeriod] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const initfileName = new URL(window.location.href);
      const file = initfileName.hash.split("#")[1];
      let panel = initfileName.hash.split("#")[2];
      if (panel === undefined) panel = "";
      setPeriod(file + "#" + panel);
    }
    const fetchGlossary = async () => {
      const response = await axios.get(
        `https://raw.githubusercontent.com/${GIT_USER_NAME}/${GIT_REPOSITY}/main/${GIT_GLOSSARY_FOLDER}/glossary.json`
      );
      setGlossary(response.data[0].terms);
    };
    fetchGlossary();
    var scrollPosition = localStorage.getItem("scrollPosition");

    if (scrollPosition !== 0 && Number(scrollPosition) > 0) {
      setTimeout(() => {
        window.scrollTo({
          top: Number(scrollPosition),
          behavior: "smooth",
        });

        localStorage.setItem("scrollPosition", 0);
      }, 1000);
    }
  }, []);

  useEffect(() => {
    setFileName(period);
  }, [period]);

  useEffect(() => {
    const FristString = glossary.map((data) => data.title.charAt(0));

    let uniqueArr = FristString.reduce((acc, curr) => {
      if (!acc.includes(curr)) {
        acc.push(curr);
      }
      return acc;
    }, []);

    setSliderText(uniqueArr);
  }, [glossary]);

  useEffect(() => {
    const fetchFileData = async () => {
      const filedata = await axios.get(
        `https://raw.githubusercontent.com/${GIT_USER_NAME}/${GIT_REPOSITY}/main/${GIT_FOLDER}/${fileName}`
      );

      setData(filedata.data);
    };

    if (typeof window !== "undefined") {
      window.location.href = `#${fileName}`;
    }

    fetchFileData();
  }, [fileName]);

  useEffect(() => {
    if (names) {
      const file = fileName.split("#")[0];
      const index = names.fileNames.findIndex((item) => item === file);
      setSelectValue(index);
    }
  }, [fileName, names, period]);

  const onCard = (e) => {
    let originalURL = window.location.href;
    let modifiedURL =
      originalURL.slice(0, originalURL.indexOf("/roadmap")) +
      `/glossary/#${glossary[e].title}`;
    window.location.href = modifiedURL;
  };

  return (
    <MyContext.Provider value={glossary}>
      <BaseLayout t={t}>
        <SiteMetadata
          lang={language}
          title={t("roadmap.siteMetadata.title")}
          description={t("roadmap.siteMetadata.description")}
        />

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
            file={setFileName}
            data={data}
            value={selectValue}
            selectGlossary={onCard}
            setSelect={setPeriod}
          />
          <GlossaryTerms
            glossary={glossary}
            sliderText={sliderText}
            cardOnClick={onCard}
          />
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