import React, { useEffect } from 'react';
import { node } from 'prop-types';

import NavbarOnboarding from '../../onboarding-page/NavbarOnboarding';
import FooterOnboarding from '../../onboarding-page/FooterOnboarding';
import LessonList from '../../onboarding-page/LessonList';
import CookiesNotice from '../../CookiesNotice';
import { ScrollProvider } from '../../_enhancers/ScrollContext';
import { useState } from 'react';
import GetStarted from '../../onboarding-page/GetStarted';
import useLessonList from '../../../utils/pages/onboarding/useLessonList';
import useContributors from '../../../utils/pages/onboarding/useContributors';
import { navigate } from 'gatsby';

const propTypes = {
  children: node,
};

const defaultTypes = {
  children: null,
};

const OnboardingLayout = ({
  children,
  t,
  showLessonList,
  lessonIndex,
  shouldShowGetStarted,
  onGetStartedClose,
  onLessonListClose,
  isLastPage,
}) => {
  const [showGetStarted, setShowGetStarted] = useState(false);
  const [role, setRole] = useState();
  const { getNextVideoUrl } = useLessonList();
  const { getContributorPageUrl } = useContributors();

  useEffect(() => {
    setRole(localStorage.getItem('JoystreamRole'));
  }, []);

  const handleShowGetStarted = () => {
    setShowGetStarted(true);
  };

  useEffect(() => {
    if (shouldShowGetStarted) {
      setShowGetStarted(true);
    }
  }, [shouldShowGetStarted]);

  const updateRole = newRole => {
    localStorage.setItem('JoystreamRole', newRole);
    setRole(newRole);
    const url = getNextVideoUrl(lessonIndex, newRole);
    if (newRole && isLastPage) {
      navigate(getContributorPageUrl(newRole));
    } else if (url) {
      navigate(url);
    }
  };

  return (
    <ScrollProvider>
      <div className="OnboardingLayout__wrapper">
        <NavbarOnboarding
          t={t}
          showGetStarted
          onShowGetStarted={handleShowGetStarted}
          role={role}
          lessonIndex={lessonIndex}
        />
        {showLessonList && (
          <LessonList t={t} lessonIndex={lessonIndex} onLessonListClose={onLessonListClose} currentRole={role} />
        )}
        {showGetStarted && (
          <GetStarted
            t={t}
            hideNotSureOption={isLastPage}
            onGetStartedClose={() => {
              onGetStartedClose();
              setShowGetStarted(false);
            }}
            onRoleChange={updateRole}
          />
        )}
        {children}
        <CookiesNotice t={t} />
        <FooterOnboarding t={t} lessonIndex={lessonIndex} role={role} onShowGetStarted={handleShowGetStarted} />
      </div>
    </ScrollProvider>
  );
};

OnboardingLayout.propTypes = propTypes;
OnboardingLayout.defaultTypes = defaultTypes;

export default OnboardingLayout;
