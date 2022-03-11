import React, { useEffect } from 'react';
import { node } from 'prop-types';

import NavbarOnboarding from '../../onboarding-page/NavbarOnboarding';
import FooterContribute from '../../onboarding-page/FooterContribute';
import LessonList from '../../onboarding-page/LessonList';
import GetStarted from '../../onboarding-page/GetStarted';
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
  const [showLessonList, setShowLessonList] = useState(false);
  const [showGetStarted, setShowGetStarted] = useState(false);

  const handleShowGetStarted = () => {
    setShowGetStarted(true);
  };

  const updateRole = newRole => {
    setRole(newRole);
    localStorage.setItem('JoystreamRole', newRole);
  };

  useEffect(() => {
    setRole(localStorage.getItem('JoystreamRole'));
  }, []);

  return (
    <ScrollProvider>
      <div className="OnboardingLayout__wrapper">
        <NavbarOnboarding
          t={t}
          showChatIntegrator
          onShowChatIntegrator={onChatWithIntegrator}
          role={role}
          showLessonList={true}
          onShowLessonList={() => setShowLessonList(true)}
          showGetStarted={showGetStarted}
          onShowGetStarted={handleShowGetStarted}
        />
        {showLessonList && (
          <LessonList t={t} lessonIndex={0} onLessonListClose={() => setShowLessonList(false)} currentRole={role} />
        )}
        {showGetStarted && (
          <GetStarted
            t={t}
            hideNotSureOption={true}
            shouldSwitchRolePage={true}
            onGetStartedClose={() => {
              setShowGetStarted(false);
            }}
            onRoleChange={updateRole}
          />
        )}
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
