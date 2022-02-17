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
  onRoleUpdated,
}) => {
  const [showGetStarted, setShowGetStarted] = useState(false);
  const [shouldNavigateToRolePage, setShouldNavigateToRolePage] = useState(false);
  const [hideNotSureOption, setHideNotSureOption] = useState(false);
  const [role, setRole] = useState();
  const { getNextVideoUrl, getNextVideoTitle } = useLessonList();
  const reloadNextVideo = newRole => {
    return {
      title: getNextVideoTitle(lessonIndex, newRole),
      url: getNextVideoUrl(lessonIndex, newRole),
    };
  };

  const [nextVideo, setNextVideo] = useState(reloadNextVideo());

  const handleShowGetStarted = () => {
    setShowGetStarted(true);
  };

  useEffect(() => {
    if (shouldShowGetStarted) {
      setShowGetStarted(true);
      if (!nextVideo.url) {
        setShouldNavigateToRolePage(true);
      }
      setHideNotSureOption(true);
    }
  }, [shouldShowGetStarted, nextVideo.url]);

  useEffect(() => {
    setRole(localStorage.getItem('JoystreamRole'));
  }, []);

  const updateRole = newRole => {
    setRole(newRole);
    localStorage.setItem('JoystreamRole', newRole);
    setNextVideo(reloadNextVideo(newRole));
    onRoleUpdated();
  };

  return (
    <ScrollProvider>
      <div className="OnboardingLayout__wrapper">
        <NavbarOnboarding t={t} showGetStarted onShowGetStarted={handleShowGetStarted} role={role} />
        {showLessonList && (
          <LessonList t={t} lessonIndex={lessonIndex} onLessonListClose={onLessonListClose} currentRole={role} />
        )}
        {showGetStarted && (
          <GetStarted
            t={t}
            shouldSwitchRolePage={shouldNavigateToRolePage}
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
        <FooterOnboarding t={t} nextVideoText={t(nextVideo.title)} nextVideoUrl={nextVideo.url} />
      </div>
    </ScrollProvider>
  );
};

OnboardingLayout.propTypes = propTypes;
OnboardingLayout.defaultTypes = defaultTypes;

export default OnboardingLayout;
