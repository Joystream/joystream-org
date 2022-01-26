import React from 'react';
import { node } from 'prop-types';

import NavbarOnboarding from '../../onboarding-page/NavbarOnboarding';
import FooterOnboarding from '../../onboarding-page/FooterOnboarding';
import CookiesNotice from '../../CookiesNotice';
import { ScrollProvider } from '../../_enhancers/ScrollContext';

const propTypes = {
  children: node,
};

const defaultTypes = {
  children: null,
};

const OnboardingLayout = ({ children, t, nextVideoText, nextVideoUrl }) => {
  return (
    <ScrollProvider>
      <div>
        <NavbarOnboarding t={t} />
        {children}
        <CookiesNotice t={t} />
        <FooterOnboarding t={t} nextVideoText={nextVideoText} nextVideoUrl={nextVideoUrl} />
      </div>
    </ScrollProvider>
  );
};

OnboardingLayout.propTypes = propTypes;
OnboardingLayout.defaultTypes = defaultTypes;

export default OnboardingLayout;
