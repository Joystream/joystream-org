import React, { createRef, useMemo } from 'react';
import { graphql } from 'gatsby';
import { useTranslation, useI18next } from 'gatsby-plugin-react-i18next';
import ReactDOM from 'react-dom';
import StorySectionDescription from '../../../components/BrandStory/StorySectionDescription';
import StorySectionExplanation from '../../../components/BrandStory/StorySectionExplanation';
import StorySectionHeader from '../../../components/BrandStory/StorySectionHeader';
import StorySectionLogo from '../../../components/BrandStory/StorySectionLogo';
import StorySectionWebsite from '../../../components/BrandStory/StorySectionWebsite';
import BrandLayout from '../../../components/_layouts/Brand';
import SiteMetadata from '../../../components/SiteMetadata';
import './index.scss';

const StoryPage = () => {
  const { t } = useTranslation();
  const { language } = useI18next();

  const elementsRef = useMemo(
    () => ({
      'section-header': createRef(),
      'section-website': createRef(),
      'section-website-desc': createRef(),
      'section-logo': createRef(),
      'section-brand-explanation': createRef(),
    }),
    []
  );

  const scrollToElement = id => {
    const target = ReactDOM.findDOMNode(elementsRef[id].current);
    window.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
  };

  return (
    <BrandLayout t={t}>
      <SiteMetadata lang={language} title={t('siteMetadata.title')} />

      <div className="Story__multi-section">
        <StorySectionHeader
          t={t}
          ref={elementsRef['section-header']}
          onActionClick={() => scrollToElement('section-website')}
        />

        <StorySectionWebsite
          t={t}
          ref={elementsRef['section-website']}
          onActionClick={() => scrollToElement('section-website-desc')}
        />

        <StorySectionDescription t={t} ref={elementsRef['section-website-desc']} />
      </div>

      <StorySectionLogo
        t={t}
        ref={elementsRef['section-logo']}
        onActionClick={() => scrollToElement('section-brand-explanation')}
      />

      <StorySectionExplanation
        t={t}
        ref={elementsRef['section-brand-explanation']}
        onActionClick={() => scrollToElement('section-header')}
      />
    </BrandLayout>
  );
};

export default StoryPage;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      ...LanguageQueryFields
    }
  }
`;