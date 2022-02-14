import { useState, useEffect } from 'react';

const useLessonList = () => {
  const [role, setRole] = useState();

  useEffect(() => {
    setRole(localStorage.getItem('JoystreamRole'));
  }, []);

  const data = [
    {
      title: 'onboarding.lessonList.lesson1.title',
      length: '06:25',
      index: 1,
    },
    {
      title: 'onboarding.lessonList.lesson2.title',
      length: '06:25',
      index: 2,
    },
    {
      title: 'onboarding.lessonList.lesson3.title',
      length: '06:25',
      index: 3,
    },
    {
      title: 'onboarding.lessonList.lesson4.title',
      length: '06:25',
      index: 4,
    },
    {
      title: 'onboarding.lessonList.lesson5.title',
      length: '06:25',
      index: 5,
    },
    {
      title: 'onboarding.lessonList.lesson6.title',
      length: '06:25',
      index: 6,
    },
    {
      title: 'onboarding.lessonList.lesson7.title',
      length: '06:25',
      index: 7,
    },
  ];

  const getLessonData = useRolePath => {
    if (role && useRolePath) {
      const rolePathOrder = roleIndexes[role.toLowerCase().replaceAll(' ', '')];
      return rolePathOrder.map(index => data[index - 1]);
    }
    return data;
  };

  const lessonLinks = {
    1: '/start-here/what-is-joystream',
    2: '/start-here/joystream-as-dao',
    3: '/start-here/what-is-fm-program',
    4: '/start-here/what-is-council',
    5: '/start-here/what-are-working-groups',
    6: '/start-here/what-are-bounties',
    7: '/start-here/video-creator',
  };

  const addVideoToWatched = lesson => {
    const watchedVideos = localStorage.getItem('JoystreamWatchedVideos');
    localStorage.setItem('JoystreamWatchedVideos', `${watchedVideos ? `${watchedVideos},${lesson}` : lesson}`);
  };

  const isVideoWatched = lesson => {
    const watchedVideos = localStorage.getItem('JoystreamWatchedVideos');
    if (watchedVideos && watchedVideos.indexOf(lesson) > -1) {
      return true;
    }
    return false;
  };

  const roleIndexes = {
    builder: [1, 2, 3, 4, 5],
    techie: [1, 2, 3, 4, 5],
    marketer: [1, 2, 3, 4, 5],
    curator: [1, 2, 3, 4, 5],
    organiser: [1, 2, 3, 6, 4, 5],
    videocreator: [1, 3, 7, 2, 5],
  };

  const getTotalVideos = () => {
    if (role) {
      return roleIndexes[role.replaceAll(' ', '').toLowerCase()].length;
    }
    return lessonLinks.length;
  };

  const getVideoIndex = index => {
    if (role) {
      const indexes = roleIndexes[role.replaceAll(' ', '').toLowerCase()];
      for (let i = 0; i < indexes.length; i++) {
        if (indexes[i] === index) {
          return i + 1;
        }
      }
      return indexes.length;
    }
    return index;
  };

  const getNextVideoUrl = currentIndex => {
    if (role) {
      const suffix = role.replaceAll(' ', '').toLowerCase();
      const indexes = roleIndexes[suffix];
      for (let index = 0; index < indexes.length - 1; index++) {
        if (indexes[index] === currentIndex) {
          return lessonLinks[indexes[index + 1]];
        }
      }
      return undefined;
    }
    return lessonLinks[currentIndex + 1];
  };

  return {
    lessonLinks,
    roleIndexes,
    getLessonData,
    getNextVideoUrl,
    getTotalVideos,
    getVideoIndex,
    addVideoToWatched,
    isVideoWatched,
  };
};

export default useLessonList;
