import React, { useState, useEffect } from 'react';
import FooterAction from './FooterAction';
import useLessonList from '../../../utils/pages/onboarding/useLessonList';

import './style.scss';

const FooterOnboarding = ({ t, role, lessonIndex, onShowGetStarted }) => {
  const { lessonThumbnails, getNextVideoUrl, getNextVideoTitle } = useLessonList();

  const [nextVideo, setNextVideo] = useState({
    url: '',
    title: '',
    thumbnail: undefined,
  });

  useEffect(() => {
    const title = getNextVideoTitle(lessonIndex, role);
    const url = getNextVideoUrl(lessonIndex, role);
    const thumbnail = lessonThumbnails[url];
    if (nextVideo.title !== title || nextVideo.url !== url) {
      setNextVideo({
        title,
        url,
        thumbnail,
      });
    }
  }, [role, lessonIndex, nextVideo.title, nextVideo.url, lessonThumbnails, getNextVideoTitle, getNextVideoUrl]);

  return (
    <footer className={`FooterOnboarding ${!(nextVideo && nextVideo.url) ? 'FooterOnboarding__lastPage' : ''}`}>
      {nextVideo && nextVideo.url && (
        <FooterAction
          title={t('onboarding.page1.footer.title')}
          subtitle={t(nextVideo.title)}
          role={role}
          buttonTitle={t('onboarding.footer.button.nextVideo.text')}
          url={nextVideo.url}
          thumbnail={nextVideo.thumbnail}
          onShowGetStarted={onShowGetStarted}
        />
      )}
    </footer>
  );
};

export default FooterOnboarding;
