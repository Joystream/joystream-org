import React from 'react';
import InterviewSection from './InterviewSection';
import FMAdvice1 from '../../../assets/images/fm-advice-1.png';
import FMAdvice2 from '../../../assets/images/fm-advice-2.png';
import FMAdvice3 from '../../../assets/images/fm-advice-3.png';
import FMAdvice4 from '../../../assets/images/fm-advice-4.png';
import FMAdvice5 from '../../../assets/images/fm-advice-5.png';

import './style.scss';

const FMInterviews = ({ t }) => {
  const data = [
    {
      title: t('onboarding.page3.fmInterviews.section1.title'),
      subtitle: t('onboarding.page3.fmInterviews.section1.text'),
      image: FMAdvice1,
      fullWidth: false,
    },
    {
      title: t('onboarding.page3.fmInterviews.section2.title'),
      subtitle: t('onboarding.page3.fmInterviews.section2.text'),
      image: FMAdvice2,
      fullWidth: false,
    },
    {
      title: t('onboarding.page3.fmInterviews.section3.title'),
      subtitle: t('onboarding.page3.fmInterviews.section3.text'),
      image: FMAdvice3,
      fullWidth: true,
    },
    {
      title: t('onboarding.page3.fmInterviews.section4.title'),
      subtitle: t('onboarding.page3.fmInterviews.section4.text'),
      image: FMAdvice4,
      fullWidth: false,
    },
    {
      title: t('onboarding.page3.fmInterviews.section5.title'),
      subtitle: t('onboarding.page3.fmInterviews.section5.text'),
      image: FMAdvice5,
      fullWidth: false,
    },
  ];

  return (
    <div className="FMInterviews__wrapper">
      <h2 className="FMInterviews__title">{t('onboarding.page3.fmInterviews.title')}</h2>
      <div className="FMInterviews__item__wrapper">
        {data &&
          data.map((item, index) => {
            return (
              <InterviewSection
                key={index}
                title={item.title}
                subtitle={item.subtitle}
                image={item.image}
                fullWidth={item.fullWidth}
              />
            );
          })}
      </div>
    </div>
  );
};

export default FMInterviews;
