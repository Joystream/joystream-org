import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import OnboardingLayout from '../../../components/_layouts/Onboarding';
import InfoSection from '../../../components/onboarding-page/InfoSection';
import BuilderSection from '../../../components/onboarding-page/BuilderSection';
import VideoSection from '../../../components/onboarding-page/VideoSection';
import Bounties from '../../../components/onboarding-page/Bounties';
import FAQ from '../../../components/onboarding-page/FAQ';
import useLessonList from '../../../utils/pages/onboarding/useLessonList';
import './style.scss';

const Onboarding = () => {
  const { t } = useTranslation();
  const [shouldShowLessonList, setShouldShowLessonList] = useState(false);
  const [shouldReloadRole, setShouldReloadRole] = useState(false);
  const [shouldShowGetStarted, setShouldShowGetStarted] = useState(false);
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
  const lessonIndex = 6;
  const { lessonLinks, getNextVideoUrl, getNextVideoTitle } = useLessonList();

  const handleGetStarted = () => setShouldShowGetStarted(true);

  return (
    <OnboardingLayout
      t={t}
      nextVideoText={t(getNextVideoTitle(lessonIndex))}
      nextVideoUrl={getNextVideoUrl(lessonIndex)}
      showLessonList={shouldShowLessonList}
      lessonIndex={lessonIndex}
      shouldShowGetStarted={shouldShowGetStarted}
      onGetStartedClose={() => setShouldShowGetStarted(false)}
      onLessonListClose={() => setShouldShowLessonList(false)}
      onRoleUpdated={() => setShouldReloadRole(true)}
    >
      <div className="Onboarding__wrapper">
        <VideoSection
          t={t}
          title={t('onboarding.page6.title')}
          subtitle={t('onboarding.page6.subtitle')}
          nextVideoUrl={getNextVideoUrl(lessonIndex)}
          nextVideoTitle={getNextVideoTitle(lessonIndex)}
          shouldReloadRole={shouldReloadRole}
          index={lessonIndex}
          lesson={lessonLinks[lessonIndex]}
          showLessonList={() => setShouldShowLessonList(true)}
        ></VideoSection>
      </div>
      <InfoSection title={t('onboarding.page6.infoSection.title')} text={t('onboarding.page6.infoSection.text')} />
      <Bounties t={t} noHover={true} />
      <FAQ title={t('onboarding.page1.faq.title')} tokenQuestions={questions} />
      <BuilderSection
        shouldReloadRole={shouldReloadRole}
        t={t}
        onShowGetStarted={handleGetStarted}
        onRoleReloaded={() => setShouldReloadRole(false)}
      />
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
