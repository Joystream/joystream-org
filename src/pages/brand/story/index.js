import React, { createRef, useMemo } from 'react';
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
    <BrandLayout>
      <SiteMetadata title="Joystream: The video platform DAO" />

      <div className="Story__multi-section">
        <StorySectionHeader
          ref={elementsRef['section-header']}
          onActionClick={() => scrollToElement('section-website')}
        />

        <StorySectionWebsite
          ref={elementsRef['section-website']}
          onActionClick={() => scrollToElement('section-website-desc')}
        />

        <StorySectionDescription ref={elementsRef['section-website-desc']} />
      </div>

      <StorySectionLogo
        ref={elementsRef['section-logo']}
        onActionClick={() => scrollToElement('section-brand-explanation')}
      />

      <StorySectionExplanation
        ref={elementsRef['section-brand-explanation']}
        onActionClick={() => scrollToElement('section-header')}
      />
    </BrandLayout>
  );
};

export default StoryPage;
