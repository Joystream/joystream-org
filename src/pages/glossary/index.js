import React, { createContext, useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import { useTranslation, useI18next } from 'gatsby-plugin-react-i18next';

import BaseLayout from '../../components/_layouts/Base';
import SiteMetadata from '../../components/SiteMetadata';

import Glossary from '../../components/glossary-page';
import MyContext from '../../utils/useContext';

import glossaryData from '../../data/glossary/glossary.json';

const GlossaryPage = () => {
  const { t } = useTranslation();
  const { language } = useI18next();
  const [glossaryIndex, setGlossaryIndex] = useState(0);

  const glossary = glossaryData[0].terms;

  useEffect(() => {
    const glossaryItemParam = new URL(window.location.href).searchParams.get('item');
    if (glossaryItemParam) {
      const index = glossary.findIndex(res => {
        return res.title === glossaryItemParam;
      });

      setGlossaryIndex(index >= 1 ? index : 0);
    } else {
      setGlossaryIndex(0);
    }
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
