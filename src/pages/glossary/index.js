import React, { createContext, useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import { useTranslation, useI18next } from 'gatsby-plugin-react-i18next';

import BaseLayout from '../../components/_layouts/Base';
import SiteMetadata from '../../components/SiteMetadata';

import axios from 'axios';
import Glossary from '../../components/glossary-page';
import MyContext from '../../utils/useContext';

const GlossaryPage = () => {
  const { t } = useTranslation();
  const { language } = useI18next();
  const [glossary, setGlossary] = useState([]);
  const [glossaryIndex, setGlossaryIndex] = useState(0);

  useEffect(() => {
    let item = '';
    if (typeof window !== 'undefined') {
      const initfileName = new URL(window.location.href);
      item = initfileName.hash.split('#')[1];
    }
    const fetchGlossary = async () => {
      const response = await axios.get(
        `https://raw.githubusercontent.com/HeinrichOlfert/Joystream_term_json_data/main/glossary/glossary.json`
      );

      setGlossary(response.data[0].terms);

      if (item) {
        let decodedString = decodeURIComponent(item);
        const index = response.data[0].terms.findIndex(res => {
          return res.title === decodedString;
        });
        if (index !== -1) {
          setGlossaryIndex(index);
        } else {
          setGlossaryIndex(0);
        }
      } else {
        setGlossaryIndex(0);
      }
    };
    fetchGlossary();
  }, []);

  const onCardSelect = e => {
    const index = glossary.findIndex(item => item.title === e);
    if (index !== -1) {
      setGlossaryIndex(index);
    }
  };

  const onGlossaryState = () => {
    var href = localStorage.getItem('href');
    if (href) {
      if (typeof window !== 'undefined') {
        window.location.href = href;
      }
    }
  };

  return (
    <MyContext.Provider value={glossary}>
      <BaseLayout t={t}>
        <SiteMetadata
          lang={language}
          title={t('roadmap.siteMetadata.title')}
          description={t('roadmap.siteMetadata.description')}
        />

        <Glossary
          data={glossary[glossaryIndex]}
          headClick={() => {
            onGlossaryState();
          }}
          cardSelect={onCardSelect}
        />
      </BaseLayout>
    </MyContext.Provider>
  );
};

export default GlossaryPage;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      ...LanguageQueryFields
    }
  }
`;
