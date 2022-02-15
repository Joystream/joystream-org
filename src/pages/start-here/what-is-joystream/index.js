import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import OnboardingLayout from '../../../components/_layouts/Onboarding';
import InfoSection from '../../../components/onboarding-page/InfoSection';
import VideoSection from '../../../components/onboarding-page/VideoSection';
import FAQ from '../../../components/onboarding-page/FAQ';
import useLessonList from '../../../utils/pages/onboarding/useLessonList';
import './style.scss';
import { useState } from 'react';

const Onboarding = () => {
  const { t } = useTranslation();
  const [shouldShowLessonList, setShouldShowLessonList] = useState(false);
  const [shouldReloadRole, setShouldReloadRole] = useState(false);
  const { lessonLinks, getNextVideoUrl, getNextVideoTitle } = useLessonList();
  const lessonIndex = 1;

  const nextVideoUrl = '/start-here/joystream-as-dao';

  const questions = [
    {
      title: t('onboarding.page1.faq.questions.language.question'),
      text: t('onboarding.page1.faq.questions.language.answer'),
    },
    {
      title: t('onboarding.page1.faq.questions.polkadot.question'),
      text: t('onboarding.page1.faq.questions.polkadot.answer'),
    },
    {
      title: t('onboarding.page1.faq.questions.framework.question'),
      text: t('onboarding.page1.faq.questions.framework.answer'),
    },
  ];

  return (
    <OnboardingLayout
      t={t}
      nextVideoText={t(getNextVideoTitle(lessonIndex))}
      nextVideoUrl={nextVideoUrl}
      showLessonList={shouldShowLessonList}
      lessonIndex={lessonIndex}
      onGetStartedClose={() => {}}
      onLessonListClose={() => setShouldShowLessonList(false)}
      onRoleUpdated={() => setShouldReloadRole(true)}
    >
      <div className="Onboarding__wrapper">
        <VideoSection
          t={t}
          title={t('onboarding.page1.title')}
          subtitle={t('onboarding.page1.subtitle')}
          nextVideoUrl={getNextVideoUrl(lessonIndex)}
          nextVideoTitle={t(getNextVideoTitle(lessonIndex))}
          lesson={lessonLinks[lessonIndex]}
          index={lessonIndex}
          shouldReloadRole={shouldReloadRole}
          showLessonList={() => setShouldShowLessonList(true)}
        ></VideoSection>
      </div>
      <InfoSection title={t('onboarding.page1.infoSection.title')} text={t('onboarding.page1.infoSection.text')} />
      <FAQ title={t('onboarding.page1.faq.title')} tokenQuestions={questions} />
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
