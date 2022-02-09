import React, { useEffect } from 'react';
import { node } from 'prop-types';

import NavbarOnboarding from '../../onboarding-page/NavbarOnboarding';
import FooterContribute from '../../onboarding-page/FooterContribute';
import CookiesNotice from '../../CookiesNotice';
import { ScrollProvider } from '../../_enhancers/ScrollContext';
import { useState } from 'react';

const propTypes = {
  children: node,
};

const defaultTypes = {
  children: null,
};

const ContributeLayout = ({ children, t, onChatWithIntegrator }) => {
  const [role, setRole] = useState();

  useEffect(() => {
    setRole(localStorage.getItem('JoystreamRole'));
  }, []);

  return (
    <ScrollProvider>
      <div className="OnboardingLayout__wrapper">
        <NavbarOnboarding t={t} showChatIntegrator onShowChatIntegrator={onChatWithIntegrator} role={role} />
        {children}
        <CookiesNotice t={t} />
        <FooterContribute t={t} />
      </div>
    </ScrollProvider>
  );
};

ContributeLayout.propTypes = propTypes;
ContributeLayout.defaultTypes = defaultTypes;

export default ContributeLayout;
