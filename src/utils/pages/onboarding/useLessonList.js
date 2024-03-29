import VideoThumbnail1 from '../../../assets/images/Joystream_Thumbnail_1.jpeg';
import VideoThumbnail2 from '../../../assets/images/Joystream_Thumbnail_2.jpeg';
import VideoThumbnail3 from '../../../assets/images/Joystream_Thumbnail_3.jpeg';
import VideoThumbnail4 from '../../../assets/images/Joystream_Thumbnail_4.jpeg';
import VideoThumbnail5 from '../../../assets/images/Joystream_Thumbnail_5.jpeg';
import VideoThumbnail6 from '../../../assets/images/Joystream_Thumbnail_6.jpeg';
import VideoThumbnail7 from '../../../assets/images/Joystream_Thumbnail_7.jpeg';

const useLessonList = () => {
  const data = [
    {
      title: 'onboarding.lessonList.lesson1.title',
      length: '03:04',
      index: 1,
    },
    {
      title: 'onboarding.lessonList.lesson2.title',
      length: '06:09',
      index: 2,
    },
    {
      title: 'onboarding.lessonList.lesson3.title',
      length: '06:16',
      index: 3,
    },
    {
      title: 'onboarding.lessonList.lesson4.title',
      length: '03:14',
      index: 4,
    },
    {
      title: 'onboarding.lessonList.lesson5.title',
      length: '02:46',
      index: 5,
    },
    {
      title: 'onboarding.lessonList.lesson6.title',
      length: '01:31',
      index: 6,
    },
    {
      title: 'onboarding.lessonList.lesson7.title',
      length: '02:54',
      index: 7,
    },
  ];

  const getLessonData = (useRolePath, role) => {
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

  const lessonUrls = {
    '/start-here/what-is-joystream': 'https://play.joystream.org/embedded/video/15153',
    '/start-here/joystream-as-dao': 'https://play.joystream.org/embedded/video/15154',
    '/start-here/what-is-fm-program': 'https://play.joystream.org/embedded/video/15156',
    '/start-here/what-is-council': 'https://play.joystream.org/embedded/video/15157',
    '/start-here/what-are-working-groups': 'https://play.joystream.org/embedded/video/15164',
    '/start-here/what-are-bounties': 'https://play.joystream.org/embedded/video/15165',
    '/start-here/video-creator': 'https://play.joystream.org/embedded/video/15201',
  };

  const lessonThumbnails = {
    '/start-here/what-is-joystream': VideoThumbnail1,
    '/start-here/joystream-as-dao': VideoThumbnail2,
    '/start-here/what-is-fm-program': VideoThumbnail3,
    '/start-here/what-is-council': VideoThumbnail4,
    '/start-here/what-are-working-groups': VideoThumbnail5,
    '/start-here/what-are-bounties': VideoThumbnail6,
    '/start-here/video-creator': VideoThumbnail7,
  };

  const lessonTitles = {
    1: 'onboarding.lessonList.lesson1.title',
    2: 'onboarding.lessonList.lesson2.title',
    3: 'onboarding.lessonList.lesson3.title',
    4: 'onboarding.lessonList.lesson4.title',
    5: 'onboarding.lessonList.lesson5.title',
    6: 'onboarding.lessonList.lesson6.title',
    7: 'onboarding.lessonList.lesson7.title',
  };

  const addVideoToWatched = lesson => {
    const watchedVideos = localStorage.getItem('JoystreamWatchedVideos');
    if (!watchedVideos || watchedVideos.indexOf(lesson) < 0) {
      localStorage.setItem('JoystreamWatchedVideos', `${watchedVideos ? `${watchedVideos},${lesson}` : lesson}`);
    }
  };

  const isVideoWatched = lesson => {
    const watchedVideos = localStorage.getItem('JoystreamWatchedVideos');
    if (watchedVideos && watchedVideos.indexOf(lesson) > -1) {
      return true;
    }
    return false;
  };

  const setVideoInProgress = lesson => {
    localStorage.setItem('JoystreamVideoInProgress', lesson);
  };

  const isVideoInProgress = lesson => {
    return lesson === localStorage.getItem('JoystreamVideoInProgress');
  };

  const setVideoProgress = lesson => {
    localStorage.setItem('JoystreamVideoProgress', lesson);
  };

  const getVideoProgress = lesson => {
    return localStorage.getItem('JoystreamVideoProgress');
  };

  const roleIndexes = {
    builder: [1, 2, 3, 4, 5],
    techie: [1, 2, 3, 4, 5],
    marketer: [1, 2, 3, 4, 5],
    curator: [1, 2, 3, 4, 5],
    organiser: [1, 2, 3, 6, 4, 5],
    videocreator: [1, 3, 7, 2, 6],
  };

  const getTotalVideos = role => {
    if (role) {
      return roleIndexes[role.replaceAll(' ', '').toLowerCase()].length;
    }
    return lessonLinks.length;
  };

  const getVideoIndex = (index, role) => {
    if (role) {
      const indexes = roleIndexes[role.replaceAll(' ', '').toLowerCase()];
      for (let i = 0; i < indexes.length; i++) {
        if (indexes[i] === index) {
          return i + 1;
        }
      }
      return undefined;
    }
    return index;
  };

  const getNextVideoUrl = (currentIndex, role) => {
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

  const getNextVideoTitle = (currentIndex, role) => {
    if (role) {
      const suffix = role.replaceAll(' ', '').toLowerCase();
      const indexes = roleIndexes[suffix];
      for (let index = 0; index < indexes.length - 1; index++) {
        if (indexes[index] === currentIndex) {
          return lessonTitles[indexes[index + 1]];
        }
      }
      return undefined;
    }
    return lessonTitles[currentIndex + 1];
  };

  return {
    lessonLinks,
    lessonUrls,
    roleIndexes,
    lessonThumbnails,
    getLessonData,
    getNextVideoUrl,
    getNextVideoTitle,
    getTotalVideos,
    getVideoIndex,
    addVideoToWatched,
    isVideoWatched,
    setVideoInProgress,
    isVideoInProgress,
    setVideoProgress,
    getVideoProgress,
  };
};

export default useLessonList;
