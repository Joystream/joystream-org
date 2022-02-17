import React, { useEffect } from 'react';
import './style.scss';
import useLessonList from '../../../utils/pages/onboarding/useLessonList';

const Video = ({ lesson }) => {
  const { lessonUrls, addVideoToWatched, setVideoInProgress } = useLessonList();

  useEffect(() => {
    const handler = event => {
      const data = event.data;
      if (typeof data === 'string' || data instanceof String) {
        if (data && data.indexOf('atlas_video_ended') >= 0) {
          addVideoToWatched(lesson);
          setVideoInProgress(undefined);
        }
        if (data && data.indexOf('atlas_video_progress') >= 0) {
          setVideoInProgress(lesson);
        }
      }
    };

    window.addEventListener('message', handler);

    return () => window.removeEventListener('message', handler);
  }, [addVideoToWatched, setVideoInProgress, lesson]);

  return (
    <>
      <div className="AtlasDemo__video">
        <iframe
          allowFullScreen={false}
          title="video"
          style={{ position: 'absolute', width: '100%', height: '100%', border: 'none', left: 0, top: 0 }}
          src={lessonUrls[lesson]}
        />
      </div>
    </>
  );
};

export default Video;
