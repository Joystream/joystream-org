import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import OnboardingLayout from '../../../components/_layouts/Onboarding';
import InfoSection from '../../../components/onboarding-page/InfoSection';
import BuilderSection from '../../../components/onboarding-page/BuilderSection';
import VideoSection from '../../../components/onboarding-page/VideoSection';
import Bounties from '../../../components/onboarding-page/Bounties';
import TokenInformation from '../../../components/token-page/TokenInformation';

import './style.scss';

const Onboarding = () => {
  const { t } = useTranslation();
  const nextVideoUrl = '/start-here/video-creator';
  const [shouldShowLessonList, setShouldShowLessonList] = useState(false);

  const questions = [
    {
      title: t('onboarding.page6.faq.questions.question1.question'),
      text: t('onboarding.page6.faq.questions.question1.answer'),
    },
    {
      title: t('onboarding.page6.faq.questions.question2.question'),
      text: t('onboarding.page6.faq.questions.question2.answer'),
    },
  ];

  return (
    <OnboardingLayout
      t={t}
      nextVideoText={t('onboarding.page6.footer.subtitle')}
      nextVideoUrl={nextVideoUrl}
      showLessonList={shouldShowLessonList}
      lessonIndex={6}
      onLessonListClose={() => setShouldShowLessonList(false)}
    >
      <div className="Onboarding__wrapper">
        <VideoSection
          t={t}
          title={t('onboarding.page6.title')}
          subtitle={t('onboarding.page6.subtitle')}
          nextVideoUrl={nextVideoUrl}
          index={6}
          showLessonList={() => setShouldShowLessonList(true)}
        ></VideoSection>
      </div>
      <InfoSection title={t('onboarding.page6.infoSection.title')} text={t('onboarding.page6.infoSection.text')} />
      <Bounties t={t} />
      <TokenInformation title={t('onboarding.page1.faq.title')} tokenQuestions={questions} />
      <BuilderSection t={t} />
    </OnboardingLayout>
  );
};

export default Onboarding;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
