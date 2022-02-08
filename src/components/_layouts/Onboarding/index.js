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
  shouldShowGetStarted,
  onGetStartedClose,
  onLessonListClose,
  onRoleUpdated,
}) => {
  const [showGetStarted, setShowGetStarted] = useState(false);
  const [hideNotSureOption, setHideNotSureOption] = useState(false);
  const [role, setRole] = useState();

  const handleShowGetStarted = () => {
    setShowGetStarted(true);
  };

  useEffect(() => {
    if (shouldShowGetStarted) {
      setShowGetStarted(true);
      setHideNotSureOption(true);
    }
  }, [shouldShowGetStarted]);

  useEffect(() => {
    setRole(localStorage.getItem('JoystreamRole'));
  }, []);

  const updateRole = newRole => {
    setRole(newRole);
    localStorage.setItem('JoystreamRole', newRole);
    onRoleUpdated();
  };

  return (
    <ScrollProvider>
      <div className="OnboardingLayout__wrapper">
        <NavbarOnboarding t={t} showGetStarted onShowGetStarted={handleShowGetStarted} role={role} />
        {showLessonList && <LessonList t={t} lessonIndex={lessonIndex} onLessonListClose={onLessonListClose} />}
        {showGetStarted && (
          <GetStarted
            t={t}
            hideNotSureOption={hideNotSureOption}
            onGetStartedClose={() => {
              onGetStartedClose();
              setShowGetStarted(false);
            }}
            onRoleChange={updateRole}
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
