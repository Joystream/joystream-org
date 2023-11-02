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
    const url = new URL(window.location.href);
    const urlHash = url.hash;
    const glossaryItemParam = url.searchParams.get('item');
    if (glossaryItemParam) {
      const index = glossary.findIndex(res => {
        return res.title === glossaryItemParam;
      });

      if(index <= 0) {
        setGlossaryIndex(0);
        window.history.replaceState(null, null, `?item=${glossary[0].title}${urlHash}`);
      }else {
        setGlossaryIndex(index);
      }
    } else {
      setGlossaryIndex(0);
      window.history.replaceState(null, null, `?item=${glossary[0].title}${urlHash}`);
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
          title={t('glossary.siteMetadata.title')}
          description={t('glossary.siteMetadata.description')}
        />

        <Glossary
          data={glossary[glossaryIndex]}
          headClick={() => {
            onGlossaryState();
          }}
          cardSelect={onCardSelect}
          t={t}
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
