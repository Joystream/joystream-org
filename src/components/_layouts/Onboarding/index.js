import React, { useEffect } from 'react';
import { node } from 'prop-types';

import NavbarOnboarding from '../../onboarding-page/NavbarOnboarding';
import FooterOnboarding from '../../onboarding-page/FooterOnboarding';
import LessonList from '../../onboarding-page/LessonList';
import CookiesNotice from '../../CookiesNotice';
import { ScrollProvider } from '../../_enhancers/ScrollContext';
import { useState } from 'react';
import GetStarted from '../../onboarding-page/GetStarted';

const propTypes = {
  children: node,
};

const defaultTypes = {
  children: null,
};

const OnboardingLayout = ({
  children,
  t,
  nextVideoText,
  nextVideoUrl,
  showLessonList,
  lessonIndex,
  onLessonListClose,
}) => {
  const [showGetStarted, setShowGetStarted] = useState(false);
  const [role, setRole] = useState();

  const handleShowGetStarted = () => {
    setShowGetStarted(true);
  };

  useEffect(() => {
    setRole(localStorage.getItem('JoystreamRole'));
  }, []);

  return (
    <ScrollProvider>
      <div className="OnboardingLayout__wrapper">
        <NavbarOnboarding t={t} showGetStarted onShowGetStarted={handleShowGetStarted} role={role} />
        {showLessonList && <LessonList t={t} lessonIndex={lessonIndex} onLessonListClose={onLessonListClose} />}
        {showGetStarted && (
          <GetStarted
            t={t}
            onGetStartedClose={() => setShowGetStarted(false)}
            onRoleChange={newRole => setRole(newRole)}
          />
        )}
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
