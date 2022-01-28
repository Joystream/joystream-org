import React, { useState } from 'react';
import InterviewSection from './InterviewSection';
import Thumbnail1 from '../../../assets/images/interview-thumbnail-1.png';
import Thumbnail2 from '../../../assets/images/interview-thumbnail-2.png';

import './style.scss';

const FMInterviews = ({ t }) => {
  const data = [
    {
      title: t('onboarding.page3.fmInterviews.section1.title'),
      subtitle: t('onboarding.page3.fmInterviews.section1.text'),
      thumbnail: Thumbnail1,
      videoUrl: 'todo.mp4',
    },
    {
      title: t('onboarding.page3.fmInterviews.section2.title'),
      subtitle: t('onboarding.page3.fmInterviews.section2.text'),
      thumbnail: Thumbnail2,
      videoUrl: 'todo.mp4',
    },
  ];

  return (
    <div className="FMInterviews__wrapper">
      <h2 className="FMInterviews__title">{t('onboarding.page3.fmInterviews.title')}</h2>
      {data &&
        data.map((item, index) => {
          return (
            <InterviewSection
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              thumbnail={item.thumbnail}
              videoUrl={item.videoUrl}
            />
          );
        })}
    </div>
  );
};

export default FMInterviews;
