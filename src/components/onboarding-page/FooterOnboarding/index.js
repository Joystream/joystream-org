import React, { useState, useEffect } from 'react';
import FooterAction from './FooterAction';
import useLessonList from '../../../utils/pages/onboarding/useLessonList';

import './style.scss';

const FooterOnboarding = ({ t, role, lessonIndex, onShowGetStarted }) => {
  const { getNextVideoUrl, getNextVideoTitle } = useLessonList();

  const [nextVideo, setNextVideo] = useState({
    url: '',
    title: '',
  });

  useEffect(() => {
    const title = getNextVideoTitle(lessonIndex, role);
    const url = getNextVideoUrl(lessonIndex, role);
    if (nextVideo.title !== title || nextVideo.url !== url) {
      setNextVideo({
        title,
        url,
      });
    }
  }, [role, lessonIndex, nextVideo.title, nextVideo.url, getNextVideoTitle, getNextVideoUrl]);

  return (
    <footer className={`FooterOnboarding ${!(nextVideo && nextVideo.url) ? 'FooterOnboarding__lastPage' : ''}`}>
      {nextVideo && nextVideo.url && (
        <FooterAction
          title={t('onboarding.page1.footer.title')}
          subtitle={nextVideo.text}
          role={role}
          buttonTitle={t('onboarding.footer.button.nextVideo.text')}
          url={nextVideo.url}
          onShowGetStarted={onShowGetStarted}
        />
      )}
    </footer>
  );
};

export default FooterOnboarding;
